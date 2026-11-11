interface TechTagProps {
  name: string;
  onClick?: () => void;
  active?: boolean;
  size?: 'sm' | 'md';
}

export function TechTag({ name, onClick, active = false, size = 'sm' }: TechTagProps) {
  const base = `font-mono border transition-colors duration-200 ${
    size === 'md' ? 'text-xs px-3 py-1.5' : 'text-xs px-2.5 py-1'
  }`;

  const styles = active
    ? `${base} bg-charcoal dark:bg-ivory text-ivory dark:text-charcoal border-charcoal dark:border-ivory cursor-pointer`
    : onClick
    ? `${base} border-softgrey dark:border-olive/40 text-charcoal/70 dark:text-ivory/60 hover:border-terracotta hover:text-terracotta cursor-pointer`
    : `${base} border-softgrey dark:border-olive/30 text-charcoal/60 dark:text-ivory/50 cursor-default`;

  if (onClick) {
    return (
      <button onClick={onClick} className={styles}>
        {name}
      </button>
    );
  }

  return <span className={styles}>{name}</span>;
}
