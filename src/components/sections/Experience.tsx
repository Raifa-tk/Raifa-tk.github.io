import { experiences } from '../../data/experience';
import { Timeline } from '../ui/Timeline';

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-softgrey/30 dark:bg-forest/10" aria-label="Experience">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left: label + heading */}
          <div className="lg:col-span-4">
            <p className="section-label">Experience</p>
            <h2 className="section-heading mb-6">
              Professional<br/>
              <span className="text-terracotta italic font-normal">Journey</span>
            </h2>
            <div className="divider" />
            <p className="text-sm text-charcoal/60 dark:text-ivory/50 leading-relaxed mt-4">
              2+ years across ERP analytics, business intelligence, data consulting and mentorship.
            </p>
          </div>

          {/* Right: timeline */}
          <div className="lg:col-span-8">
            <Timeline experiences={experiences} />
          </div>
        </div>
      </div>
    </section>
  );
}
