import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-softgrey dark:border-olive/20 py-10 mt-20">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="font-display text-lg font-medium text-charcoal dark:text-ivory">
            Raifa TK<span className="text-terracotta">.</span>
          </p>
          <p className="font-mono text-xs text-olive mt-0.5">
            Data Analyst · Business Intelligence · ERP Analytics
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a href="https://www.linkedin.com/in/raifa/" target="_blank" rel="noopener noreferrer"
            aria-label="LinkedIn" className="text-charcoal/50 dark:text-ivory/40 hover:text-terracotta dark:hover:text-terracotta transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="https://github.com/Raifa-tk" target="_blank" rel="noopener noreferrer"
            aria-label="GitHub" className="text-charcoal/50 dark:text-ivory/40 hover:text-terracotta dark:hover:text-terracotta transition-colors">
            <Github size={18} />
          </a>
          <a href="mailto:raifatpk@gmail.com"
            aria-label="Email" className="text-charcoal/50 dark:text-ivory/40 hover:text-terracotta dark:hover:text-terracotta transition-colors">
            <Mail size={18} />
          </a>
        </div>

        <p className="font-mono text-xs text-charcoal/40 dark:text-ivory/30">
          © {year} Raifa TK
        </p>
      </div>
    </footer>
  );
}
