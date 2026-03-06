import Link from 'next/link';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function CTAButton({ href, children, variant = 'primary', size = 'md', className = '' }: CTAButtonProps) {
  const base = 'inline-flex items-center justify-center font-bold rounded-full transition-all duration-200 uppercase tracking-wide';
  
  const sizes = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  const variants = {
    primary: 'bg-red text-white hover:bg-red-hover shadow-lg hover:shadow-xl',
    secondary: 'bg-electric-blue text-white hover:bg-electric-blue-hover shadow-lg hover:shadow-xl',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-navy',
  };

  return (
    <Link href={href} className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
