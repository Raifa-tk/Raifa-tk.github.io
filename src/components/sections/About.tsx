import { StatCounter } from '../ui/StatCounter';

const STATS = [
  { value: 3, suffix: '+', label: 'Years of Experience', context: 'in Business Intelligence & Analytics' },
  { value: 100, suffix: '+', label: 'SQL Query Reports', context: 'built in ERPNext' },
  { value: 10, suffix: '+', label: 'Power BI Dashboards', context: 'delivered to clients' },
  { value: 8000, suffix: '+', label: 'Products Supported', context: 'across ERPNext & WooCommerce' },
];

export function About() {
  return (
    <section id="about" className="py-24" aria-label="About">
      <div className="section-container">

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left: label + heading */}
          <div className="lg:col-span-4">
            <p className="section-label">About</p>
            <h2 className="section-heading mb-6">
              The Analyst<br/>
              <span className="text-terracotta italic font-normal">Behind the Data</span>
            </h2>
            <div className="divider" />
            <p className="font-mono text-xs text-olive leading-relaxed">
              Data Analyst · BI Developer · ERP Specialist · Mentor
            </p>
          </div>

          {/* Right: bio */}
          <div className="lg:col-span-8 space-y-6">
            <p className="text-lg text-charcoal/80 dark:text-ivory/70 leading-relaxed font-body">
              I'm a Data Analyst &amp; BI Analyst with{' '}
              <span className="text-charcoal dark:text-ivory font-medium">3+ years of experience</span> in
              business intelligence, SQL reporting, dashboard development, data modelling, ETL and data migration.
              Strong in Power BI (DAX, Power Query, Row-Level Security), SQL, Python (Pandas) and Advanced Excel.
            </p>

            <p className="text-base text-charcoal/70 dark:text-ivory/60 leading-relaxed">
              I work with stakeholders to turn business requirements into KPIs and actionable insights.
              Over my career, I&apos;ve delivered 100+ custom SQL reports, 10+ client Power BI dashboards,
              migrations of 1M+ records across ERP systems, and automated reporting workflows that cut manual effort.
              I have also contributed to award-recognised government analytics projects (AMRUT PMS &amp; WQMIS).
            </p>

            <p className="text-base text-charcoal/70 dark:text-ivory/60 leading-relaxed">
              Currently I&apos;m working as a <span className="text-charcoal dark:text-ivory font-medium">Data Analyst at ERP Gulf (Remote)</span>.
              Previously, I served as a Data Consultant at Rows &amp; Columns, an IT Intern at MaverixPro Pvt. Ltd.,
              and as a Data Analytics Mentor at BEAT Centre of Excellence.
            </p>

            <p className="text-base text-charcoal/70 dark:text-ivory/60 leading-relaxed">
              I am currently upskilling in{' '}
              <span className="text-charcoal dark:text-ivory font-medium">Microsoft Fabric, PySpark (Apache Spark) and Azure</span>,
              expanding my capabilities into scalable modern cloud data platforms and big data engineering.
            </p>

            {/* Career highlights */}
            <div className="border-l-2 border-terracotta pl-5 mt-8 space-y-2">
              <p className="font-mono text-xs text-olive uppercase tracking-widest">Currently</p>
              <div className="space-y-1">
                <p className="text-sm text-charcoal dark:text-ivory font-medium">Data Analyst — ERP Gulf (Remote) · May 2025 – Present</p>
              </div>
              <p className="font-mono text-xs text-olive uppercase tracking-widest mt-3">Career History</p>
              <div className="space-y-1">
                <p className="text-sm text-charcoal/80 dark:text-ivory/70">Data Consultant — Rows &amp; Columns · January 2024 – May 2025</p>
                <p className="text-sm text-charcoal/75 dark:text-ivory/65">Data Analytics Mentor — BEAT Centre of Excellence · July 2025 – June 2026</p>
                <p className="text-sm text-charcoal/65 dark:text-ivory/55">IT Intern — MaverixPro Pvt. Ltd. · June 2023 – December 2023</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="mt-20 pt-12 border-t border-softgrey dark:border-olive/20">
          <p className="section-label mb-8">By the Numbers</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map(stat => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                context={stat.context}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
