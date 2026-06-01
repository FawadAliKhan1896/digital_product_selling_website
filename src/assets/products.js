export const productsData = [
  {
    id: 'edusphere-pro',
    title: 'EduSphere Pro',
    description: 'Advanced cloud-based school management platform with real-time student analytics and parent portals.',
    longDescription: 'EduSphere Pro is an all-in-one cloud platform engineered for modern educational institutions. It streamlines administrative workflows, simplifies grading, automates attendance, and offers real-time analytics dashboards. Built with security and scalability at its core, it bridges the gap between parents, educators, and school administrators.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800',
    rating: 4.9,
    price: 99,
    category: 'Education SaaS',
    tech: ['LMS', 'Analytics', 'React', 'Node.js'],
    features: [
      'Interactive Learning Management System (LMS)',
      'Automated grading sheets & digital report cards',
      'Real-time student attendance & safety alerts',
      'Secure parents messaging portal & mobile app integration',
      'Fee management & digital payment processing'
    ],
    benefits: [
      'Reduce administrative paperwork by up to 50%',
      'Boost parent-teacher collaboration by 65%',
      'Simplify curriculum management and teacher scheduling'
    ],
    specs: {
      'Deployment': 'Cloud SaaS (AWS Hosted)',
      'Security': 'FERPA & GDPR Compliant',
      'API Access': 'Full REST API available',
      'Support': '24/7 Priority Email & Chat Support'
    }
  },
  {
    id: 'estateflow-cloud',
    title: 'EstateFlow Cloud',
    description: 'Enterprise real estate management system with virtual tour integration and automated lead tracking.',
    longDescription: 'EstateFlow Cloud redefines real estate operations by combining powerful customer relationship management (CRM) with property mapping and digital media hubs. Real estate agencies can manage listings, generate 3D virtual tours directly from mobile devices, and track leads automatically from popular listing sites.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800',
    rating: 4.8,
    price: 149,
    category: 'Real Estate SaaS',
    tech: ['CRM', '3D Tours', 'GraphQL', 'Vite'],
    features: [
      'Immersive 3D virtual tour upload and hosting',
      'Automated lead routing and smart follow-up campaigns',
      'Digital contract generation with e-signature support',
      'Interactive property mapping and geographic search',
      'Brokerage performance analytics and commission tracking'
    ],
    benefits: [
      'Increase listing conversion rate by 35%',
      'Reduce average property days-on-market by 20%',
      'Automate 80% of routine client communications'
    ],
    specs: {
      'Deployment': 'Multicloud SaaS (Vercel & GCP)',
      'Security': 'SOC 2 Type II Certified',
      'API Access': 'GraphQL API with Webhooks',
      'Support': 'Dedicated Account Manager'
    }
  },
  {
    id: 'autodrive-erp',
    title: 'AutoDrive ERP',
    description: 'Scalable cloud ERP for automotive businesses, featuring inventory sync and automated billing.',
    longDescription: 'AutoDrive ERP is a robust enterprise resource planning solution tailored specifically for car dealerships, parts suppliers, and auto workshops. It unites inventory procurement, service scheduling, point of sale (POS) operations, and detailed financial reports into a single, cohesive dashboard.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800',
    rating: 4.7,
    price: 129,
    category: 'Automotive SaaS',
    tech: ['ERP', 'POS', 'Python', 'Tailwind'],
    features: [
      'Real-time automotive parts inventory management',
      'Smart service bay scheduling & technician assignment',
      'VIN decoding and vehicle history integration',
      'Omnichannel POS with automated billing and invoicing',
      'Vendor management and supply chain forecasting'
    ],
    benefits: [
      'Prevent stockouts on high-demand parts',
      'Improve mechanic bay utilization by 25%',
      'Generate instant tax audits and profit margin reviews'
    ],
    specs: {
      'Deployment': 'Hybrid Cloud SaaS',
      'Security': 'PCI-DSS Compliant Payment Gateway',
      'API Access': 'V2 REST API',
      'Support': 'Phone, Email, and SLA Guarantees'
    }
  },
  {
    id: 'healthsync-web',
    title: 'HealthSync Web',
    description: 'Secure, HIPAA-compliant telemedicine platform with encrypted video calls and patient history.',
    longDescription: 'HealthSync Web is a state-of-the-art telehealth system built to HIPAA and GDPR standards. Healthcare providers can conduct secure HD video consultations, schedule appointments, access medical histories, and process insurance claims instantly and securely.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800',
    rating: 4.9,
    price: 199,
    category: 'Healthcare SaaS',
    tech: ['Telehealth', 'Security', 'WebRTC', 'React'],
    features: [
      'End-to-end encrypted peer-to-peer video consultations',
      'Dynamic Electronic Health Records (EHR) integration',
      'Secure patient e-prescriptions and medication alerts',
      'Online appointment booking and SMS reminders',
      'Integrated medical billing and insurance validation'
    ],
    benefits: [
      'Provide remote care to clients globally',
      'Reduce patient no-shows by over 45%',
      'Eliminate manual data entry errors between systems'
    ],
    specs: {
      'Deployment': 'Dedicated HIPAA Cloud (AWS)',
      'Security': 'HIPAA & HITECH Compliant, AES-256',
      'API Access': 'FHIR Compliant API',
      'Support': '24/7/365 Emergency Phone Support'
    }
  },
  {
    id: 'fintrack-enterprise',
    title: 'FinTrack Enterprise',
    description: 'Comprehensive financial accounting software for global enterprises with multi-tax support.',
    longDescription: 'FinTrack Enterprise provides institutional-grade accounting, tax compliance, and treasury services. Designed for companies operating across multiple borders, it supports multi-currency ledgering, automatic local tax calculations, and real-time expense reconciliation.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800',
    rating: 4.8,
    price: 159,
    category: 'Finance SaaS',
    tech: ['Accounting', 'Audit', 'Go', 'Next.js'],
    features: [
      'Multi-currency general ledger with automatic exchange rates',
      'Real-time employee expense reporting and receipt OCR',
      'Automated local, state, and international tax calculations',
      'Bank reconciliation with major global institutions',
      'Custom financial reporting dashboards and PDF exports'
    ],
    benefits: [
      'Close monthly books 3x faster than traditional systems',
      'Ensure 100% compliance with international tax regulations',
      'Gain complete visibility over corporate capital workflows'
    ],
    specs: {
      'Deployment': 'Private Cloud or SaaS',
      'Security': 'Bank-grade security with MFA & SSO',
      'API Access': 'OAuth2 Secured Enterprise API',
      'Support': 'Dedicated Financial Systems Specialist'
    }
  },
  {
    id: 'shopstream-pos',
    title: 'ShopStream POS',
    description: 'Cloud-based Point of Sale system with multi-outlet support and real-time inventory tracking.',
    longDescription: 'ShopStream POS empowers retail businesses to sell anywhere—in-store, online, or pop-ups. It connects physical point-of-sale hardware with cloud inventory systems, keeping stock counts accurate down to the second across multiple store locations.',
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=800',
    rating: 4.6,
    price: 89,
    category: 'Retail SaaS',
    tech: ['Inventory', 'POS', 'Svelte', 'FastAPI'],
    features: [
      'Lightning-fast checkout interface compatible with tablets',
      'Multi-outlet inventory management and auto-replenishment',
      'Customer loyalty programs and purchase history analytics',
      'Offline mode—continue selling even when internet goes down',
      'Hardware integration (receipt printers, scanners, drawers)'
    ],
    benefits: [
      'Synchronize retail store with e-commerce store instantly',
      'Speed up checkouts by 30% during busy seasons',
      'Understand best-selling items and optimize store layout'
    ],
    specs: {
      'Deployment': 'Cloud SaaS with offline client capability',
      'Security': 'End-to-end encrypted card readers',
      'API Access': 'Developer POS APIs',
      'Support': '24/7 Live Chat & Live Setup Assistance'
    }
  }
];
