// All site copy lives here so it can be edited without touching components.

export const company = {
  name: 'Saral Softworks',
  tagline: 'Simple technology for everyday life',
  email: 'saralsoftworks@gmail.com',
  phone: '+91 94149 52680',
  location: 'India', // TODO: city
}

// Legal identity used across every policy page.
// TODO: replace bracketed values once the company is registered.
export const entity = {
  legalName: '[Saral Softworks Pvt. Ltd. — confirm legal name]',
  address: '[Registered office address]',
  email: 'saralsoftworks@gmail.com',
  grievanceOfficer: '[Grievance Officer name]',
  grievanceEmail: 'saralsoftworks@gmail.com',
  jurisdiction: '[City], India',
  effectiveDate: '12 October 2026',
}

export const nav = [
  { label: 'Products', to: '/#products' },
  { label: 'MyBaari', to: '/mybaari' },
  { label: 'Our approach', to: '/#approach' },
  { label: 'About', to: '/#about' },
]

export const footerLinks = [
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/#about' },
      { label: 'Our approach', to: '/#approach' },
      { label: 'Contact', to: '/#contact' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'MyBaari', to: '/mybaari' },
      { label: 'Request a demo', to: '/mybaari#demo' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy policy', to: '/privacy' },
      { label: 'Terms of use', to: '/terms' },
      { label: 'All policies', to: '/legal' },
    ],
  },
]

export const mybaari = {
  playStoreUrl: '', // TODO: add once the listing is live
  features: [
    { title: 'Phone OTP login', text: 'No passwords to remember. Sign in with the mobile number you already use.' },
    { title: 'Book for family', text: 'Add parents, children or relatives and book on their behalf from one account.' },
    { title: 'Doctors & lab tests', text: 'Book doctor consultations and diagnostic lab tests in the same app.' },
    { title: 'Nearby hospitals', text: 'Find hospitals and labs around you, with doctors, timings and fees up front.' },
    { title: 'Turn alerts', text: 'A notification when your turn is approaching, so you never miss your slot.' },
    { title: 'Reception console', text: 'Check-in, walk-in registration and token calling for the front desk.' },
    { title: 'Doctor availability', text: 'Doctors set their own slots and see the day’s queue at a glance.' },
    { title: 'Hospital reports', text: 'Admins see appointments, departments and collections across the hospital.' },
  ],
  faqs: [
    {
      q: 'Do I pay the doctor’s fee in the app?',
      a: 'No. Only a small platform service fee is paid online while booking. The consultation fee is paid directly at the hospital, as usual.',
    },
    {
      q: 'How accurate is the estimated time?',
      a: 'The estimate is based on the live queue and how long consultations are taking that day. It updates as the doctor sees patients, but treat it as a guide — please reach a little early.',
    },
    {
      q: 'What if I miss my turn?',
      a: 'Inform the reception when you arrive. The hospital decides how missed tokens are handled. See our refund policy for what happens to the service fee.',
    },
    {
      q: 'Can I delete my account?',
      a: 'Yes. You can delete your account from within the app at any time, which removes your profile and family members from MyBaari.',
    },
    {
      q: 'We are a small clinic. Is MyBaari right for us?',
      a: 'Yes. MyBaari works for a single-doctor clinic and scales to multi-department hospitals and labs. Request a demo and we’ll set it up with you.',
    },
  ],
}

export const problems = [
  {
    title: 'Hours lost in waiting rooms',
    text: 'Patients reach the hospital at 9 AM and are seen at 1 PM — sick, tired, and with no idea how long is left.',
  },
  {
    title: 'Tools built for someone else',
    text: 'Most software is designed for large enterprises with IT teams. A town clinic or a family-run lab is left with paper registers.',
  },
  {
    title: 'Complexity as a barrier',
    text: 'If an app needs training, fast internet, or perfect English to use, it simply never reaches most of the people who need it.',
  },
]

export const myBaariSteps = [
  {
    n: '01',
    title: 'Book from home',
    text: 'Pick the hospital, doctor, and day. Get a token number on your phone instantly — no queue at the counter.',
  },
  {
    n: '02',
    title: 'Watch the queue live',
    text: 'See which token the doctor is seeing right now and how many people are ahead of you.',
  },
  {
    n: '03',
    title: 'Leave at the right time',
    text: 'MyBaari estimates when your turn will come, so you arrive just in time instead of waiting for hours.',
  },
]

export const myBaariAudiences = [
  {
    who: 'For patients',
    points: ['Book appointments by phone OTP', 'Live token & estimated arrival time', 'Alerts when your turn is near'],
  },
  {
    who: 'For doctors',
    points: ['Today’s queue at a glance', 'Manage availability & slots', 'Fewer crowds, calmer OPD'],
  },
  {
    who: 'For hospitals & labs',
    points: ['Reception check-in & walk-ins', 'Department & doctor management', 'Reports across the hospital'],
  },
]

export const principles = [
  {
    title: 'Saral by default',
    text: 'If someone needs a manual to use it, we haven’t finished designing it. Every screen is built for a first-time smartphone user.',
  },
  {
    title: 'Built for every corner',
    text: 'Works on budget phones and patchy networks, so a district hospital gets the same experience as a city one.',
  },
  {
    title: 'Scales without getting complicated',
    text: 'The same product runs a single-doctor clinic or a multi-department hospital. Growth adds capacity, not confusion.',
  },
  {
    title: 'Fair and transparent',
    text: 'Pricing that a small clinic can afford and a large hospital can justify. No hidden fees, no lock-in.',
  },
]

export const upcoming = [
  {
    title: 'Everyday services',
    text: 'Queues exist everywhere — banks, government offices, service centres. MyBaari’s engine is built to travel.',
  },
  {
    title: 'Local businesses',
    text: 'Simple digital tools for the shops and service providers that keep a neighbourhood running.',
  },
  {
    title: 'Your idea?',
    text: 'Facing a daily problem that software could solve? Tell us — that’s exactly how MyBaari started.',
  },
]
