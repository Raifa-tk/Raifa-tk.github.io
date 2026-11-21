import type { SkillCategory } from './types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'data-analytics',
    label: 'Data Analytics',
    skills: [
      { name: 'SQL', level: 'proficient', projectRefs: ['erpnext-sql-reporting', 'amrut-pms', 'wqmis'] },
      { name: 'Python', level: 'experienced', projectRefs: ['payment-intelligence'] },
      { name: 'Pandas', level: 'experienced' },
      { name: 'NumPy', level: 'experienced' },
      { name: 'Matplotlib', level: 'experienced' },
      { name: 'Seaborn', level: 'experienced' },
      { name: 'Jupyter Notebook', level: 'experienced' },
    ],
  },
  {
    id: 'business-intelligence',
    label: 'Business Intelligence',
    skills: [
      { name: 'Power BI', level: 'proficient', projectRefs: ['amrut-pms', 'wqmis', 'payment-intelligence'] },
      { name: 'DAX', level: 'proficient' },
      { name: 'Power Query', level: 'proficient' },
      { name: 'Power BI Service & Gateway', level: 'proficient' },
      { name: 'Tableau', level: 'familiar' },
      { name: 'Advanced Excel', level: 'proficient' },
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
    id: 'databases',
    label: 'Databases',
    skills: [
      { name: 'PostgreSQL', level: 'proficient', projectRefs: ['amrut-pms', 'wqmis'] },
      { name: 'MySQL / MariaDB', level: 'proficient', projectRefs: ['erpnext-sql-reporting'] },
      { name: 'Google BigQuery', level: 'familiar' },
    ],
  },
  {
    id: 'erp-data-ops',
    label: 'ERP & Data Operations',
    skills: [
      { name: 'ERPNext', level: 'proficient', projectRefs: ['erpnext-sql-reporting', 'erp-portal-integration'] },
      { name: 'WooCommerce', level: 'experienced' },
      { name: 'Data Migration (1M+ Records)', level: 'proficient' },
      { name: 'ETL Pipelines', level: 'experienced' },
      { name: 'Data Cleaning & Validation', level: 'proficient' },
      { name: 'Financial Reconciliation', level: 'proficient' },
    ],
  },
  {
    id: 'ai-tools',
    label: 'AI Tools',
    skills: [
      { name: 'Claude AI', level: 'proficient' },
      { name: 'ChatGPT', level: 'proficient' },
      { name: 'AI Data Preparation', level: 'proficient' },
    ],
  },
];
