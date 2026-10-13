import { useState } from 'react'
import { company } from '../content.js'

// No backend yet: builds a pre-filled email. Swap for Formspree / an API later.
export default function ContactForm({ defaultType = 'Hospital / clinic' }) {
  const [form, setForm] = useState({ name: '', org: '', type: defaultType, message: '' })
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const subject = `[${form.type}] Enquiry from ${form.name}`
    const body = `Name: ${form.name}\nOrganisation: ${form.org || '-'}\nI am: ${form.type}\n\n${form.message}`
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="field-row">
        <label>
          Your name
          <input required value={form.name} onChange={set('name')} placeholder="Full name" />
        </label>
        <label>
          Organisation <span className="opt">(optional)</span>
          <input value={form.org} onChange={set('org')} placeholder="Hospital, clinic, company…" />
        </label>
      </div>
      <label>
        I am a
        <select value={form.type} onChange={set('type')}>
          <option>Hospital / clinic</option>
          <option>Diagnostic lab</option>
          <option>Patient / user</option>
          <option>Partner / investor</option>
          <option>Someone with a problem to solve</option>
        </select>
      </label>
      <label>
        Message
        <textarea required rows={4} value={form.message} onChange={set('message')} placeholder="Tell us what you need…" />
      </label>
      <button type="submit" className="btn btn-primary">
        Send message
      </button>
    </form>
  )
}
