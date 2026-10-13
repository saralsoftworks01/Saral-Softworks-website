import { useEffect, useState } from 'react'

const YOUR_TOKEN = 24
const START = 17
const MINS_PER_PATIENT = 7

// Animated MyBaari phone mockup: the "now serving" token ticks forward
// so visitors see the core idea without reading a word.
export default function PhoneQueue() {
  const [serving, setServing] = useState(START)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setServing(20)
      return
    }
    const id = setInterval(() => {
      setServing((s) => (s >= YOUR_TOKEN - 1 ? START : s + 1))
    }, 2600)
    return () => clearInterval(id)
  }, [])

  const ahead = Math.max(YOUR_TOKEN - serving - 1, 0)
  const progress = ((serving - START) / (YOUR_TOKEN - START)) * 100
  const nearTurn = ahead <= 1

  return (
    <div className="phone" aria-label="MyBaari app preview showing a live token queue">
      <div className="phone-notch" />
      <div className="phone-screen">
        <div className="pq-top">
          <img src="/mybaari-icon.svg" alt="" width="28" height="28" />
          <div>
            <div className="pq-app">MyBaari</div>
            <div className="pq-sub">City Care Hospital</div>
          </div>
        </div>

        <div className="pq-doctor">
          <div className="pq-avatar">AS</div>
          <div>
            <div className="pq-docname">Dr. A. Sharma</div>
            <div className="pq-sub">General Medicine · OPD 3</div>
          </div>
        </div>

        <div className="pq-tokens">
          <div className="pq-card">
            <div className="pq-label">Now serving</div>
            <div className="pq-num" key={serving}>#{serving}</div>
          </div>
          <div className="pq-card pq-card-you">
            <div className="pq-label">Your token</div>
            <div className="pq-num">#{YOUR_TOKEN}</div>
          </div>
        </div>

        <div className="pq-bar" role="progressbar" aria-valuenow={Math.round(progress)} aria-valuemin={0} aria-valuemax={100}>
          <span style={{ width: `${progress}%` }} />
        </div>

        <div className="pq-eta">
          <div>
            <div className="pq-label">Patients ahead</div>
            <div className="pq-eta-val">{ahead}</div>
          </div>
          <div>
            <div className="pq-label">Leave home in</div>
            <div className="pq-eta-val">{ahead * MINS_PER_PATIENT} min</div>
          </div>
        </div>

        <div className={`pq-alert ${nearTurn ? 'is-on' : ''}`}>
          {nearTurn ? 'Your turn is next — please reach OPD 3' : 'Relax at home. We’ll alert you.'}
        </div>
      </div>
    </div>
  )
}
