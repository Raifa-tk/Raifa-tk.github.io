import { useState, useMemo, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { projects } from '../../data/projects';
import { ProjectCard } from '../ui/ProjectCard';
import type { ProjectCategory } from '../../data/types';

const ALL_CATEGORIES: ProjectCategory[] = ['Power BI', 'SQL', 'ERP Analytics', 'Data Analytics', 'Data Engineering'];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const sectionRef = useRef<HTMLElement>(null);

  // Apply reveal to cards when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const cards = sectionRef.current?.querySelectorAll('.reveal');
    cards?.forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, [activeFilter, searchQuery]);

  const filtered = useMemo(() => {
    return projects.filter(p => {
      const matchesFilter = activeFilter === 'All' || p.category.includes(activeFilter);
      const q = searchQuery.toLowerCase();
      const matchesSearch = !q || [
        p.title, p.subtitle, p.businessProblem, ...p.technologies, ...p.category
      ].some(s => s.toLowerCase().includes(q));
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <section id="projects" className="py-24" ref={sectionRef} aria-label="Projects">
      <div className="section-container">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-5">
            <p className="section-label">Projects</p>
            <h2 className="section-heading mb-4">
              Case Study<br/>
              <span className="text-terracotta italic font-normal">Library</span>
            </h2>
            <div className="divider" />
          </div>
          <div className="lg:col-span-7 flex flex-col justify-end gap-4">
            <p className="text-sm text-charcoal/60 dark:text-ivory/50 leading-relaxed">
              A collection of professional work, portfolio prototypes and analytical case studies.
              Expand any card to view the full case study.
            </p>
            {/* Search */}
            <div className="relative max-w-sm">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/40 dark:text-ivory/30" />
              <input
                type="search"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-9 py-2 font-mono text-xs bg-transparent border border-softgrey dark:border-olive/30
                           text-charcoal dark:text-ivory placeholder:text-charcoal/40 dark:placeholder:text-ivory/30
                           focus:outline-none focus:border-terracotta dark:focus:border-terracotta transition-colors"
                aria-label="Search projects"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal/40 dark:text-ivory/30 hover:text-terracotta"
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter projects by category">
          <button
            className={`filter-btn ${activeFilter === 'All' ? 'active' : ''}`}
            onClick={() => setActiveFilter('All')}
            aria-pressed={activeFilter === 'All'}
          >
            All
          </button>
          {ALL_CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
              aria-pressed={activeFilter === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results count */}
        {(searchQuery || activeFilter !== 'All') && (
          <p className="font-mono text-xs text-olive mb-6">
            {filtered.length} project{filtered.length !== 1 ? 's' : ''} found
          </p>
        )}

        {/* Project grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="font-display text-2xl text-charcoal/30 dark:text-ivory/20 mb-2">No projects found</p>
            <p className="font-mono text-xs text-olive">Try a different filter or search term</p>
          </div>
        )}
      </div>
    </section>
  );
}
