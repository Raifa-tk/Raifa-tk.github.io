import type { Experience } from './types';

export const experiences: Experience[] = [
  {
    id: 'erp-gulf',
    company: 'ERP Gulf',
    role: 'Data Analyst',
    period: 'May 2025 – Present',
    startDate: '2025-05-01',
    endDate: 'present',
    location: 'Remote / Gulf Region',
    type: 'Full-time',
    summary:
      'Working on ERP analytics, data migration, business intelligence, financial reporting and system integration using ERPNext, Python and SQL.',
    categories: [
      {
        category: 'Data Migration & Python Automation',
        points: [
          'Executed 10+ client data migration projects involving 1M+ records across 20+ ERPNext DocTypes.',
          'Developed client-specific Python scripts using Pandas for data cleaning, standardisation, transformation and source-to-target mapping of Arabic, English and bilingual datasets.',
          'Automated the preparation of 500K+ historical sales invoice records, reducing manual Excel processing.',
          'Performed post-migration validation and financial reconciliation, covering opening balances, debit-credit consistency, outstanding invoices, payment allocations and General Ledger accuracy.',
        ],
      },
      {
        category: 'SQL Reporting & Data Analytics',
        points: [
          'Developed 100+ custom SQL Query Reports across ERPNext modules using complex joins, aggregations and business logic.',
          'Worked with finance, sales, purchasing, inventory and operational data to support business reporting and decision-making.',
        ],
      },
      {
        category: 'Business Intelligence & Dashboards',
        points: [
          'Developed ERPNext dashboards for ZATCA e-invoicing compliance, invoice statuses, reporting exceptions, sales performance, B2B/B2C metrics and VAT trends.',
        ],
      },
      {
        category: 'Product Data & System Integration',
        points: [
          'Managed 8,000+ automotive product records across ERPNext and WooCommerce, including product variations, bundles, pricing and vehicle compatibility.',
          'Performed Arabic-English product data synchronisation and reconciliation across platforms.',
        ],
      },
      {
        category: 'AI Data Preparation',
        points: [
          'Prepared structured Arabic-English question-and-answer datasets covering 500+ ERPNext DocTypes for ChangeAI, an AI-powered ERP assistant.',
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
      'Executed 10+ client data migration projects involving 1M+ records across 20+ ERPNext DocTypes.',
      'Developed client-specific Python scripts using Pandas for data cleaning, transformation and mapping.',
      'Developed 100+ custom SQL Query Reports across ERPNext modules.',
      'Developed ERPNext dashboards for ZATCA e-invoicing compliance and sales performance.',
      'Managed 8,000+ automotive product records across ERPNext and WooCommerce.',
      'Prepared structured bilingual QA datasets for ChangeAI across 500+ DocTypes.',
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
    period: 'July 2024 – May 2025',
    startDate: '2024-07-01',
    endDate: '2025-05-01',
    location: 'Kerala, India',
    type: 'Full-time',
    summary:
      'Delivered Business Intelligence, data analytics, Power BI dashboard development, data modelling and Microsoft Power Platform solutions for clients across finance, procurement, operations and government projects.',
    categories: [
      {
        category: 'Power BI Development & Data Modelling',
        points: [
          'Developed 10+ customised Power BI dashboards based on client requirements across multiple business domains.',
          'Designed data models, established table relationships and developed SQL views, DAX measures, calculated columns and KPIs.',
          'Used Power Query for data cleaning and transformation, reducing report preparation time from 8 hours to 2 hours (75% reduction).',
          'Published reports through Power BI Service, configured On-premises Data Gateway and validated data connectivity, scheduled refreshes and report accuracy.',
        ],
      },
      {
        category: 'Government Analytics: AMRUT PMS & WQMIS',
        points: [
          'Contributed to AMRUT Project Monitoring System (PMS) reporting across 1,800+ projects, 93 Urban Local Bodies and a programme value exceeding Rs. 6,000 crore.',
          'Supported WQMIS reporting involving 67,000+ water quality samples using SQL views, DAX calculations and Power BI dashboards.',
          'Performed data validation and reconciliation to ensure reporting accuracy.',
        ],
      },
      {
        category: 'Power Platform & Workflow Automation',
        points: [
          'Independently developed Power Apps data entry applications integrated with Microsoft Dataverse.',
          'Built Power Automate workflows and integrated application data with Power BI for automated data capture and reporting.',
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
          'Created 15+ customised Excel templates, including data entry forms, contract trackers and operational reporting tools.',
          'Gathered client requirements and translated business processes into customised dashboards and reporting solutions.',
        ],
      },
      {
        category: 'Professional Training',
        points: [
          'Trained 50+ professionals in SQL, Power BI and Python through practical, project-oriented sessions.',
        ],
      },
    ],
    achievements: [
      'Developed 10+ customised Power BI dashboards across multiple business domains.',
      'Contributed to AMRUT PMS (1,800+ projects, ₹6,000+ Cr) and WQMIS (67,000+ samples) dashboards.',
      'Developed Power Apps data entry solutions and Power Automate workflows, cutting manual time by 80%.',
      'Built financial P&L reporting solutions and automated Excel templates.',
      'Trained 50+ professionals in SQL, Power BI and Python.',
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
    id: 'beat',
    company: 'BEAT Centre of Excellence',
    role: 'Data Analytics Mentor',
    period: 'July 2025 – May 2026',
    startDate: '2025-07-01',
    endDate: '2026-05-01',
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
