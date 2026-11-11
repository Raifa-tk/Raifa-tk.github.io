import { certifications } from '../../data/certifications';
import { GraduationCap, Award, FileText, Briefcase, ExternalLink } from 'lucide-react';

const typeConfig = {
  education: { icon: GraduationCap, label: 'Education', color: 'text-forest dark:text-olive' },
  certification: { icon: Award, label: 'Certification', color: 'text-terracotta' },
  publication: { icon: FileText, label: 'Publication', color: 'text-olive' },
  simulation: { icon: Briefcase, label: 'Job Simulation', color: 'text-charcoal/60 dark:text-ivory/50' },
};

export function Certifications() {
  return (
    <section id="certifications" className="py-24" aria-label="Certifications and Education">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left */}
          <div className="lg:col-span-4">
            <p className="section-label">Credentials</p>
            <h2 className="section-heading mb-6">
              Education<br/>
              <span className="text-terracotta italic font-normal">&amp; Certifications</span>
            </h2>
            <div className="divider" />
          </div>

          {/* Right: list */}
          <div className="lg:col-span-8">
            <div className="space-y-4">
              {certifications.map((cert, i) => {
                const config = typeConfig[cert.type];
                const Icon = config.icon;
                return (
                  <div
                    key={i}
                    className="flex gap-5 p-5 border border-softgrey dark:border-olive/20 hover:border-terracotta/40 transition-colors reveal"
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <div className={`mt-1 flex-shrink-0 ${config.color}`}>
                      <Icon size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-body text-sm font-medium text-charcoal dark:text-ivory leading-snug">
                          {cert.title}
                        </h3>
                        <span className="font-mono text-xs text-olive flex-shrink-0">{cert.year}</span>
                      </div>
                      <p className="font-mono text-xs text-charcoal/50 dark:text-ivory/40 mt-1">
                        {cert.issuer}
                      </p>
                      <div className="flex items-center gap-4 mt-2">
                        <span className={`font-mono text-xs ${config.color}`}>{config.label}</span>
                        {cert.url && (
                          <a
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 font-mono text-xs text-charcoal/40 dark:text-ivory/30 hover:text-terracotta transition-colors"
                          >
                            <ExternalLink size={11} />
                            View
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
