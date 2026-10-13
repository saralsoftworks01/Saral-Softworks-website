import { Link } from 'react-router-dom'

export default function Logo({ light = false }) {
  return (
    <Link to="/" className={`logo ${light ? 'logo-light' : ''}`} aria-label="Saral Softworks home">
      <img src="/saral-mark.svg" alt="" width="34" height="34" />
      <span>
        Saral <b>Softworks</b>
      </span>
    </Link>
  )
}
