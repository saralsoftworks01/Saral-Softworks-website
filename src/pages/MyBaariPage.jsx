import { Link } from 'react-router-dom'
import PhoneQueue from '../components/PhoneQueue.jsx'
import Reveal from '../components/Reveal.jsx'
import { ContactSection } from './Home.jsx'
import { myBaariSteps, myBaariAudiences, mybaari } from '../content.js'
import usePageTitle from '../usePageTitle.js'

export const mybaariLegal = [
  { label: 'Privacy policy', to: '/mybaari/privacy' },
  { label: 'Terms of service', to: '/mybaari/terms' },
  { label: 'Refund & cancellation', to: '/mybaari/refunds' },
]

function PlayButton() {
  if (!mybaari.playStoreUrl) {
    return <span className="btn btn-outline-light is-disabled">Coming soon on Google Play</span>
  }
  return (
    <a href={mybaari.playStoreUrl} className="btn btn-gold" target="_blank" rel="noreferrer">
      Get it on Google Play
    </a>
  )
}

export default function MyBaariPage() {
  usePageTitle('MyBaari — Hospital queue tracking from home | Saral Softworks')

  return (
    <div className="mb">
      <section className="mb-hero">
        <div className="container hero-inner">
          <div>
            <div className="mb-brand">
              <img src="/mybaari-icon.svg" alt="" width="56" height="56" />
              <span>
                MyBaari <small>by Saral Softworks</small>
              </span>
            </div>
            <h1>
              Your turn, <span className="mb-hl">on time.</span>
            </h1>
            <p className="lead">
              Book hospital and lab appointments from home, watch the queue live, and leave home only when your turn is
              near. No more spending the whole day in a waiting hall.
            </p>
            <div className="hero-ctas">
              <PlayButton />
              <a href="#demo" className="btn btn-light">
                For hospitals: request a demo
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <PhoneQueue />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <p className="kicker mb-kicker">How it works</p>
            <h2>Three steps. No waiting room.</h2>
          </Reveal>
          <div className="grid-3">
            {myBaariSteps.map((s, i) => (
              <Reveal key={s.n} delay={i * 100} className="card">
                <div className="card-num mb-num">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-teal">
        <div className="container">
          <Reveal className="section-head">
            <p className="kicker kicker-light">Built for everyone in the hospital</p>
            <h2>One app, every role.</h2>
          </Reveal>
          <div className="audiences audiences-flush">
            {myBaariAudiences.map((a, i) => (
              <Reveal key={a.who} delay={i * 90} className="aud">
                <h4>{a.who}</h4>
                <ul>
                  {a.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <p className="kicker mb-kicker">Features</p>
            <h2>Everything a visit needs — nothing it doesn’t.</h2>
          </Reveal>
          <div className="features">
            {mybaari.features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 4) * 70} className="feature">
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container faq-wrap">
          <Reveal>
            <p className="kicker mb-kicker">FAQ</p>
            <h2>Common questions</h2>
            <p className="section-lead">
              Read our <Link to="/mybaari/refunds">refund policy</Link> and{' '}
              <Link to="/mybaari/privacy">privacy policy</Link> for full details.
            </p>
          </Reveal>
          <div className="faq">
            {mybaari.faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ContactSection
        id="demo"
        title="Bring MyBaari to your hospital."
        text="Tell us about your hospital, clinic or lab. We’ll set up a demo, help you onboard your doctors, and have your patients booking from home."
        defaultType="Hospital / clinic"
      />

      <nav className="mb-legal" aria-label="MyBaari policies">
        <div className="container">
          <span>MyBaari policies:</span>
          {mybaariLegal.map((l) => (
            <Link key={l.to} to={l.to}>
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  )
}
