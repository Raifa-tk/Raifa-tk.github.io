import { StatCounter } from '../ui/StatCounter';

const STATS = [
  { value: 2, suffix: '+', label: 'Years of Experience', context: 'in Data Analytics & BI' },
  { value: 100, suffix: '+', label: 'SQL Query Reports', context: 'built in ERPNext' },
  { value: 10, suffix: '+', label: 'Power BI Dashboards', context: 'delivered to clients' },
  { value: 5000, suffix: '+', label: 'Products Supported', context: 'automotive spare-parts data' },
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
              I'm a Data Analyst with{' '}
              <span className="text-charcoal dark:text-ivory font-medium">2+ years of experience</span> in
              Business Intelligence, ERP Analytics and Data Consulting. I specialise in developing
              interactive dashboards, custom SQL reports, ERPNext data migration, data transformation
              and bilingual Arabic-English data processing.
            </p>

            <p className="text-base text-charcoal/70 dark:text-ivory/60 leading-relaxed">
              I work at the intersection of raw data and business decisions — taking complex operational
              and financial datasets and transforming them into clear, actionable intelligence.
              I&apos;ve worked across government programme monitoring, automotive ERP systems, financial
              consulting and AI-assisted data preparation.
            </p>

            <p className="text-base text-charcoal/70 dark:text-ivory/60 leading-relaxed">
              Currently I&apos;m a <span className="text-charcoal dark:text-ivory font-medium">Data Analyst at ERP Gulf</span>.
              Previously worked as a Data Analytics Mentor at BEAT Centre of Excellence and as a Data Consultant at Rows &amp; Columns.
            </p>

            <p className="text-base text-charcoal/70 dark:text-ivory/60 leading-relaxed">
              I&apos;m interested in expanding into{' '}
              <span className="text-charcoal dark:text-ivory font-medium">Data Engineering</span>,
              scalable data pipelines and cloud data platforms — building the infrastructure that makes
              analytics possible at scale.
            </p>

            {/* Career highlights */}
            <div className="border-l-2 border-terracotta pl-5 mt-8 space-y-2">
              <p className="font-mono text-xs text-olive uppercase tracking-widest">Currently</p>
              <div className="space-y-1">
                <p className="text-sm text-charcoal dark:text-ivory font-medium">Data Analyst — ERP Gulf</p>
              </div>
              <p className="font-mono text-xs text-olive uppercase tracking-widest mt-3">Previously</p>
              <div className="space-y-1">
                <p className="text-sm text-charcoal/80 dark:text-ivory/70">Data Analytics Mentor — BEAT Centre of Excellence (July 2025 – May 2026)</p>
                <p className="text-sm text-charcoal/70 dark:text-ivory/60">Data Consultant — Rows &amp; Columns (July 2024 – May 2025)</p>
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
