import type { Experience } from '../../data/types';
import { MapPin, Calendar } from 'lucide-react';
import { TechTag } from '../ui/TechTag';

interface TimelineProps {
  experiences: Experience[];
}

export function Timeline({ experiences }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-6 top-2 bottom-2 w-px bg-softgrey dark:bg-olive/20" aria-hidden="true" />

      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="relative pl-16 reveal" style={{ transitionDelay: `${index * 100}ms` }}>
            {/* Timeline dot */}
            <div
              className={`absolute left-6 w-3 h-3 rounded-full border-2 transform -translate-x-1.5
                ${index === 0
                  ? 'bg-terracotta border-ivory dark:border-charcoal top-1.5'
                  : 'bg-softgrey dark:bg-olive/40 border-ivory dark:border-charcoal top-1.5'
                }`}
              aria-hidden="true"
            />

            {/* Current indicator */}
            {exp.endDate === 'present' && (
              <div className="absolute left-6 top-1.5 w-3 h-3 rounded-full bg-terracotta/30 animate-ping transform -translate-x-1.5"
                aria-hidden="true" />
            )}

            {/* Content */}
            <div className="border-l border-transparent">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                <div>
                  <h3 className="font-display text-xl font-medium text-charcoal dark:text-ivory">
                    {exp.role}
                  </h3>
                  <p className="font-mono text-sm text-terracotta font-medium">{exp.company}</p>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
                  <span className="flex items-center gap-1.5 font-mono text-xs text-olive">
                    <Calendar size={12} />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-xs text-charcoal/50 dark:text-ivory/40">
                    <MapPin size={12} />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Achievements */}
              <ul className="space-y-2 mb-4">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-charcoal/75 dark:text-ivory/65 leading-relaxed">
                    <span className="mt-2 w-1 h-1 rounded-full bg-terracotta flex-shrink-0" />
                    {achievement}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {exp.tags.map(tag => (
                  <TechTag key={tag} name={tag} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
