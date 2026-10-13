// Policy documents. Each section is { h, p: [paragraphs], ul: [bullets] }.
// DRAFTS — to be reviewed by a lawyer before launch.
import { company, entity } from '../content.js'

const contactSection = (extra = []) => ({
  h: 'Contact & grievances',
  p: [
    `For any questions or complaints about this policy, write to our Grievance Officer, ${entity.grievanceOfficer}, at ${entity.grievanceEmail}. We aim to acknowledge complaints within 48 hours and resolve them within 30 days.`,
    ...extra,
    `${entity.legalName}, ${entity.address}.`,
  ],
})

/* ---------------- Company ---------------- */

export const companyPrivacy = {
  slug: 'privacy',
  scope: 'company',
  title: 'Privacy Policy',
  summary: `How ${company.name} handles information collected through this website. Each product has its own privacy policy.`,
  sections: [
    {
      h: 'Who we are',
      p: [
        `This website is operated by ${entity.legalName} (“${company.name}”, “we”, “us”). This policy covers this website only. Our products, such as MyBaari, have separate privacy policies that explain the data they process.`,
      ],
    },
    {
      h: 'What we collect',
      ul: [
        'Details you send through our contact or demo forms: name, organisation, email, phone and your message.',
        'Basic technical data such as browser type, pages visited and approximate location derived from your IP address, if analytics are enabled.',
      ],
    },
    {
      h: 'How we use it',
      ul: [
        'To respond to your enquiry or demo request.',
        'To understand how the website is used and improve it.',
        'To meet legal obligations.',
      ],
      p: ['We do not sell your personal data.'],
    },
    {
      h: 'Retention',
      p: ['We keep enquiry details for as long as needed to respond and follow up, and for up to 24 months afterwards unless you ask us to delete them sooner.'],
    },
    {
      h: 'Your rights',
      p: [
        'Under the Digital Personal Data Protection Act, 2023 you may ask us to access, correct or erase your personal data, withdraw consent, or nominate another person to exercise these rights. Email us using the contact details below.',
      ],
    },
    contactSection(),
  ],
}

export const companyTerms = {
  slug: 'terms',
  scope: 'company',
  title: 'Terms of Use',
  summary: `The terms for using the ${company.name} website. Products have their own terms of service.`,
  sections: [
    {
      h: 'Acceptance',
      p: [`By using this website you agree to these terms. If you do not agree, please do not use the website.`],
    },
    {
      h: 'Use of the website',
      ul: [
        'Use the website only for lawful purposes.',
        'Do not attempt to disrupt, scrape or gain unauthorised access to the website or our systems.',
      ],
    },
    {
      h: 'Intellectual property',
      p: [`The ${company.name} and MyBaari names, logos and website content belong to ${entity.legalName}. Do not copy or reuse them without written permission.`],
    },
    {
      h: 'No warranty',
      p: ['Information on this website is provided for general purposes and may change without notice. Product-specific commitments are set out in each product’s own terms.'],
    },
    {
      h: 'Governing law',
      p: [`These terms are governed by the laws of India. Courts in ${entity.jurisdiction} have exclusive jurisdiction.`],
    },
    contactSection(),
  ],
}

/* ---------------- MyBaari ---------------- */

export const mybaariPrivacy = {
  slug: 'privacy',
  scope: 'mybaari',
  title: 'MyBaari Privacy Policy',
  summary: 'What data the MyBaari app collects, why, who it is shared with, and how you can control it.',
  sections: [
    {
      h: 'About this policy',
      p: [
        `MyBaari is a hospital and lab appointment and queue management app operated by ${entity.legalName}. This policy applies to the MyBaari Android app and related services, for patients, doctors, lab staff, receptionists and hospital administrators.`,
      ],
    },
    {
      h: 'Data we collect',
      ul: [
        'Account details: full name, mobile number, and optionally email, age, gender, city and profile photo.',
        'Family members you add: name, age, gender, relationship and optionally phone number.',
        'Appointments and queue data: hospital, doctor or lab test, date, slot, token number, status, and any reason or notes you enter for the visit.',
        'Payment records: amount, status and Razorpay transaction references. We do not see or store your card, UPI or bank details.',
        'Location (only while the app is in use, and only if you allow it): used to show nearby hospitals and labs.',
        'Photos and camera (staff and admins only): used to upload hospital or lab photos.',
        'Device data: a notification token used to send appointment and queue alerts.',
      ],
    },
    {
      h: 'Why we use it',
      ul: [
        'To create your account and verify your phone number.',
        'To book appointments and show your live queue position and estimated time.',
        'To share your booking with the hospital or lab you booked with, so they can serve you.',
        'To send alerts about your appointment and turn.',
        'To process the platform service fee and any refunds.',
        'To keep the service secure and to meet legal obligations.',
      ],
    },
    {
      h: 'Health-related information',
      p: [
        'Appointment details, and any reason or notes you add, can reveal information about your health. We use them only to provide the service, share them only with the hospital or lab you book with, and never use them for advertising.',
      ],
    },
    {
      h: 'Who we share data with',
      ul: [
        'The hospital, doctor or lab you book with.',
        'Supabase — database, authentication and hosting.',
        'MSG91 — sending OTP text messages.',
        'Google Firebase Cloud Messaging — delivering push notifications.',
        'Razorpay — processing payments.',
        'Government authorities, where required by law.',
      ],
      p: ['These providers process data on our behalf and only for these purposes. We do not sell your personal data.'],
    },
    {
      h: 'Retention & deletion',
      p: [
        'We keep your data while your account is active. You can delete your account at any time from within the app; this removes your profile and family members. Appointment and payment records may be retained for the period required by tax and accounting law, after which they are deleted or anonymised.',
      ],
    },
    {
      h: 'Your rights',
      p: [
        'Under the Digital Personal Data Protection Act, 2023 you can access, correct or erase your data, withdraw consent (for example, by turning off location access in your phone settings), and nominate someone to exercise your rights. Contact us using the details below.',
      ],
    },
    {
      h: 'Children',
      p: ['MyBaari accounts are for adults. A parent or guardian may add and book for a child as a family member.'],
    },
    {
      h: 'Security',
      p: ['Data is encrypted in transit, and access is restricted by role so that each user sees only what they need. No system is perfectly secure; we will notify affected users and authorities of any breach as required by law.'],
    },
    contactSection(),
  ],
}

