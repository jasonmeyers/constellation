import { HTMLAttributes } from 'react';

interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
  className = '',
  ...props
}: SectionHeaderProps) {
  const containerClasses = `mb-16 md:mb-20 ${centered ? 'text-center' : ''} ${className}`;

  return (
    <div className={containerClasses} {...props}>
      {eyebrow && (
        <p className="text-accent font-medium text-sm uppercase tracking-wide mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
