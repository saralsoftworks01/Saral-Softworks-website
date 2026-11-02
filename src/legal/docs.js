// Policy documents. Each section is { h, p: [paragraphs], ul: [bullets] }.
// DRAFTS — to be reviewed by a lawyer before launch.
import { company, entity } from '../content.js'

const contactSection = (extra = []) => ({
  h: 'Contact & grievances',
  p: [
    `For any questions or complaints about this policy, write to our Grievance Officer${entity.grievanceOfficer ? `, ${entity.grievanceOfficer},` : ""} at ${entity.grievanceEmail}. We aim to acknowledge complaints within 48 hours and resolve them within 30 days.`,
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
      h: 'When you get a refund',
      ul: [
        'Full refund if the hospital, doctor or lab cancels or reschedules your appointment.',
        'Full refund if you cancel at least 24 hours before your slot.',
        'Full refund if payment was deducted but the booking failed.',
        'No refund if you cancel less than 24 hours before your slot, or do not turn up.',
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

export const mybaariAccountDeletion = {
  slug: 'delete-account',
  scope: 'mybaari',
  title: 'MyBaari Account Deletion',
  summary: 'How to delete your MyBaari or MyBaari Partner account, what is deleted, and what is kept.',
  sections: [
    {
      h: 'Overview',
      p: [
        `MyBaari and MyBaari Partner are operated by ${entity.legalName}, Delhi, India.`,
        'You can delete your account at any time from inside the app. The same mobile number can be used in MyBaari (as a patient) and MyBaari Partner (as hospital, clinic or lab staff); deleting in one app deletes only that app’s account and data — the other app is not affected.',
      ],
    },
    {
      h: 'MyBaari (patients)',
      ul: [
        'Sign in, go to Profile, tap Delete Account and confirm. It happens straight away.',
        'Deleted: your patient profile (age, gender, city), family members, ratings and support conversations from the MyBaari app. Upcoming appointments and lab bookings are cancelled; refunds of online fees follow the Refund & Cancellation Policy.',
        'If your number is also used in MyBaari Partner, your staff access there stays and you can keep signing in to MyBaari Partner. Otherwise your login is deleted too.',
      ],
    },
    {
      h: 'MyBaari Partner (hospital, clinic and lab staff)',
      ul: [
        'Sign in, go to More, tap Delete my account and confirm. It happens straight away.',
        'Deleted: your membership of your workplace (with the role and permissions it gave you), any pending invitations to your number and your support conversations from MyBaari Partner.',
        'Your MyBaari patient account — bookings, family members and history — is not affected.',
        'If you are the only admin of your workplace, make another team member an admin first (More → Staff & permissions), or contact MyBaari support to close the workplace — a workplace cannot be left without an admin.',
        'To stop working at a facility but keep your MyBaari Partner sign-in for another workplace, use More → Leave instead.',
      ],
    },
    {
      h: 'Delete some of your data without deleting your account',
      ul: [
        'Family members: in MyBaari, go to Profile → Family members and tap Remove on the member. Their details are deleted straight away.',
        'Profile details (age, gender, city): in MyBaari, go to Profile, edit and clear or change them.',
        'Location: MyBaari never stores your location. To stop it being used, turn off location for MyBaari in your phone settings and search by city instead.',
        `Anything else (for example support conversations or ratings): write to ${company.email} or call/WhatsApp ${company.phone} from your registered mobile number, say what you want deleted, and we will delete it within 7 days. Booking and payment records are kept as described below, but your name, phone number and address can be removed from them.`,
      ],
    },
    {
      h: 'What is kept',
      ul: [
        'Records of past bookings and payments are kept for as long as accounting and tax laws require (generally up to 8 years), so hospitals and labs can maintain their accounts, but your name, phone number and address are removed from them.',
        'Actions taken in MyBaari Partner (for example registering a walk-in) stay in the workplace’s audit history, as the law and the facility’s records require.',
      ],
    },
    {
      h: 'Can’t open the app?',
      p: [
        `Write to ${company.email} or call/WhatsApp ${company.phone} from the mobile number on the account (or mention it), say which app’s account to delete (MyBaari or MyBaari Partner), and we will confirm the number belongs to you before deleting it, within 7 days.`,
      ],
    },
    contactSection(),
  ],
}

// The three docs below mirror the in-app text exactly (MyBaari/legal/policies/*.md) — don't reword.
const SUPPORT_CONTACT = `${company.email} or ${company.phone}`

export const mybaariMedicalDisclaimer = {
  slug: 'medical-disclaimer',
  scope: 'mybaari',
  title: 'Medical Disclaimer',
  meta: 'Last updated 27 October 2026 · Applies to: MyBaari (patients)',
  summary: 'Please read this before using MyBaari to book care.',
  sections: [
    {
      h: 'Not for emergencies',
      p: ['MyBaari is not an emergency service. In a medical emergency call 112 (national emergency number) or 108 (ambulance), or go to the nearest emergency department immediately. Do not wait for a queue token.'],
    },
    {
      h: 'No medical advice',
      ul: [
        'MyBaari is a booking and queue-management platform. It does not diagnose, treat or give medical advice, and nothing in the apps or website is a substitute for a qualified doctor.',
        "Doctors, hospitals, clinics and labs listed on MyBaari are independent. MyBaari does not employ them, recommend a particular one, or guarantee their qualifications, services or outcomes. Ratings are patients' own opinions.",
      ],
    },
    {
      h: 'Information shown',
      p: ['Timings, fees, doctor availability, test details and queue estimates are supplied by facilities or calculated automatically, and can change or be inaccurate. Please confirm important details with the facility.'],
    },
  ],
}

export const mybaariPartnerTerms = {
  slug: 'partner-terms',
  scope: 'mybaari',
  title: 'Partner Terms',
  meta: 'Last updated 27 October 2026 · Applies to: MyBaari Partner (hospitals, clinics & labs)',
  summary: 'These Partner Terms apply to hospitals, clinics and labs ("Facilities") that register on or use MyBaari Partner, and to their admins and staff, together with the Privacy Policy. The person registering a Facility confirms they are authorised to accept these terms on its behalf.',
  sections: [
    {
      h: 'Registration and approval',
      ul: [
        'Register only a Facility you own or are authorised to manage. Provide accurate details — name, address, contact, timings, doctors and services — and keep them up to date.',
        `New Facilities start "Under review". MyBaari may verify details and ask for documents (for example registration under the Clinical Establishments Act or state law, doctors' medical council registration, lab accreditation). Patients can find and book a Facility, and counter registrations open, only after approval.`,
        'MyBaari may refuse, suspend or remove a Facility that provides false information, fails to serve patients, breaks the law or these terms. Reasons are recorded and shared where appropriate.',
      ],
    },
    {
      h: 'Admins, staff and accounts',
      ul: [
        "The Facility's admin invites staff by mobile number and chooses each person's permissions. The Facility is responsible for everything done by its admins and staff in MyBaari Partner, and for removing access promptly when someone leaves.",
        'A mobile number can belong to only one workplace at a time. Every Facility must keep at least one admin.',
        'Keep sign-in OTPs private. Do not share accounts.',
      ],
    },
    {
      h: 'Serving patients',
      ul: [
        'Honour confirmed bookings and queue tokens, keep doctor schedules and slot capacity accurate, and keep the OPD status (open / closed) correct. If you must cancel or reschedule, do it in the app so patients are informed.',
        "Clinical care, diagnosis, reports, consultation fees and test charges are entirely the Facility's responsibility. MyBaari does not supervise medical practice.",
        'Fees shown in MyBaari must match what you charge at the counter. Do not charge patients extra for booking through MyBaari.',
      ],
    },
    {
      h: 'Fees and payments',
      ul: [
        'MyBaari may charge patients a platform service fee per online booking (and for labs, may collect the home-collection fee online). These are set by MyBaari and shown to patients before they pay. Changes will be notified in advance.',
        'Consultation fees and test charges are collected by the Facility directly. Cash collected at the counter can be recorded in MyBaari Partner for your reports; MyBaari does not hold or settle Facility money unless agreed separately in writing.',
      ],
    },
    {
      h: 'Patient data',
      ul: [
        "Patient details you receive through MyBaari may be used only to provide the booked service and to meet your legal duties. Keep them confidential and secure, do not use them for marketing without the patient's consent, and do not export them except as the law requires.",
        'You are responsible, as a Data Fiduciary, for personal data you collect or record about patients for your own purposes, including clinical records, under the Digital Personal Data Protection Act, 2023 and medical confidentiality rules.',
        `Tell MyBaari immediately at ${SUPPORT_CONTACT} if you suspect a staff account was misused or patient data was exposed.`,
      ],
    },
    {
      h: 'Acceptable use',
      ul: [
        'Use MyBaari Partner only to run your own Facility. Do not create false bookings or ratings, access data you are not permitted to see, share accounts, or try to disrupt, scrape or reverse engineer the service.',
        'MyBaari is provided "as is". We work to keep it running but do not guarantee it will be uninterrupted or error-free. We may change features, with notice for significant changes.',
      ],
    },
    {
      h: 'Content and ratings',
      ul: [
        "You grant MyBaari a licence to show your Facility's name, logo, photos and details in the MyBaari apps and website. Make sure you have the rights to what you upload.",
        'Patients may rate completed visits. MyBaari does not edit genuine ratings; report suspected fake or abusive ratings to support.',
      ],
    },
    {
      h: 'Liability and indemnity',
      ul: [
        'The Facility is solely liable for the medical and diagnostic services it provides and agrees to indemnify MyBaari against claims arising from those services, from inaccurate Facility information, or from misuse of patient data by its staff.',
        "MyBaari's liability to a Facility is limited to the platform fees MyBaari received for that Facility in the 3 months before the claim, to the extent the law allows.",
      ],
    },
    {
      h: 'Ending the arrangement',
      p: ["A Facility may stop using MyBaari at any time by contacting support; we will hide it from patients and cancel future bookings after informing the patients. MyBaari may end the arrangement with 30 days' notice, or immediately for serious breaches."],
    },
    {
      h: 'General',
      p: [`These terms are governed by the laws of India, with exclusive jurisdiction of courts at Delhi. Contact: ${SUPPORT_CONTACT}.`],
    },
  ],
}

export const mybaariGrievance = {
  slug: 'grievance',
  scope: 'mybaari',
  title: 'Grievance & Contact',
  meta: 'Last updated 27 October 2026 · Applies to: MyBaari (patients), MyBaari Partner (hospitals, clinics & labs)',
  summary: 'We want to resolve problems quickly. Here is how to reach us and how complaints are handled, as required by the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 and the Consumer Protection (E-Commerce) Rules, 2020.',
  sections: [
    {
      h: 'Customer support',
      ul: [
        'Patients: in the MyBaari app, go to Profile → Help & support (you will see our replies there).',
        `Hospitals, clinics and labs, and anyone else: ${SUPPORT_CONTACT}.`,
      ],
    },
    {
      h: 'Grievance Officer',
      ul: [
        'Name: Kunal Mittal and Goutam Singla',
        'Email: saralsoftworks@gmail.com',
        'Address: Saral SoftWorks, Delhi, India',
        'We acknowledge every complaint within 24 hours and aim to resolve it within 15 days. Complaints about content that is unlawful or about impersonation are acted on within the timelines the law sets.',
      ],
    },
    {
      h: 'What to include',
      p: ['Your name and registered mobile number, what happened, the booking date and facility (if relevant), any payment ID, and what you would like us to do.'],
    },
    {
      h: 'About us',
      p: ['MyBaari is operated by Saral SoftWorks, Delhi, India. Website: https://www.saralsoftworks.in/mybaari.'],
    },
  ],
}

export const allDocs = [
  companyPrivacy,
  companyTerms,
  mybaariPrivacy,
  mybaariTerms,
  mybaariRefunds,
  mybaariAccountDeletion,
  mybaariMedicalDisclaimer,
  mybaariPartnerTerms,
  mybaariGrievance,
]
