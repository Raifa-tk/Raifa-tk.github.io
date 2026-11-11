import { useState } from 'react';
import { Mail, Linkedin, Github, Copy, Check, ExternalLink } from 'lucide-react';

const EMAIL = 'raifatpk@gmail.com';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: select the text
    }
  };

  return (
    <section id="contact" className="py-24 bg-softgrey/30 dark:bg-forest/10" aria-label="Contact">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left */}
          <div className="lg:col-span-5">
            <p className="section-label">Contact</p>
            <h2 className="section-heading mb-6">
              Let&apos;s<br/>
              <span className="text-terracotta italic font-normal">Connect</span>
            </h2>
            <div className="divider" />
            <p className="text-base text-charcoal/70 dark:text-ivory/60 leading-relaxed mt-6 max-w-md">
              I&apos;m always open to discussing data analytics, BI projects, ERP systems, mentorship
              or interesting data challenges. The best way to reach me is via email or LinkedIn.
            </p>

            {/* Note about contact form */}
            <div className="mt-6 p-4 border border-softgrey dark:border-olive/20 bg-ivory dark:bg-charcoal/40">
              <p className="font-mono text-xs text-olive leading-relaxed">
                <span className="font-medium text-charcoal dark:text-ivory">Note:</span>{' '}
                This is a static site hosted on GitHub Pages, so a backend contact form is not
                included. Please use email or LinkedIn for direct contact.
              </p>
            </div>
          </div>

          {/* Right: contact options */}
          <div className="lg:col-span-7">
            <div className="space-y-4">

              {/* Email */}
              <div className="p-6 border border-softgrey dark:border-olive/20 hover:border-terracotta/40 transition-colors group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-terracotta/10 text-terracotta flex-shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-olive uppercase tracking-widest mb-1">Email</p>
                      <a
                        href={`mailto:${EMAIL}`}
                        className="font-body text-base font-medium text-charcoal dark:text-ivory hover:text-terracotta dark:hover:text-terracotta transition-colors"
                      >
                        {EMAIL}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    aria-label="Copy email address"
                    className="flex items-center gap-1.5 font-mono text-xs text-charcoal/40 dark:text-ivory/30 hover:text-terracotta transition-colors p-2"
                  >
                    {copied ? (
                      <><Check size={14} className="text-green-500" /> Copied</>
                    ) : (
                      <><Copy size={14} /> Copy</>
                    )}
                  </button>
                </div>
              </div>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/raifa/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-6 border border-softgrey dark:border-olive/20 hover:border-terracotta/40 transition-colors group block"
                aria-label="LinkedIn profile"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex-shrink-0">
                    <Linkedin size={18} />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-olive uppercase tracking-widest mb-1">LinkedIn</p>
                    <p className="font-body text-base font-medium text-charcoal dark:text-ivory group-hover:text-terracotta dark:group-hover:text-terracotta transition-colors">
                      linkedin.com/in/raifa
                    </p>
                  </div>
                </div>
                <ExternalLink size={16} className="text-charcoal/30 dark:text-ivory/20 group-hover:text-terracotta transition-colors" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Raifa-tk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-6 border border-softgrey dark:border-olive/20 hover:border-terracotta/40 transition-colors group block"
                aria-label="GitHub profile"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-charcoal/10 dark:bg-ivory/10 text-charcoal dark:text-ivory flex-shrink-0">
                    <Github size={18} />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-olive uppercase tracking-widest mb-1">GitHub</p>
                    <p className="font-body text-base font-medium text-charcoal dark:text-ivory group-hover:text-terracotta dark:group-hover:text-terracotta transition-colors">
                      github.com/Raifa-tk
                    </p>
                  </div>
                </div>
                <ExternalLink size={16} className="text-charcoal/30 dark:text-ivory/20 group-hover:text-terracotta transition-colors" />
              </a>

              {/* Portfolio */}
              <a
                href="https://raifatk.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-6 border border-softgrey dark:border-olive/20 hover:border-terracotta/40 transition-colors group block"
                aria-label="Portfolio website"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-terracotta/10 text-terracotta flex-shrink-0">
                    <ExternalLink size={18} />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-olive uppercase tracking-widest mb-1">Portfolio</p>
                    <p className="font-body text-base font-medium text-charcoal dark:text-ivory group-hover:text-terracotta dark:group-hover:text-terracotta transition-colors">
                      raifatk.github.io
                    </p>
                  </div>
                </div>
                <ExternalLink size={16} className="text-charcoal/30 dark:text-ivory/20 group-hover:text-terracotta transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
