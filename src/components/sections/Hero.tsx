import { Github, Linkedin, Download, ArrowRight, Mail, MapPin } from 'lucide-react';

// Availability: 'open' | 'limited' | 'closed'
// Change this to reflect your current availability for new work
const AVAILABILITY: 'open' | 'limited' | 'closed' = 'limited';

const availabilityConfig = {
  open: { label: 'Open to opportunities', color: 'bg-green-500' },
  limited: { label: 'Selectively open', color: 'bg-amber-400' },
  closed: { label: 'Not available', color: 'bg-red-400' },
};

const SKILLS_MARQUEE = ['Power BI', 'SQL', 'Python', 'ERPNext', 'PostgreSQL', 'DAX', 'Power Query', 'Excel', 'Pandas', 'ETL'];

export function Hero() {
  const avail = availabilityConfig[AVAILABILITY];

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-24 pb-16"
      aria-label="Introduction"
    >
      <div className="section-container">
        {/* Asymmetric editorial grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left column – text content (wider) */}
          <div className="lg:col-span-7 order-2 lg:order-1">

            {/* Availability indicator */}
            <div className="flex items-center gap-2 mb-8">
              <div className="relative flex items-center">
                <div className={`w-2 h-2 rounded-full ${avail.color}`} />
                <div className={`absolute w-2 h-2 rounded-full ${avail.color} animate-ping opacity-60`} />
              </div>
              <span className="font-mono text-xs tracking-widest uppercase text-charcoal/60 dark:text-ivory/50">
                {avail.label}
              </span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-1.5 font-mono text-xs text-olive mb-6">
              <MapPin size={12} />
              Kerala, India
            </div>

            {/* Main heading */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-charcoal dark:text-ivory leading-[1.05] mb-6 text-balance">
              Turning Business
              <span className="block text-terracotta italic">Data</span>
              into Decisions.
            </h1>

            {/* Supporting text */}
            <p className="text-base md:text-lg text-charcoal/70 dark:text-ivory/60 leading-relaxed max-w-xl mb-10 font-body">
              I&apos;m Raifa, a Data Analyst working at the intersection of{' '}
              <span className="text-charcoal dark:text-ivory font-medium">Business Intelligence</span>,{' '}
              <span className="text-charcoal dark:text-ivory font-medium">ERP systems</span> and{' '}
              <span className="text-charcoal dark:text-ivory font-medium">data consulting</span>.
            </p>

            {/* Credential pills */}
            <div className="flex flex-wrap gap-3 mb-10">
              {[
                { label: 'Data Analyst' },
                { label: '2+ Years Experience' },
                { label: 'Power BI · SQL · Python · ERPNext' },
              ].map(item => (
                <span
                  key={item.label}
                  className="inline-flex items-center px-3 py-1 font-mono text-xs border border-softgrey dark:border-olive/30 text-charcoal/70 dark:text-ivory/60"
                >
                  {item.label}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mb-10">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                View My Work <ArrowRight size={16} />
              </button>
              <a href="/assets/resume.pdf" download className="btn-secondary">
                <Download size={16} /> Download Resume
              </a>
              <a href="mailto:raifatpk@gmail.com" className="btn-secondary">
                <Mail size={16} /> Contact Me
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/in/raifa/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-mono text-xs text-charcoal/60 dark:text-ivory/50 hover:text-terracotta dark:hover:text-terracotta transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={15} />
                LinkedIn
              </a>
              <a
                href="https://github.com/Raifa-tk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-mono text-xs text-charcoal/60 dark:text-ivory/50 hover:text-terracotta dark:hover:text-terracotta transition-colors"
                aria-label="GitHub profile"
              >
                <Github size={15} />
                GitHub
              </a>
              <a
                href="https://raifa-tk.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-mono text-xs text-charcoal/60 dark:text-ivory/50 hover:text-terracotta dark:hover:text-terracotta transition-colors"
                aria-label="Portfolio"
              >
                Portfolio
              </a>
            </div>
          </div>

          {/* Right column – photo */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative frame offset */}
              <div className="absolute -top-3 -right-3 w-full h-full border border-terracotta/30" aria-hidden="true" />
              <div className="absolute -bottom-3 -left-3 w-full h-full border border-olive/20" aria-hidden="true" />

              <div className="relative w-72 h-80 md:w-80 md:h-96 overflow-hidden bg-softgrey dark:bg-forest/40">
                <img
                  src="/assets/profile.jpg"
                  alt="Raifa TK — Data Analyst"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent" />
              </div>

              {/* Info card floating */}
              <div className="absolute -bottom-5 -left-5 bg-ivory dark:bg-charcoal border border-softgrey dark:border-olive/30 px-4 py-3 shadow-lg">
                <p className="font-mono text-xs text-olive uppercase tracking-widest">Currently at</p>
                <p className="font-display text-sm font-medium text-charcoal dark:text-ivory">ERP Gulf</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scrolling tech marquee */}
        <div className="mt-20 pt-8 border-t border-softgrey dark:border-olive/20">
          <div className="overflow-hidden">
            <div className="flex gap-8 animate-marquee whitespace-nowrap">
              {[...SKILLS_MARQUEE, ...SKILLS_MARQUEE].map((skill, i) => (
                <span key={i} className="font-mono text-xs tracking-widest uppercase text-charcoal/30 dark:text-ivory/20 flex-shrink-0">
                  {skill}
                  <span className="ml-8 text-terracotta/40">·</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