export const mybaariTerms = {
  slug: 'terms',
  scope: 'mybaari',
  title: 'MyBaari Terms of Service',
  summary: 'The rules for using MyBaari as a patient, or as a hospital, lab or staff member.',
  sections: [
    {
      h: 'The service',
      p: [
        `MyBaari, operated by ${entity.legalName}, lets patients book appointments and track queues at participating hospitals and labs. MyBaari is a booking and queue platform — it does not provide medical advice or treatment.`,
      ],
    },
    {
      h: 'Medical care is the hospital’s responsibility',
      p: [
        'All consultations, tests and treatment are provided by the hospital, doctor or lab you book with, who is solely responsible for them. In an emergency, go directly to the nearest hospital or call 112 — do not rely on the app.',
      ],
    },
    {
      h: 'Estimated times',
      p: [
        'Queue positions and estimated times are calculated from live data and are approximate. Delays happen in medical settings. Please arrive a little before your estimated time. We are not responsible for losses caused by waiting times or schedule changes.',
      ],
    },
    {
      h: 'Your account',
      ul: [
        'Provide accurate details for yourself and any family members you add.',
        'Only book on behalf of people who have agreed to it.',
        'Keep your phone and OTP secure; you are responsible for activity on your account.',
      ],
    },
    {
      h: 'Fees',
      p: [
        'A platform service fee may be charged online when you book. The consultation or test fee is set by the hospital or lab and paid to them directly, unless shown otherwise in the app. Refunds of the platform service fee are covered by the MyBaari Refund & Cancellation Policy.',
      ],
    },
    {
      h: 'For hospitals and labs',
      p: [
        'Hospitals and labs are responsible for the accuracy of doctor details, timings and fees shown in MyBaari, and for the conduct of their staff using it. Commercial terms are set out in a separate agreement.',
      ],
    },
    {
      h: 'Acceptable use',
      p: ['Do not misuse the app — for example, by making fake bookings, holding tokens you do not intend to use, or attempting to access other users’ data. We may suspend accounts that do.'],
    },
    {
      h: 'Governing law',
      p: [`These terms are governed by the laws of India. Courts in ${entity.jurisdiction} have exclusive jurisdiction.`],
    },
    contactSection(),
  ],
}

export const mybaariRefunds = {
  slug: 'refunds',
  scope: 'mybaari',
  title: 'MyBaari Refund & Cancellation Policy',
  summary: 'When the online platform service fee is refunded, and how long it takes.',
  sections: [
    {
      h: 'What this covers',
      p: [
        'This policy covers only the platform service fee paid online through MyBaari. Consultation and test fees are paid to the hospital or lab directly and are refunded according to their own policy.',
      ],
    },
    {
      // TODO: confirm these rules with the business before publishing.
      h: 'When you get a refund',
      ul: [
        'Full refund if the hospital, doctor or lab cancels or reschedules your appointment.',
        'Full refund if you cancel at least [X] hours before your slot.',
        'Full refund if payment was deducted but the booking failed.',
        'No refund if you cancel less than [X] hours before your slot, or do not turn up.',
      ],
    },
    {
      h: 'How to cancel',
      p: ['Cancel from the Appointments screen in the app. Refunds that apply are started automatically. For any problem, contact us with your booking ID.'],
    },
    {
      h: 'Refund timeline',
      p: ['Refunds are returned to the original payment method via Razorpay, usually within 5–7 working days of approval, depending on your bank.'],
    },
    {
      h: 'Delivery of service',
      p: ['MyBaari is a digital service. Your booking confirmation and token are delivered instantly in the app; nothing is shipped physically.'],
    },
    contactSection(),
  ],
}

export const allDocs = [companyPrivacy, companyTerms, mybaariPrivacy, mybaariTerms, mybaariRefunds]
