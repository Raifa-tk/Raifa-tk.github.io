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
    ],
  },
  {
    id: 'business-intelligence',
    label: 'Business Intelligence',
    skills: [
      { name: 'Power BI', level: 'proficient', projectRefs: ['amrut-pms', 'wqmis', 'payment-intelligence'] },
      { name: 'DAX', level: 'proficient' },
      { name: 'Power Query', level: 'proficient' },
      { name: 'Tableau', level: 'familiar' },
      { name: 'Advanced Excel', level: 'proficient' },
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
      { name: 'Data Migration', level: 'proficient' },
      { name: 'ETL', level: 'experienced' },
      { name: 'Data Cleaning', level: 'proficient' },
      { name: 'Data Validation', level: 'proficient' },
    ],
  },
  {
    id: 'ai-tools',
    label: 'AI Tools',
    skills: [
      { name: 'ChatGPT', level: 'proficient' },
      { name: 'Claude AI', level: 'proficient' },
    ],
  },
];
