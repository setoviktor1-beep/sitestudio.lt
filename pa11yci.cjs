'use strict'

const chromePath = process.env.CHROME_PATH

if (!chromePath) {
  throw new Error('CHROME_PATH is required')
}

module.exports = {
  defaults: {
    chromeLaunchConfig: {
      args: ['--disable-dev-shm-usage', '--no-sandbox'],
      executablePath: chromePath,
    },
    runners: ['axe', 'htmlcs'],
    standard: 'WCAG2AA',
    timeout: 30000,
    viewport: {
      height: 844,
      width: 390,
    },
  },
  urls: [
    'http://127.0.0.1:4173/',
    'http://127.0.0.1:4173/paslaugos/',
    'http://127.0.0.1:4173/svetainiu-kurimas/',
    'http://127.0.0.1:4173/landing-page-kurimas/',
    'http://127.0.0.1:4173/payload-cms/',
    'http://127.0.0.1:4173/seo-aeo-optimizavimas/',
    'http://127.0.0.1:4173/darbai/',
    'http://127.0.0.1:4173/darbai/situacija-eu/',
    'http://127.0.0.1:4173/darbai/leonamai-lt/',
    'http://127.0.0.1:4173/duk/',
    'http://127.0.0.1:4173/kontaktai/',
    'http://127.0.0.1:4173/apie/',
  ],
}
