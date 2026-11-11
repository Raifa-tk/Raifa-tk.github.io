import { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, Github, Youtube, AlertTriangle, CheckCircle, Clock, BarChart2 } from 'lucide-react';
import { TechTag } from './TechTag';
import type { Project } from '../../data/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const statusConfig = {
  professional: { label: 'Professional Work', icon: CheckCircle, color: 'text-olive' },
  portfolio: { label: 'Portfolio Prototype', icon: Clock, color: 'text-terracotta' },
  wip: { label: 'Work in Progress', icon: AlertTriangle, color: 'text-amber-500' },
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const status = statusConfig[project.status];
  const StatusIcon = status.icon;

  return (
    <article
      className="project-card reveal"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Project image / placeholder */}
      <div className="relative h-48 bg-softgrey/50 dark:bg-forest/30 overflow-hidden">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={`${project.title} preview`}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        ) : null}
        {/* Overlay with project number */}
        <div className="absolute top-4 left-4">
          <span className="font-mono text-xs text-olive dark:text-olive/70">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        {/* Status badge */}
        <div className={`absolute top-4 right-4 flex items-center gap-1.5 text-xs font-mono ${status.color}`}>
          <StatusIcon size={12} />
          <span>{status.label}</span>
        </div>
        {project.hasIllustrativeContent && (
          <div className="absolute bottom-4 left-4 flex items-center gap-1 text-xs text-amber-600 dark:text-amber-400 font-mono bg-amber-50 dark:bg-amber-900/30 px-2 py-1">
            <AlertTriangle size={10} />
            Illustrative content
          </div>
        )}
        {project.status === 'portfolio' && (
          <div className="absolute bottom-4 left-4 flex items-center gap-1 text-xs text-terracotta font-mono bg-terracotta/10 px-2 py-1">
            <AlertTriangle size={10} />
            Fictional data
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="p-6">
        <h3 className="font-display text-xl font-medium text-charcoal dark:text-ivory mb-1">
          {project.title}
        </h3>
        <p className="font-mono text-xs text-olive mb-4">{project.subtitle}</p>

        {/* Categories */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.category.map(cat => (
            <TechTag key={cat} name={cat} />
          ))}
        </div>

        {/* Business problem preview */}
        <p className="text-sm text-charcoal/70 dark:text-ivory/60 leading-relaxed line-clamp-3 mb-4">
          {project.businessProblem}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map(tech => (
            <TechTag key={tech} name={tech} />
          ))}
        </div>

        {/* Action row */}
        <div className="flex items-center justify-between pt-4 border-t border-softgrey dark:border-olive/20">
          <div className="flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono text-terracotta hover:underline font-semibold"
                aria-label="Live dashboard"
              >
                <BarChart2 size={14} />
                Live Dashboard
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono text-charcoal/70 dark:text-ivory/60 hover:text-terracotta transition-colors"
                aria-label="Watch demo"
              >
                <Youtube size={14} />
                Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono text-charcoal/70 dark:text-ivory/60 hover:text-terracotta transition-colors"
                aria-label="GitHub repository"
              >
                <Github size={14} />
                Code
              </a>
            )}
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1.5 text-xs font-mono text-olive hover:text-terracotta transition-colors flex-shrink-0"
            aria-expanded={expanded}
          >
            {expanded ? (
              <>Less <ChevronUp size={14} /></>
            ) : (
              <>Full Case Study <ChevronDown size={14} /></>
            )}
          </button>
        </div>

        {/* Expanded case study */}
        {expanded && (
          <div className="mt-6 pt-6 border-t border-softgrey dark:border-olive/20 space-y-5 animate-fade-in">
            <CaseStudySection title="Objective" content={project.objective} />
            <CaseStudySection title="Dataset" content={project.dataset} />
            
            <div>
              <h4 className="font-mono text-xs tracking-widest uppercase text-olive mb-3">My Contribution</h4>
              <ul className="space-y-2">
                {project.myContribution.map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-charcoal/80 dark:text-ivory/70">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-terracotta flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-xs tracking-widest uppercase text-olive mb-3">Analytical Approach</h4>
              <ul className="space-y-2">
                {project.analyticalApproach.map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-charcoal/80 dark:text-ivory/70">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-olive flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-xs tracking-widest uppercase text-olive mb-3">Key Findings</h4>
              <ul className="space-y-2">
                {project.keyFindings.map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-charcoal/80 dark:text-ivory/70">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-forest dark:bg-ivory/30 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {project.demoUrl && (
              <div>
                <h4 className="font-mono text-xs tracking-widest uppercase text-olive mb-3">Project Demo</h4>
                <div className="relative aspect-video bg-black/5 dark:bg-black/40">
                  <iframe
                    src={`https://www.youtube.com/embed/${getYoutubeId(project.demoUrl)}`}
                    title={`${project.title} demo`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            )}

            {(project.liveUrl || project.demoUrl || project.githubUrl) && (
              <div className="flex flex-wrap gap-3 pt-2">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                    className="btn-primary text-sm">
                    <BarChart2 size={15} /> Open Live Dashboard <ExternalLink size={12} />
                  </a>
                )}
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                    className="btn-secondary text-sm">
                    <Youtube size={15} /> Watch Demo <ExternalLink size={12} />
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                    className="btn-ghost text-sm">
                    <Github size={15} /> View Code
                  </a>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

function CaseStudySection({ title, content }: { title: string; content: string }) {
  return (
    <div>
      <h4 className="font-mono text-xs tracking-widest uppercase text-olive mb-2">{title}</h4>
      <p className="text-sm text-charcoal/80 dark:text-ivory/70 leading-relaxed">{content}</p>
    </div>
  );
}

function getYoutubeId(url: string): string {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([^&?/]+)/);
  return match ? match[1] : '';
}
