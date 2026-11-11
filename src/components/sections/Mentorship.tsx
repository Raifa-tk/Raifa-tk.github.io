import { BookOpen, BarChart2, Database, FileSpreadsheet, LineChart, ArrowRight } from 'lucide-react';

const TOPICS = [
  { icon: Database, label: 'SQL', description: 'From basic queries to joins, subqueries, window functions and performance optimisation.' },
  { icon: BookOpen, label: 'Python', description: 'Data manipulation with Pandas, visualisation with Matplotlib/Seaborn and analytical workflows.' },
  { icon: BarChart2, label: 'Power BI', description: 'Report design, DAX measures, Power Query and dashboard storytelling.' },
  { icon: FileSpreadsheet, label: 'Excel', description: 'Advanced formulas, pivot tables, data modelling and automated reporting.' },
  { icon: LineChart, label: 'Data Visualisation', description: 'Principles of effective visualisation, chart selection and communicating insights to non-technical audiences.' },
  { icon: BookOpen, label: 'Portfolio Guidance', description: 'Building an analyst portfolio from scratch — project selection, documentation and presentation.' },
];

export function Mentorship() {
  return (
    <section id="mentorship" className="py-24" aria-label="Mentorship">
      <div className="section-container">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <p className="section-label">Mentorship</p>
            <h2 className="section-heading mb-6">
              Helping Analysts<br/>
              <span className="text-terracotta italic font-normal">Grow</span>
            </h2>
            <div className="divider" />
          </div>
          <div className="lg:col-span-7 flex flex-col justify-end">
            <p className="text-base text-charcoal/70 dark:text-ivory/60 leading-relaxed">
              As a Data Analytics Mentor at BEAT Centre of Excellence, I guide aspiring analysts through
              structured technical training in SQL, Python, Excel and Power BI — with a focus on building
              practical skills and portfolio-ready projects.
            </p>
            <p className="text-sm text-charcoal/60 dark:text-ivory/50 leading-relaxed mt-4">
              I teach analytical problem-solving from a practitioner&apos;s perspective — grounded in
              real ERP systems, government data projects and client consulting work.
            </p>
          </div>
        </div>

        {/* Topics grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {TOPICS.map((topic, i) => {
            const Icon = topic.icon;
            return (
              <div
                key={topic.label}
                className="p-6 border border-softgrey dark:border-olive/20 hover:border-terracotta/40 transition-colors reveal"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-terracotta/10 text-terracotta">
                    <Icon size={16} />
                  </div>
                  <h3 className="font-mono text-sm font-medium text-charcoal dark:text-ivory tracking-wide">
                    {topic.label}
                  </h3>
                </div>
                <p className="text-sm text-charcoal/65 dark:text-ivory/55 leading-relaxed">
                  {topic.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="border border-softgrey dark:border-olive/20 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl font-medium text-charcoal dark:text-ivory mb-2">
              Interested in analytics mentorship?
            </h3>
            <p className="text-sm text-charcoal/60 dark:text-ivory/50 max-w-lg">
              Whether you&apos;re starting out in data analytics or looking to level up your SQL, Power BI
              or Python skills, feel free to reach out.{' '}
              <span className="text-olive">No student count or placement guarantees claimed.</span>
            </p>
          </div>
          <a
            href="mailto:raifatpk@gmail.com?subject=Mentorship%20Enquiry"
            className="btn-primary flex-shrink-0"
          >
            Get in Touch <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
