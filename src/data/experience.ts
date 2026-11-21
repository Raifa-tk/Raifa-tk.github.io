import type { Experience } from './types';

export const experiences: Experience[] = [
  {
    id: 'erp-gulf',
    company: 'ERP Gulf (Remote)',
    role: 'Data Analyst',
    period: 'May 2025 – Present',
    startDate: '2025-05-01',
    endDate: 'present',
    location: 'Remote',
    type: 'Full-time',
    summary:
      'Working on ERP analytics, data migration, business intelligence, financial reporting and system integration using ERPNext, Python and SQL.',
    categories: [
      {
        category: 'Data Migration & Python Automation',
        points: [
          'Led 10+ client data migration projects covering 1M+ records across 20+ ERPNext DocTypes, ensuring data accuracy and integrity.',
          'Built Python (Pandas) ETL scripts to clean, standardise and transform Arabic, English and bilingual datasets; automated preparation of 500K+ sales invoice records, replacing days of manual Excel work.',
          'Performed post-migration data validation and financial reconciliation: opening balances, debit-credit consistency, outstanding invoices, payment allocations and General Ledger accuracy.',
        ],
      },
      {
        category: 'SQL Reporting & Data Analytics',
        points: [
          'Developed 100+ custom SQL reports across ERPNext modules using complex joins, aggregations and business logic.',
          'Worked with finance, sales, purchasing, inventory and operational data to support business reporting and decision-making.',
        ],
      },
      {
        category: 'Business Intelligence & Dashboards',
        points: [
          'Built dashboards for ZATCA e-invoicing compliance, invoice status, sales performance, B2B/B2C metrics and VAT reporting.',
        ],
      },
      {
        category: 'Product Data & System Integration',
        points: [
          'Managed 8,000+ automotive product records across ERPNext and WooCommerce (variations, bundles, pricing, vehicle compatibility).',
          'Performed Arabic-English product data synchronisation and reconciliation across platforms.',
        ],
      },
      {
        category: 'AI Data Preparation',
        points: [
          'Created bilingual Arabic-English Q&A datasets covering 500+ DocTypes to train ChangeAI, an AI-powered ERP assistant.',
        ],
      },
      {
        category: 'Business Analysis & Problem-Solving',
        points: [
          'Analysed client requirements and ERP workflows to translate business processes into data migration and reporting solutions.',
          'Investigated data inconsistencies, migration failures and reconciliation issues, identifying root causes and implementing corrective solutions.',
        ],
      },
    ],
    achievements: [
      'Led 10+ client data migration projects covering 1M+ records across 20+ ERPNext DocTypes.',
      'Built Python (Pandas) ETL scripts automating 500K+ invoice preparation.',
      'Developed 100+ custom SQL reports across ERPNext modules.',
      'Built ZATCA e-invoicing compliance dashboards and B2B/B2C metrics.',
      'Managed 8,000+ automotive products across ERPNext and WooCommerce.',
      'Created bilingual Arabic-English Q&A datasets for ChangeAI across 500+ DocTypes.',
    ],
    tags: [
      'Python',
      'Pandas',
      'SQL',
      'Power BI',
      'DAX',
      'Microsoft Excel',
      'ERPNext',
      'WooCommerce',
      'Jupyter Notebook',
      'Claude AI',
    ],
  },
  {
    id: 'rows-columns',
    company: 'Rows & Columns',
    role: 'Data Consultant',
    period: 'January 2024 – May 2025',
    startDate: '2024-01-01',
    endDate: '2025-05-01',
    location: 'Kerala, India',
    type: 'Full-time',
    summary:
      'Delivered Business Intelligence, data analytics, Power BI dashboard development, data modelling and Microsoft Power Platform solutions for clients across finance, procurement, operations and government projects.',
    categories: [
      {
        category: 'Power BI Development & Data Modelling',
        points: [
          'Developed 10+ customised Power BI dashboards for finance, procurement, operations and project management.',
          'Designed data models and relationships; built SQL views, charts, DAX measures and calculated columns.',
          'Automated data cleaning with Power Query, reducing report preparation time by 75% (8 hours to 2 hours).',
          'Published reports on Power BI Service; configured On-premises Data Gateway and scheduled refreshes.',
        ],
      },
      {
        category: 'Government Analytics: AMRUT PMS & WQMIS',
        points: [
          'Contributed to AMRUT Project Monitoring System (PMS) reporting across 1,800+ projects, 93 Urban Local Bodies and a programme value exceeding Rs. 6,000 crore.',
          'Supported WQMIS reporting on 67,000+ water quality samples using SQL views, DAX calculations and Power BI dashboards.',
          'Performed data validation and reconciliation to ensure reporting accuracy.',
        ],
      },
      {
        category: 'Power Platform & Workflow Automation',
        points: [
          'Built Power Apps and Dataverse data-entry apps with Power Automate workflows feeding Power BI, cutting manual processing.',
          'Reduced manual workflow processing time from 5 hours to 1 hour (80% reduction).',
        ],
      },
      {
        category: 'Financial Reporting & P&L Analysis',
        points: [
          'Developed customised Profit and Loss reports for small businesses covering revenue, expenses, gross profit, net profit and financial performance.',
        ],
      },
      {
        category: 'Excel Solutions & Client Consulting',
        points: [
          'Created 15+ customised Excel templates and P&L reports, including data entry forms, contract trackers and operational tools.',
          'Gathered client requirements and translated business processes into customised dashboards and reporting solutions.',
        ],
      },
      {
        category: 'Professional Training',
        points: [
          'Conducted analytics sessions for 50+ learning professionals in SQL, Power BI and Python.',
        ],
      },
    ],
    achievements: [
      'Developed 10+ customised Power BI dashboards across multiple business domains.',
      'Contributed to AMRUT PMS (1,800+ projects, ₹6,000+ Cr) and WQMIS (67,000+ samples).',
      'Built Power Apps and Dataverse data-entry apps with Power Automate workflows.',
      'Reduced report preparation time by 75% with Power Query.',
      'Conducted analytics sessions for 50+ learning professionals.',
    ],
    tags: [
      'SQL',
      'Python',
      'Power BI',
      'DAX',
      'Power Query',
      'Data Modelling',
      'Power Apps',
      'Power Automate',
      'Microsoft Dataverse',
      'Microsoft Excel',
      'ETL',
      'Gateway Refresh',
    ],
  },
  {
    id: 'it-intern',
    company: 'MaverixPro Pvt. Ltd.',
    role: 'IT Intern',
    period: 'June 2023 – December 2023',
    startDate: '2023-06-01',
    endDate: '2023-12-31',
    location: 'Kerala, India',
    type: 'Internship',
    achievements: [
      'Performed data validation and website testing; identified missing, duplicate and inconsistent records.',
      'Analysed business data and created Excel reports to organise findings and support reporting activities.',
      'Documented testing results, identified issues and analysis findings in structured reports.',
    ],
    tags: [
      'Microsoft Excel',
      'Data Analysis',
      'Data Validation',
      'Website Testing',
      'Quality Assurance',
      'Issue Reporting',
    ],
  },
  {
    id: 'beat',
    company: 'BEAT Centre of Excellence',
    role: 'Data Analytics Mentor',
    period: 'July 2025 – June 2026',
    startDate: '2025-07-01',
    endDate: '2026-06-30',
    location: 'Kerala, India',
    type: 'Part-time',
    achievements: [
      'Mentored 60+ learners across 4 batches in Python, SQL and data visualization (Power BI, Excel) through a custom curriculum, hands-on exercises and portfolio projects.',
      'Delivered hands-on instruction focused on analytical problem-solving and business reporting.',
      'Guided students through practical projects and portfolio development, preparing them for industry roles.',
    ],
    tags: ['SQL', 'Python', 'Power BI', 'Excel', 'Mentorship'],
  },
];
