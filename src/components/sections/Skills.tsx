import { useState } from 'react';
import { skillCategories } from '../../data/skills';
import { TechTag } from '../ui/TechTag';
import { projects } from '../../data/projects';

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const displayCategories = activeCategory
    ? skillCategories.filter(c => c.id === activeCategory)
    : skillCategories;

  return (
    <section id="skills" className="py-24 bg-softgrey/30 dark:bg-forest/10" aria-label="Skills and Technologies">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left */}
          <div className="lg:col-span-4">
            <p className="section-label">Skills</p>
            <h2 className="section-heading mb-6">
              Technologies<br/>
              <span className="text-terracotta italic font-normal">&amp; Tools</span>
            </h2>
            <div className="divider" />
            <p className="text-sm text-charcoal/60 dark:text-ivory/50 leading-relaxed mt-4 mb-8">
              Organised by practice area. Each skill is linked to real project evidence — no fabricated
              proficiency scores.
            </p>

            {/* Category filter */}
            <div className="space-y-1" role="group" aria-label="Filter skills by category">
              <button
                onClick={() => setActiveCategory(null)}
                className={`w-full text-left px-4 py-2.5 font-mono text-xs tracking-widest uppercase border-l-2 transition-all duration-200
                  ${activeCategory === null
                    ? 'border-terracotta text-charcoal dark:text-ivory bg-terracotta/5'
                    : 'border-transparent text-charcoal/50 dark:text-ivory/40 hover:text-charcoal dark:hover:text-ivory hover:border-softgrey'
                  }`}
                aria-pressed={activeCategory === null}
              >
                All Categories
              </button>
              {skillCategories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id === activeCategory ? null : cat.id)}
                  className={`w-full text-left px-4 py-2.5 font-mono text-xs tracking-widest uppercase border-l-2 transition-all duration-200
                    ${activeCategory === cat.id
                      ? 'border-terracotta text-charcoal dark:text-ivory bg-terracotta/5'
                      : 'border-transparent text-charcoal/50 dark:text-ivory/40 hover:text-charcoal dark:hover:text-ivory hover:border-softgrey'
                    }`}
                  aria-pressed={activeCategory === cat.id}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right: skill groups */}
          <div className="lg:col-span-8 space-y-10">
            {displayCategories.map(category => (
              <div key={category.id} className="reveal">
                <h3 className="font-mono text-xs tracking-widest uppercase text-olive mb-4">
                  {category.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => {
                    // Find related projects
                    const relatedProjects = skill.projectRefs
                      ? projects.filter(p => skill.projectRefs!.includes(p.id))
                      : [];

                    return (
                      <div key={skill.name} className="group relative">
                        <TechTag name={skill.name} size="md" />
                        {/* Tooltip on hover showing related projects */}
                        {relatedProjects.length > 0 && (
                          <div className="absolute bottom-full left-0 mb-2 w-48 bg-charcoal dark:bg-ivory text-ivory dark:text-charcoal 
                                          text-xs p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                                          transition-all duration-200 z-10 pointer-events-none shadow-lg">
                            <p className="font-mono uppercase tracking-widest text-xs opacity-60 mb-1">Used in:</p>
                            {relatedProjects.map(p => (
                              <p key={p.id} className="text-xs leading-relaxed opacity-90">· {p.title}</p>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
