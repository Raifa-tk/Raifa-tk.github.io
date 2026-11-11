import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import type { Theme } from '../../hooks/useTheme';

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'mentorship', label: 'Mentorship' },
  { id: 'contact', label: 'Contact' },
];

interface NavbarProps {
  theme: Theme;
  onThemeToggle: () => void;
}

export function Navbar({ theme, onThemeToggle }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSpy(NAV_ITEMS.map(n => n.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled
            ? 'bg-ivory/95 dark:bg-charcoal/95 backdrop-blur-sm border-b border-softgrey dark:border-olive/20 py-3'
            : 'bg-transparent py-5'
          }`}
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-display text-lg font-medium text-charcoal dark:text-ivory hover:text-terracotta dark:hover:text-terracotta transition-colors"
            aria-label="Scroll to top"
          >
            Raifa<span className="text-terracotta">.</span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`nav-link pb-0.5 ${activeId === item.id ? 'active' : ''}`}
                aria-current={activeId === item.id ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle theme={theme} onToggle={onThemeToggle} />
            {/* Mobile menu toggle */}
            <button
              className="md:hidden w-9 h-9 flex items-center justify-center text-charcoal dark:text-ivory"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        >
          <nav
            className="absolute top-0 right-0 h-full w-72 bg-ivory dark:bg-charcoal shadow-2xl pt-20 px-8"
            onClick={e => e.stopPropagation()}
            aria-label="Mobile navigation"
          >
            <div className="space-y-1">
              {NAV_ITEMS.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`w-full text-left py-3 font-body text-sm font-medium border-b border-softgrey dark:border-olive/20
                    ${activeId === item.id
                      ? 'text-terracotta'
                      : 'text-charcoal dark:text-ivory hover:text-terracotta dark:hover:text-terracotta'
                    } transition-colors`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-softgrey dark:border-olive/20">
              <a
                href="mailto:raifatpk@gmail.com"
                className="btn-primary w-full justify-center text-sm"
              >
                Get in Touch
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
