(() => {
  'use strict'

  const form = document.querySelector('#contact-form')
  const status = document.querySelector('#contact-status')
  if (!(form instanceof HTMLFormElement) || !(status instanceof HTMLElement)) {
    return
  }

  const endpoint = 'https://cms.sitestudio.lt/api/public/leads'
  const submit = form.querySelector('button[type="submit"]')

  form.addEventListener('submit', async (event) => {
    event.preventDefault()
    status.textContent = ''
    status.removeAttribute('data-state')

    if (!form.reportValidity()) {
      return
    }

    const data = new FormData(form)
    const payload = {
      consentAccepted: data.get('consentAccepted') === 'on',
      email: String(data.get('email') ?? ''),
      message: String(data.get('message') ?? ''),
      name: String(data.get('name') ?? ''),
      phone: String(data.get('phone') ?? ''),
      website: String(data.get('website') ?? ''),
    }

    if (submit instanceof HTMLButtonElement) {
      submit.disabled = true
    }
    status.textContent = 'Siunčiama…'

    try {
      const response = await fetch(endpoint, {
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
      })
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }
      form.reset()
      status.dataset.state = 'success'
      status.textContent = 'Ačiū. Užklausa priimta – atsakysime nurodytu el. paštu.'
    } catch {
      status.dataset.state = 'error'
      status.textContent =
        'Užklausos išsiųsti nepavyko. Parašykite adresu labas@sitestudio.lt.'
    } finally {
      if (submit instanceof HTMLButtonElement) {
        submit.disabled = false
      }
    }
  })
})()
