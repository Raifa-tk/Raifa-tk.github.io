import { useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Certifications } from './components/sections/Certifications';
import { Mentorship } from './components/sections/Mentorship';
import { Contact } from './components/sections/Contact';
import { BackToTop } from './components/ui/BackToTop';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const [theme, toggleTheme] = useTheme();

  // Global scroll-reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    // Observe all reveal elements
    const observe = () => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    };

    observe();
    // Re-observe on DOM changes
    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mo.disconnect();
    };
  }, []);

  return (
    <div className={`min-h-screen bg-ivory dark:bg-charcoal transition-colors duration-300`}>
      <Navbar theme={theme} onThemeToggle={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Mentorship />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
