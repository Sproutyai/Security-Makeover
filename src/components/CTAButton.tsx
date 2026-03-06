import Link from 'next/link';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function CTAButton({ href, children, variant = 'primary', size = 'md', className = '' }: CTAButtonProps) {
  const base = 'inline-flex items-center justify-center font-bold rounded-full transition-all duration-300 uppercase tracking-wide';

  const sizes = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  const variants = {
    primary: 'bg-gradient-to-r from-red to-red-hover text-white shadow-[0_4px_20px_rgba(230,57,70,0.4)] hover:shadow-[0_6px_30px_rgba(230,57,70,0.6)] hover:scale-105',
    secondary: 'bg-gradient-to-r from-electric-blue to-electric-blue-hover text-white shadow-[0_4px_20px_rgba(0,180,216,0.3)] hover:shadow-[0_6px_30px_rgba(0,180,216,0.5)] hover:scale-105',
    outline: 'border-2 border-white/70 text-white hover:bg-white hover:text-navy backdrop-blur-sm hover:scale-105',
  };

  return (
    <Link href={href} className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
