"use client";

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, Home, CalendarDays, GalleryHorizontal, Mail } from 'lucide-react';
import { useState, useMemo } from 'react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { OfcLogo } from '@/components/logo';
import { cn } from '@/lib/utils';
import { LimelightNav } from '@/components/ui/limelight-nav';
import type { NavItem } from '@/components/ui/limelight-nav';
import { ScrollProgressBar } from '@/components/scroll-animations';

export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navLinks = useMemo(() => [
    { href: '/', label: 'Home', icon: <Home /> },
    { href: '/events', label: 'Events', icon: <CalendarDays /> },
    { href: '/gallery-contact', label: 'Gallery', icon: <GalleryHorizontal /> },
    { href: '/contact', label: 'Contact', icon: <Mail /> },
  ], []);

  const limelightNavItems: NavItem[] = useMemo(() => navLinks.map(link => ({
    id: link.href,
    icon: link.icon,
    label: link.label,
    onClick: () => router.push(link.href)
  })), [router, navLinks]);

  const defaultActiveIndex = useMemo(() => {
    const activeIndex = navLinks.findIndex(link => pathname === link.href);
    return activeIndex > -1 ? activeIndex : 0;
  }, [pathname, navLinks]);

  return (
    <>
    <header className="sticky top-0 z-50 w-full border-b-2 border-primary/20 bg-black/95 backdrop-blur-md supports-[backdrop-filter]:bg-black/80 cage-pattern-subtle">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group" aria-label="OFC Octa Fighting Championship Home">
          <OfcLogo className="h-10 w-auto text-primary transition-all duration-300 group-hover:drop-shadow-[0_0_10px_hsl(var(--primary)/0.8)]" />
          <span className="font-headline text-2xl font-black hidden lg:inline-block text-primary group-hover:text-secondary transition-colors truncate max-w-[300px] xl:max-w-none">
            OFC Octa Fighting Championship
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <LimelightNav items={limelightNavItems} defaultActiveIndex={defaultActiveIndex} />
        </nav>
        
        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative text-primary border-2 border-primary/40 p-1 rounded-sm bg-primary/5 hover:bg-primary/20 transition-all focus-visible:ring-0 focus-visible:ring-offset-0 active:scale-95 group"
              >
                <div className="absolute inset-0 bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
                <Menu className="h-8 w-8 relative z-10" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85%] bg-black/98 border-l-2 border-primary/30 p-0 shadow-[0_0_50px_rgba(234,0,0,0.15)] flex flex-col justify-center">
              <div className="absolute top-6 left-6 opacity-30 pointer-events-none">
                <OfcLogo className="h-10 w-auto text-primary" />
              </div>
              <nav className="flex flex-col items-center justify-center gap-12 py-12">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      'text-4xl font-headline transition-all duration-300 hover:text-primary uppercase italic tracking-widest hover:scale-110 combat-shadow',
                      pathname === link.href ? 'text-primary' : 'text-foreground'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="absolute bottom-10 w-full text-center px-6 opacity-50">
                <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground">
                  OFC Octa Fighting Championship
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
    <ScrollProgressBar className="!fixed top-[64px] h-[3px] shadow-[0_0_10px_hsl(var(--primary)/0.5)]" />
    </>
  );
}
