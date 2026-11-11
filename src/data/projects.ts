import type { Project } from './types';

export const projects: Project[] = [
  {
    id: 'amrut-pms',
    title: 'AMRUT Kerala PMS Dashboard',
    subtitle: 'Government Project Monitoring System — Power BI',
    category: ['Power BI', 'Data Analytics'],
    status: 'professional',
    businessProblem:
      'The AMRUT Kerala programme needed a centralised, real-time monitoring system to track progress across 1,800+ urban infrastructure projects spanning 93 urban local bodies and ₹6,000+ Crore in project value. Manual reporting could not provide the drill-through visibility required by programme managers.',
    objective:
      'Build a comprehensive 7-page Power BI report to monitor project progress, budget utilisation, bill clearance status, delay risks and gateway milestones — enabling data-driven programme management.',
    dataset:
      'Government programme data covering 1,800+ projects across 93 urban local bodies, sourced from PostgreSQL views. Data includes project timelines, budget allocations, bill submissions and clearance records.',
    technologies: ['Power BI', 'PostgreSQL', 'DAX', 'Power Query', 'SQL Views', 'Gateway Refresh'],
    myContribution: [
      'Designed and built a 7-page Power BI report covering project progress, budget utilisation, bill clearance, delay monitoring and risk flagging.',
      'Created PostgreSQL views to structure raw programme data into report-ready datasets.',
      'Authored DAX measures for progress tracking, budget utilisation ratios and delay risk calculations.',
      'Implemented drill-through reporting enabling navigation from summary to individual project level.',
      'Configured Gateway and scheduled data refresh for live programme monitoring.',
    ],
    analyticalApproach: [
      'Modelled programme data into a star schema within Power BI for optimal query performance.',
      'Used DAX time intelligence to calculate project duration, delay days and milestone status.',
      'Applied conditional formatting to surface at-risk projects through visual heat indicators.',
      'Built hierarchical filters enabling analysis at programme, district, urban body and project level.',
    ],
    keyFindings: [
      'Dashboard covers 1,800+ projects with ₹6,000+ Cr total project value across 93 urban local bodies.',
      'Drill-through functionality allows programme managers to navigate from district-level summaries to individual project details.',
      'Bill clearance tracking enables finance teams to monitor outstanding payments and expedite approvals.',
      'Delay risk monitoring highlights projects at risk of timeline breach, supporting proactive intervention.',
    ],
    demoUrl: 'https://youtu.be/C_s7VR_CgOw',
    imageUrl: '/assets/projects/amrut-pms-placeholder.svg',
  },
  {
    id: 'wqmis',
    title: 'WQMIS Water Quality Dashboard',
    subtitle: 'AMRUT Kerala Water Quality Monitoring — Power BI',
    category: ['Power BI', 'Data Analytics'],
    status: 'professional',
    businessProblem:
      'The AMRUT Kerala Water Quality Monitoring Information System needed a scalable reporting solution to classify and monitor 67,000+ water samples across districts — distinguishing safe, moderate and unsafe quality levels for public health decision-making.',
    objective:
      'Develop a 6-page Power BI report enabling district-level water quality analysis, geographic visualisation and trend monitoring across a large government dataset.',
    dataset:
      '67,000+ water quality samples sourced from government monitoring infrastructure. Data includes sample dates, test parameters, geographic location (district, source) and quality classification results.',
    technologies: ['Power BI', 'SQL Views', 'DAX', 'Power Query', 'Maps Visual', 'Gateway Refresh'],
    myContribution: [
      'Built a 6-page Power BI report covering district-level water quality, classification summaries and trend analysis.',
      'Created SQL views to aggregate and structure raw sample data for report consumption.',
      'Authored DAX measures for safe/moderate/unsafe classification ratios and district comparisons.',
      'Implemented geographic visualisation to show water quality distribution across Kerala districts.',
      'Configured Gateway and scheduled refresh for up-to-date monitoring.',
    ],
    analyticalApproach: [
      'Classified 67,000+ samples into safe, moderate and unsafe categories using defined quality thresholds.',
      'Aggregated data at district, source and time-period levels for multi-dimensional analysis.',
      'Used map visuals to highlight geographic quality distribution and identify at-risk areas.',
      'Trend analysis pages show quality improvement or degradation over time for each district.',
    ],
    keyFindings: [
      'Report covers 67,000+ water samples across Kerala districts, enabling programme-wide quality monitoring.',
      'Geographic visualisation reveals district-level variation in water quality outcomes.',
      'Classification breakdown enables health authorities to prioritise remediation in unsafe-classified areas.',
    ],
    demoUrl: 'https://youtu.be/zRM1D0hRhKc',
    imageUrl: '/assets/projects/wqmis-placeholder.svg',
  },
  {
    id: 'erpnext-sql-reporting',
    title: 'ERPNext Custom SQL Reporting',
    subtitle: 'Operational Reporting via SQL Query Reports — ERP Analytics',
    category: ['SQL', 'ERP Analytics'],
    status: 'professional',
    businessProblem:
      'Standard ERPNext reports lacked the specificity required for operational decision-making. Business teams needed granular, cross-DocType reports covering material requests, stock movements, conversion factor mismatches and data validation — not available through built-in ERPNext report types.',
    objective:
      'Develop custom SQL Query Reports within ERPNext to surface operational insights across inventory, procurement and stock workflows, enabling faster business decisions and data quality improvements.',
    dataset:
      'ERPNext transactional data across DocTypes including Material Request, Stock Entry, Item, Warehouse and UOM Conversion Factor tables. Data covers inventory and procurement operations for a multi-location business.',
    technologies: ['ERPNext', 'SQL', 'MariaDB', 'Frappe Framework', 'Python'],
    myContribution: [
      'Developed 100+ custom SQL Query Reports within ERPNext covering procurement, stock, inventory and operational reporting.',
      'Wrote complex multi-table SQL queries joining across ERPNext DocTypes (Material Request, Stock Entry, Item, Warehouse, etc.).',
      'Built data validation reports to detect conversion factor mismatches between UOM records and actual stock movements.',
      'Created Material Request to Stock Entry reconciliation reports to track fulfilment status.',
      'Supported operational teams with ad-hoc SQL queries for data investigation and decision support.',
    ],
    analyticalApproach: [
      'Mapped ERPNext DocType relationships to understand table joins and data linkages.',
      'Wrote parameterised SQL queries enabling date-range, warehouse and item category filtering within ERPNext.',
      'Implemented conversion factor validation logic in SQL to surface discrepancies before they impact stock valuations.',
      'Used ERPNext\'s built-in script report framework to present results in formatted, exportable report views.',
    ],
    keyFindings: [
      '100+ SQL Query Reports developed across ERPNext business modules.',
      'Conversion factor mismatch detection prevented downstream stock valuation errors.',
      'Material Request tracking improved procurement visibility for operations teams.',
      'Custom reports reduced dependency on manual data extraction from ERP.',
    ],
    hasIllustrativeContent: true,
    imageUrl: '/assets/projects/erpnext-placeholder.svg',
  },
  {
    id: 'erp-portal-integration',
    title: 'ERP-to-Portal Data Integration',
    subtitle: 'Automotive Spare-Parts Bilingual Data Migration — ERP Analytics',
    category: ['ERP Analytics', 'Data Analytics'],
    status: 'professional',
    businessProblem:
      'An automotive spare-parts business needed to synchronise approximately 5,000 product records from ERPNext into a customer-facing web portal. The data included bilingual Arabic-English product names and descriptions, requiring consistent formatting, encoding and validation before portal display.',
    objective:
      'Support the structured extraction, transformation and validation of ~5,000 automotive spare-parts records from ERPNext, ensuring clean, consistent bilingual data ready for portal synchronisation.',
    dataset:
      'Approximately 5,000 automotive spare-parts records from ERPNext, including Item codes, Arabic and English names/descriptions, pricing, categories, images and stock availability fields. Data contained mixed encoding, inconsistent transliteration and formatting gaps.',
    technologies: ['ERPNext', 'SQL', 'Python', 'Data Validation', 'ETL', 'Bilingual Data Processing'],
    myContribution: [
      'Extracted and structured ~5,000 spare-parts records from ERPNext across relevant Item DocType fields.',
      'Performed bilingual Arabic-English data cleaning — standardising naming conventions, fixing encoding issues and ensuring consistency across both language versions.',
      'Validated data completeness: checking for missing descriptions, mismatched codes and image availability.',
      'Structured product records into the data format required by the portal integration workflow.',
      'Supported data handoff and verification to confirm portal-side display accuracy.',
    ],
    analyticalApproach: [
      'Audited all ~5,000 product records for completeness, flagging missing or inconsistent bilingual fields.',
      'Applied data standardisation rules for Arabic text encoding and English transliteration consistency.',
      'Created validation checklists ensuring each record met portal ingestion requirements before migration.',
      'Performed iterative data cleaning in cycles — extract, validate, correct, re-validate.',
    ],
    keyFindings: [
      '~5,000 automotive spare-parts records prepared and structured for portal synchronisation.',
      'Bilingual data consistency achieved across Arabic and English product fields.',
      'Data validation process identified and resolved encoding and formatting gaps before portal ingestion.',
    ],
    hasIllustrativeContent: false,
    imageUrl: '/assets/projects/portal-placeholder.svg',
  },
  {
    id: 'payment-intelligence',
    title: 'Payment Intelligence & Cash Flow Forecasting',
    subtitle: 'Accounts Receivable Analytics — Portfolio Prototype',
    category: ['Data Analytics', 'Data Engineering', 'Power BI', 'SQL'],
    status: 'portfolio',
    businessProblem:
      'The finance team at Gulf Auto Parts Trading (fictional company) lacks visibility into outstanding receivables, delayed payments and expected cash inflows — making it difficult to prioritise collections, manage working capital and forecast short-term liquidity.',
    objective:
      'Design a Payment Intelligence solution that consolidates accounts receivable data, analyses invoice aging, ranks customer payment behaviour and forecasts expected cash inflows — enabling proactive collection management.',
    dataset:
      'Fictional dataset for Gulf Auto Parts Trading, designed to represent realistic automotive spare-parts trading accounts receivable data: customer invoices, payment history, credit terms, aging buckets and transaction dates.',
    technologies: ['SQL', 'PostgreSQL', 'Python', 'Pandas', 'Power BI', 'DAX', 'ETL'],
    myContribution: [
      'Defined the analytical framework for accounts receivable intelligence including aging analysis, payment behaviour scoring and cash inflow forecasting.',
      'Designed the data model covering invoice, customer, payment and aging dimension tables.',
      'Specified the ETL pipeline structure for ingesting and transforming transaction data.',
      'Planned Power BI report layout covering AR dashboard, aging report, customer risk ranking and forecast view.',
    ],
    analyticalApproach: [
      'Invoice aging analysis segmented by 0–30, 31–60, 61–90 and 90+ day buckets.',
      'Customer payment behaviour scoring based on average days-to-pay and historical patterns.',
      'Cash inflow forecasting using expected payment probability by aging bucket and customer segment.',
      'Collection prioritisation ranking customers by outstanding balance weighted by risk score.',
    ],
    keyFindings: [
      '⚠️ This is a portfolio prototype built on fictional data. No real business outcomes are represented.',
      'The analytical framework demonstrates end-to-end BI thinking from data modelling to forecasting.',
      'Planned deliverable: working Power BI report with SQL backend and Python-based forecasting layer.',
    ],
    imageUrl: '/assets/projects/payment-placeholder.svg',
  },
];
