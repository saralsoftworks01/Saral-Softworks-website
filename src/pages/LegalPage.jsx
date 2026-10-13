import { Link, NavLink } from 'react-router-dom'
import { entity } from '../content.js'
import { mybaariLegal } from './MyBaariPage.jsx'
import usePageTitle from '../usePageTitle.js'

const companyLegal = [
  { label: 'Privacy policy', to: '/privacy' },
  { label: 'Terms of use', to: '/terms' },
]

export default function LegalPage({ doc }) {
  usePageTitle(`${doc.title} | Saral Softworks`)
  const isProduct = doc.scope === 'mybaari'
  const siblings = isProduct ? mybaariLegal : companyLegal

  return (
    <div className={`legal ${isProduct ? 'legal-mb' : ''}`}>
      <div className="container legal-inner">
        <aside className="legal-side">
          {isProduct ? (
            <Link to="/mybaari" className="legal-product">
              <img src="/mybaari-icon.svg" alt="" width="32" height="32" /> MyBaari
            </Link>
          ) : (
            <p className="legal-product">Saral Softworks</p>
          )}
          <nav aria-label="Policies">
            {siblings.map((l) => (
              <NavLink key={l.to} to={l.to} end>
                {l.label}
              </NavLink>
            ))}
          </nav>
          <Link to="/legal" className="legal-all">
            All policies →
          </Link>
        </aside>

        <article className="legal-doc">
          <p className="kicker">{isProduct ? 'MyBaari' : 'Saral Softworks'} · Legal</p>
          <h1>{doc.title}</h1>
          <p className="legal-meta">Effective {entity.effectiveDate}</p>
          <p className="legal-summary">{doc.summary}</p>
          {doc.sections.map((s, i) => (
            <section key={s.h}>
              <h2>
                {i + 1}. {s.h}
              </h2>
              {s.p?.map((p) => (
                <p key={p}>{p}</p>
              ))}
              {s.ul && (
                <ul>
                  {s.ul.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </article>
      </div>
    </div>
  )
}

export function LegalIndex() {
  usePageTitle('Legal | Saral Softworks')
  return (
    <div className="legal">
      <div className="container legal-index">
        <p className="kicker">Legal</p>
        <h1>Policies</h1>
        <p className="legal-summary">
          Company-wide policies cover this website. Each product has its own policies for the data and payments it handles.
        </p>
        <div className="legal-groups">
          <div className="legal-group">
            <h2>Saral Softworks</h2>
            <p>This website, enquiries and demo requests.</p>
            {companyLegal.map((l) => (
              <Link key={l.to} to={l.to}>
                {l.label} →
              </Link>
            ))}
          </div>
          <div className="legal-group legal-group-mb">
            <h2>
              <img src="/mybaari-icon.svg" alt="" width="28" height="28" /> MyBaari
            </h2>
            <p>The MyBaari app for patients, hospitals and labs.</p>
            {mybaariLegal.map((l) => (
              <Link key={l.to} to={l.to}>
                {l.label} →
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function NotFound() {
  usePageTitle('Page not found | Saral Softworks')
  return (
    <div className="legal">
      <div className="container legal-index">
        <h1>Page not found</h1>
        <p className="legal-summary">The page you’re looking for doesn’t exist.</p>
        <Link to="/" className="btn btn-primary">
          Back to home
        </Link>
      </div>
    </div>
  )
}
