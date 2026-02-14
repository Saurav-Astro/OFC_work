import Link from 'next/link';
import { Instagram, Mail } from 'lucide-react';
import { OfcLogo } from './logo';

function MessageCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-black border-t border-primary/40 relative overflow-hidden">
      {/* Cage pattern background - Low Opacity for subtle texture */}
      <div className="absolute inset-0 cage-pattern-subtle opacity-10" />
      
      <div className="container mx-auto px-4 py-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
          
          {/* Brand & Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <Link href="/" className="flex items-center gap-2 group" aria-label="OFC Octa Fighting Championship Home">
              <OfcLogo className="h-6 w-auto text-primary transition-all duration-300 group-hover:drop-shadow-[0_0_10px_hsl(var(--primary)/0.6)]" />
              <span className="font-allan text-xl font-bold text-white group-hover:text-primary transition-colors tracking-wide uppercase">
                OFC Octa Fighting Championship
              </span>
            </Link>
            <p className="text-xs text-muted-foreground/60 hidden md:block leading-relaxed">
              © {new Date().getFullYear()} OFC Octa Fighting Championship. All rights reserved.
              <span className="block mt-1 font-medium text-primary/70">Powered by cureallianz international pvt ltd</span>
            </p>
          </div>

          {/* Compact Links */}
          <div className="flex items-center gap-6 text-xs font-medium text-muted-foreground/80 uppercase tracking-wider">
             <Link href="/events" className="hover:text-white transition-colors">Events</Link>
             <Link href="/gallery-contact" className="hover:text-white transition-colors">Gallery</Link>
             <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
             <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
             <Link href="#" className="hover:text-white transition-colors">Terms</Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110" 
              aria-label="Instagram"
            >
              <Instagram className="size-4" />
            </a>
            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110" 
              aria-label="WhatsApp"
            >
              <MessageCircle className="size-4" />
            </a>
            <a 
              href="mailto:contact@ofc.com" 
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110" 
              aria-label="Email"
            >
              <Mail className="size-4" />
            </a>
          </div>
          
          {/* Mobile Copyright (visible only on small screens) */}
          <p className="text-[10px] text-muted-foreground/40 md:hidden mt-4 text-center">
            © {new Date().getFullYear()} OFC Octa Fighting Championship. All rights reserved.
            <span className="block mt-1 text-primary/50 font-medium">Powered by cureallianz international pvt ltd</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
