// Single source of truth for real Azaan Services company details.
// Sourced from the company's own printed marketing material, confirmed by the client.
// Do not add statistics, client logos, or testimonials here unless the client has
// explicitly supplied and authorized them for publication.

// Companies Azaan Services has named as clients on its own official channels
// (printed marketing material + the official "Azaan Services | Delhi"
// Facebook page). Confirmed by the client as accurate. Shown as text only —
// swap in real logo image URLs later once each company has given permission
// for their logo specifically to be used.

export const clients = [
  "HCL",
  "MakeMyTrip",
  "Aon Hewitt",
  "Yatra.com",
  "Snapdeal",
  "Paytm",
  "NIIT",
  "InterGlobe Technologies",
  "HDFC Bank",
  "American Express",
  "Goibibo",
  "Carlson Wagonlit Travel",
  "Egencia",
  "Expedia",
  "Fareportal",
  "dnata Travel",
];

export const company = {
  legalName: "Azaan Services",
  tagline: "Complete Job Solution",
  type: "Recruitment & Placement Consultancy",

  address: {
    line1: "198/22, Opposite Sapna Cinema",
    line2: "East of Kailash",
    city: "New Delhi",
    pincode: "110065",
    country: "India",
    full: "198/22, Opposite Sapna Cinema, East of Kailash, New Delhi – 110065",
  },

  contact: {
    email: "hr@azaanservices.com",
    phones: [
      { label: "Arhaan", number: "+91-9911912462", whatsapp: true },
      { label: "General enquiries", number: "+91-9871022302", whatsapp: true },
    ],
    // Primary number used for click-to-call / WhatsApp CTAs across the site
    primaryPhone: "+91-9911912462",
    primaryWhatsapp: "919911912462", // WhatsApp deep-link format, no + or spaces
  },

  serviceCategories: [
    {
      slug: "corporate-recruitment",
      name: "Corporate Recruitment",
      shortDescription:
        "End-to-end hiring support for corporate roles, from sourcing to shortlisting.",
    },
    {
      slug: "travel-aviation-recruitment",
      name: "Travel & Aviation Recruitment",
      shortDescription:
        "Specialist placement for travel, tourism, and aviation industry roles.",
    },
    {
      slug: "it-non-it-recruitment",
      name: "IT & Non-IT Recruitment",
      shortDescription:
        "Technical and non-technical staffing across a wide range of functions.",
    },
    {
      slug: "e-commerce-recruitment",
      name: "E-Commerce Recruitment",
      shortDescription:
        "Hiring support tailored to the pace and scale of e-commerce businesses.",
    },
    {
      slug: "banking-financial-recruitment",
      name: "Banking & Financial Recruitment",
      shortDescription:
        "Placement services for banking, financial services, and related roles.",
    },
    {
      slug: "ites-bpo-recruitment",
      name: "ITES / BPO Recruitment",
      shortDescription:
        "Volume and specialist hiring for ITES and BPO operations.",
    },
  ],
};

export default company;
