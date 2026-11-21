import type { SkillCategory } from './types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'data-analytics',
    label: 'Data Analysis & Reporting',
    skills: [
      { name: 'SQL', level: 'proficient', projectRefs: ['erpnext-sql-reporting', 'amrut-pms', 'wqmis'] },
      { name: 'Python', level: 'experienced', projectRefs: ['payment-intelligence'] },
      { name: 'Pandas', level: 'experienced' },
      { name: 'NumPy', level: 'experienced' },
      { name: 'Matplotlib', level: 'experienced' },
      { name: 'Seaborn', level: 'experienced' },
      { name: 'KPI & MIS Reporting', level: 'proficient' },
      { name: 'Data Storytelling', level: 'proficient' },
      { name: 'Requirement Gathering', level: 'proficient' },
      { name: 'Jupyter Notebook', level: 'experienced' },
    ],
  },
  {
    id: 'business-intelligence',
    label: 'BI & Visualization',
    skills: [
      { name: 'Power BI', level: 'proficient', projectRefs: ['amrut-pms', 'wqmis', 'payment-intelligence'] },
      { name: 'DAX', level: 'proficient' },
      { name: 'Power Query', level: 'proficient' },
      { name: 'Data Modelling', level: 'proficient' },
      { name: 'Row-Level Security (RLS)', level: 'proficient' },
      { name: 'Power BI Service & Gateway', level: 'proficient' },
      { name: 'Scheduled Refresh', level: 'proficient' },
      { name: 'Tableau', level: 'familiar' },
      { name: 'Advanced Excel', level: 'proficient' },
    ],
  },
  {
    id: 'databases',
    label: 'Programming & Databases',
    skills: [
      { name: 'SQL (SSMS)', level: 'proficient' },
      { name: 'PostgreSQL', level: 'proficient', projectRefs: ['amrut-pms', 'wqmis'] },
      { name: 'MySQL / MariaDB', level: 'proficient', projectRefs: ['erpnext-sql-reporting'] },
      { name: 'SQL Views & Stored Procedures', level: 'proficient' },
      { name: 'CTEs & Window Functions', level: 'proficient' },
      { name: 'Google BigQuery', level: 'familiar' },
    ],
  },
  {
    id: 'power-platform',
    label: 'Power Platform & Automation',
    skills: [
      { name: 'Power Apps', level: 'proficient' },
      { name: 'Power Automate', level: 'proficient' },
      { name: 'Microsoft Dataverse', level: 'proficient' },
      { name: 'Workflow Automation', level: 'proficient' },
    ],
  },
  {
    id: 'erp-data-ops',
    label: 'Data Management & ERP',
    skills: [
      { name: 'ERPNext', level: 'proficient', projectRefs: ['erpnext-sql-reporting', 'erp-portal-integration'] },
      { name: 'WooCommerce', level: 'experienced' },
      { name: 'Data Migration (1M+ Records)', level: 'proficient' },
      { name: 'ETL Pipelines', level: 'experienced' },
      { name: 'Data Cleaning & Validation', level: 'proficient' },
      { name: 'Financial Reconciliation', level: 'proficient' },
      { name: 'Master Data Management', level: 'proficient' },
    ],
  },
  {
    id: 'ai-tools',
    label: 'AI & Developer Tools',
    skills: [
      { name: 'Claude Code', level: 'proficient' },
      { name: 'Claude AI', level: 'proficient' },
      { name: 'ChatGPT', level: 'proficient' },
      { name: 'Antigravity', level: 'proficient' },
      { name: 'AI Data Preparation', level: 'proficient' },
      { name: 'Git & GitHub', level: 'proficient' },
    ],
  },
  {
    id: 'currently-learning',
    label: 'Currently Learning & Upskilling',
    skills: [
      { name: 'Microsoft Fabric', level: 'experienced' },
      { name: 'PySpark (Apache Spark)', level: 'experienced' },
      { name: 'Microsoft Azure', level: 'experienced' },
    ],
  },
];
