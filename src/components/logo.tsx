import Image from 'next/image';

export function OfcLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/Ofc/ofc-logo.jpeg"
      alt="OFC Octa Fighting Championship Logo"
      width={280}
      height={100}
      className={className}
      priority
    />
  );
}
