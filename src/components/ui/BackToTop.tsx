import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed bottom-8 right-8 z-40 w-10 h-10 flex items-center justify-center
                 bg-charcoal dark:bg-ivory text-ivory dark:text-charcoal
                 hover:bg-terracotta dark:hover:bg-terracotta dark:hover:text-ivory
                 transition-all duration-200 shadow-lg"
    >
      <ChevronUp size={18} />
    </button>
  );
}
