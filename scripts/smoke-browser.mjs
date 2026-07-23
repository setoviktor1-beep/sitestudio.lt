#!/usr/bin/env node

import fs from 'node:fs/promises'
import process from 'node:process'

import puppeteer from 'puppeteer-core'

const origin = process.env.SITE_ORIGIN ?? 'http://127.0.0.1:4173'
const chromePath = process.env.CHROME_PATH

if (!chromePath) {
  throw new Error('CHROME_PATH is required')
}

const sitemap = await fs.readFile(new URL('../_site/sitemap.xml', import.meta.url), 'utf8')
const routes = [...sitemap.matchAll(/<loc>https:\/\/sitestudio\.lt([^<]*)<\/loc>/g)].map(
  (match) => match[1] || '/',
)

if (routes.length !== 17 || new Set(routes).size !== routes.length) {
  throw new Error(`Expected 17 unique sitemap routes, found ${routes.length}`)
}

const browser = await puppeteer.launch({
  args: ['--disable-dev-shm-usage', '--no-sandbox'],
  executablePath: chromePath,
  headless: true,
})

const viewports = [
  { height: 844, label: 'mobile', width: 390 },
  { height: 900, label: 'desktop', width: 1440 },
]

try {
  for (const viewport of viewports) {
    const page = await browser.newPage()
    await page.setCacheEnabled(false)
    await page.setViewport({ height: viewport.height, width: viewport.width })
    const errors = []
    page.on('console', (message) => {
      if (message.type() === 'error') errors.push(message.text())
    })
    page.on('pageerror', (error) => errors.push(error.message))

    for (const route of routes) {
      const response = await page.goto(`${origin}${route}`, {
        waitUntil: 'networkidle0',
        timeout: 30000,
      })
      if (!response || (!response.ok() && response.status() !== 304)) {
        throw new Error(`${viewport.label} ${route} returned ${response?.status() ?? 'no response'}`)
      }
      const result = await page.evaluate(() => ({
        h1: document.querySelectorAll('h1').length,
        horizontalOverflow: document.documentElement.scrollWidth > window.innerWidth + 1,
        lang: document.documentElement.lang,
        main: document.querySelectorAll('main#main-content').length,
      }))
      if (
        result.h1 !== 1 ||
        result.main !== 1 ||
        result.lang !== 'lt' ||
        result.horizontalOverflow
      ) {
        throw new Error(`${viewport.label} ${route} failed layout or landmark smoke checks`)
      }
    }

    await page.goto(`${origin}/darbai/`, { waitUntil: 'networkidle0' })
    const cardResult = await page.evaluate(() => {
      const cards = [...document.querySelectorAll('a.work-card-whole')]
      return {
        cards: cards.length,
        safe: cards.every(
          (card) =>
            card.target === '_blank' &&
            card.relList.contains('noopener') &&
            card.relList.contains('noreferrer') &&
            card.getAttribute('aria-label')?.includes('naujame lange'),
        ),
      }
    })
    if (cardResult.cards !== 2 || !cardResult.safe) {
      throw new Error(`${viewport.label} project cards failed external-link checks`)
    }

    let focusedCard = false
    await page.evaluate(() => document.body.focus())
    for (let attempt = 0; attempt < 30; attempt += 1) {
      await page.keyboard.press('Tab')
      focusedCard = await page.evaluate(() =>
        document.activeElement?.matches('a.work-card-whole'),
      )
      if (focusedCard) break
    }
    if (!focusedCard) {
      throw new Error(`${viewport.label} project card is not keyboard-focusable`)
    }
    const focusVisible = await page.evaluate(() => {
      const style = getComputedStyle(document.activeElement)
      return style.outlineStyle !== 'none' && Number.parseFloat(style.outlineWidth) > 0
    })
    if (!focusVisible) {
      throw new Error(`${viewport.label} project card has no visible focus indicator`)
    }
    if (errors.length) {
      throw new Error(`${viewport.label} browser console errors: ${errors.join(' | ')}`)
    }
    await page.close()
  }
} finally {
  await browser.close()
}

console.log(`PASS: ${routes.length} routes passed mobile and desktop browser smoke checks`)
