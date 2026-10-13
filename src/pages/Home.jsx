import { Link } from 'react-router-dom'
import PhoneQueue from '../components/PhoneQueue.jsx'
import Reveal from '../components/Reveal.jsx'
import ContactForm from '../components/ContactForm.jsx'
import { company, problems, myBaariSteps, principles, upcoming } from '../content.js'

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="dot" /> सरल · <em>saral</em> — simple
          </p>
          <h1>
            Software that makes everyday life <span className="hl">a little easier.</span>
          </h1>
          <p className="lead">
            Saral Softworks builds simple, reliable technology for the problems people face every day — designed to work
            in a small-town clinic and a large city hospital alike.
          </p>
          <div className="hero-ctas">
            <Link to="/mybaari" className="btn btn-primary">
              Meet MyBaari
            </Link>
            <a href="#approach" className="btn btn-ghost">
              How we build →
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <PhoneQueue />
          <div className="float-chip chip-a">
            <b>Wait at home,</b> not in the hall
          </div>
          <div className="float-chip chip-b">Live token updates</div>
        </div>
      </div>
    </section>
  )
}

function Problems() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="section-head">
          <p className="kicker">Why we exist</p>
          <h2>Everyday problems deserve good software too.</h2>
          <p className="section-lead">
            Technology has transformed how large companies work. We want the same care to reach the patient in the waiting
            room, the doctor running a busy OPD, and the clinic that still runs on a paper register.
          </p>
        </Reveal>
        <div className="grid-3">
          {problems.map((p, i) => (
            <Reveal key={p.title} delay={i * 90} className="card">
              <div className="card-num">0{i + 1}</div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function MyBaariTeaser() {
  return (
    <section className="section product" id="mybaari">
      <div className="container">
        <Reveal className="product-head">
          <img src="/mybaari-icon.svg" alt="MyBaari logo" width="64" height="64" />
          <div>
            <p className="kicker kicker-light">Our first product</p>
            <h2>
              MyBaari <span className="muted-light">— your turn, on time.</span>
            </h2>
          </div>
        </Reveal>
        <Reveal>
          <p className="product-lead">
            <em>Baari</em> means “your turn”. MyBaari is a queue management system for hospitals and labs: patients book
            from home, track their token live, and arrive only when their turn is near.
          </p>
        </Reveal>

        <div className="steps">
          {myBaariSteps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100} className="step">
              <span className="step-n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="product-cta">
          <p>Run a hospital, clinic or lab? Bring MyBaari to your patients.</p>
          <div className="cta-pair">
            <Link to="/mybaari" className="btn btn-outline-light">
              Explore MyBaari
            </Link>
            <Link to="/mybaari#demo" className="btn btn-gold">
              Request a demo
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Approach() {
  return (
    <section className="section" id="approach">
      <div className="container approach">
        <Reveal className="approach-intro">
          <p className="kicker">Our approach</p>
          <h2>Simple isn’t small.</h2>
          <p className="section-lead">
            Making something simple is the hardest part of engineering. Our products are designed so anyone can use them
            on day one — and built on infrastructure that holds up when thousands of people use them at once.
          </p>
        </Reveal>
        <div className="principles">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 80} className="principle">
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Products() {
  return (
    <section className="section section-tint" id="products">
      <div className="container">
        <Reveal className="section-head">
          <p className="kicker">Products</p>
          <h2>One problem at a time.</h2>
          <p className="section-lead">MyBaari is the first. Each product we launch starts with a real, everyday frustration.</p>
        </Reveal>
        <div className="products-grid">
          <Reveal className="pcard pcard-live">
            <div className="pcard-top">
              <img src="/mybaari-icon.svg" alt="" width="48" height="48" />
              <span className="badge badge-live">Live</span>
            </div>
            <h3>MyBaari</h3>
            <p>Hospital & lab queue management — book from home, track your token, arrive on time.</p>
            <Link to="/mybaari" className="link">
              Learn more →
            </Link>
          </Reveal>
          {upcoming.map((u, i) => (
            <Reveal key={u.title} delay={(i + 1) * 90} className="pcard">
              <div className="pcard-top">
                <div className="pcard-ph" aria-hidden="true" />
                <span className="badge">{i === upcoming.length - 1 ? 'Open' : 'Exploring'}</span>
              </div>
              <h3>{u.title}</h3>
              <p>{u.text}</p>
              {i === upcoming.length - 1 && (
                <a href="#contact" className="link">
                  Share a problem →
                </a>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section" id="about">
      <div className="container about">
        <Reveal className="about-quote">
          <p>“If technology can help a big company save an hour, it should help a patient save an hour too.”</p>
        </Reveal>
        <Reveal className="about-copy" delay={100}>
          <p className="kicker">About us</p>
          <h2>A small team with a wide reach.</h2>
          <p>
            Saral Softworks is an Indian software company building products for everyday life. We started with a problem we
            had all lived through — hours spent waiting at a hospital for a few minutes with a doctor — and built MyBaari to
            fix it.
          </p>
          <p>
            We work closely with the people who use our software: patients, doctors, receptionists and administrators. What
            we learn from one product shapes the next.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export function ContactSection({ id = 'contact', title = 'Let’s make something saral.', text, defaultType }) {
  return (
    <section className="section contact" id={id}>
      <div className="container contact-inner">
        <Reveal className="contact-copy">
          <p className="kicker kicker-light">Get in touch</p>
          <h2>{title}</h2>
          <p>
            {text ||
              'Whether you want MyBaari at your hospital, want to partner with us, or have a problem worth solving — we’d love to hear from you.'}
          </p>
          <ul className="contact-list">
            <li>
              <span>Email</span>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
            <li>
              <span>Phone</span>
              <a href={`tel:${company.phone.replace(/\s/g, '')}`}>{company.phone}</a>
            </li>
            <li>
              <span>Based in</span>
              {company.location}
            </li>
          </ul>
        </Reveal>
        <Reveal delay={100}>
          <ContactForm defaultType={defaultType} />
        </Reveal>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Problems />
      <MyBaariTeaser />
      <Approach />
      <Products />
      <About />
      <ContactSection />
    </>
  )
}
