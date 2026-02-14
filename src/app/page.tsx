
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Trophy,
  Scale,
  Handshake,
  Dumbbell,
  Shield,
  Target,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { OfcLogo } from '@/components/logo';
import { placeholderImages, sponsors } from '@/lib/data';
import { Separator } from '@/components/ui/separator';
import { FadeIn } from '@/components/fade-in';
import { FighterRegistrationForm } from '@/components/fighter-registration-form';
import { ZoomParallax } from '@/components/ui/zoom-parallax';
import { FeatureCard } from '@/components/ui/feature-card';
import { DivisionCard } from '@/components/ui/division-card';
import { GalleryCard } from '@/components/ui/gallery-card';
import { CountdownTimer } from '@/components/countdown-timer';
import { StatsSection } from '@/components/stats-section';
import { CageOverlay } from '@/components/cage-pattern';
import { ScrollReveal, StaggerContainer, StaggerItem, ParallaxScroll, FloatingElement, ScrollProgressBar } from '@/components/scroll-animations';

export default function Home() {
  const whyOFC = [
    {
      icon: <Target className="size-8 text-primary" />,
      title: 'Elite Competition',
      description: 'Face the world\'s most dangerous fighters in professionally sanctioned warfare.',
    },
    {
      icon: <Shield className="size-8 text-primary" />,
      title: 'Uncompromising Standards',
      description: 'Expert judges, strict regulations, and absolute fairness in every bout.',
    },
    {
      icon: <Trophy className="size-8 text-primary" />,
      title: 'Championship Glory',
      description: 'Prove yourself on the biggest stage. Champions are forged here.',
    },
    {
      icon: <Dumbbell className="size-8 text-primary" />,
      title: 'Warrior Discipline',
      description: 'Honor, respect, and the relentless pursuit of greatness.',
    },
  ];

  const whyOFCImages = [
    placeholderImages.find(p => p.id === 'why-ofc-1')!,
    placeholderImages.find(p => p.id === 'why-ofc-2')!,
    placeholderImages.find(p => p.id === 'why-ofc-3')!,
    placeholderImages.find(p => p.id === 'why-ofc-4')!,
  ];

  const divisionCards = [
    {
      name: 'MMA',
      icon: '🥊',
      imageUrl: placeholderImages.find(p => p.id === 'gallery-2')?.imageUrl!,
      stats: 'The pinnacle of combat sports.',
    },
    {
      name: 'Boxing',
      icon: '🥊',
      imageUrl: placeholderImages.find(p => p.id === 'gallery-3')?.imageUrl!,
      stats: 'The sweet science of striking.',
    },
    {
      name: 'Kickboxing',
      icon: '🦵',
      imageUrl: placeholderImages.find(p => p.id === 'home-gallery-4')?.imageUrl!,
      stats: 'Devastating kicks and punches.',
    },
    {
      name: 'Grappling',
      icon: '🤼',
      imageUrl: placeholderImages.find(p => p.id === 'gallery-4')?.imageUrl!,
      stats: 'The art of submission.',
    },
  ];

  const galleryImages = placeholderImages.filter(p => p.group === 'home-gallery');

  const parallaxImages = [
    { src: '/Ofc/1.mp4', alt: 'OFC Fighter' },
    placeholderImages.find(p => p.id === 'gallery-2'),
    placeholderImages.find(p => p.id === 'gallery-4'),
    placeholderImages.find(p => p.id === 'gallery-8'),
    placeholderImages.find(p => p.id === 'gallery-3'),
    placeholderImages.find(p => p.id === 'home-gallery-2'),
    placeholderImages.find(p => p.id === 'video-thumb'),
  ].filter((p): p is NonNullable<typeof p> => !!p).map(p => {
    if ('src' in p) {
      return p;
    }
    return {
      src: p.imageUrl,
      alt: p.description
    };
  });

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <ZoomParallax images={parallaxImages}>
        <div className="relative z-10 p-4 sm:p-8 rounded-2xl bg-black/60 backdrop-blur-sm border border-white/10 shadow-2xl mx-4">
          <FloatingElement intensity={10}>
             <OfcLogo className="w-32 sm:w-48 md:w-56 h-auto mb-6 text-primary mx-auto drop-shadow-lg" />
          </FloatingElement>
          
          <h1 className="font-headline text-4xl sm:text-6xl md:text-8xl font-black tracking-wider text-primary uppercase text-shadow-md mb-2 leading-tight md:leading-none">
            Forged in Combat
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-4 mb-4">
             <p className="text-xl sm:text-2xl md:text-4xl font-body font-bold text-white uppercase tracking-widest drop-shadow-md">
               Proven in Blood.
             </p>
             <p className="text-xl sm:text-2xl md:text-4xl font-headline text-secondary uppercase tracking-widest drop-shadow-md">
               Crowned in Glory.
             </p>
          </div>

          <p className="max-w-2xl mx-auto mt-4 text-base md:text-xl text-gray-200 font-body font-medium leading-relaxed drop-shadow-sm">
            Where the world's most dangerous fighters prove their worth in the octagon.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto font-headline text-lg tracking-wide hover:scale-105 transition-transform">
               Latest Events
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto font-headline text-lg tracking-wide hover:bg-white/10 hover:scale-105 transition-transform">
               Fighter Roster
            </Button>
          </div>
        </div>
      </ZoomParallax>

      {/* Stats Section */}
      <ScrollReveal direction="up" delay={0.2}>
        <StatsSection />
      </ScrollReveal>

      {/* About OFC */}
      <ScrollReveal direction="fade">
        <section className="py-16 md:py-24 relative">
          <CageOverlay intensity="subtle" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left" delay={0.2}>
                <div className="text-center md:text-left">
                  <h2 className="font-headline text-3xl md:text-5xl font-black uppercase tracking-wider text-primary combat-shadow">The OFC Octa Fighting Championship Legacy</h2>
                  <Separator className="w-24 h-1 mx-auto md:mx-0 my-6 bg-gradient-to-r from-primary to-secondary" />
                  <p className="text-xl md:text-2xl text-balance text-foreground leading-relaxed font-semibold mb-4">
                    <span className="text-primary font-bold">Octa Fighting Championship</span> is where warriors become legends.
                  </p>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    We don't just host fights—we forge champions. Built on a foundation of integrity, discipline, and respect, OFC is the ultimate proving ground for the world's most elite combat athletes.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.3}>
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-2xl shadow-primary/30 border-2 border-primary/20 group">
                  <Image
                    src="/Ofc/brand-story.jpg"
                    alt="Octa Fighting Championship Brand Story"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Upcoming Event Highlight */}
      <ScrollReveal direction="scale" delay={0.1}>
        <section className="py-16 md:py-24 bg-card relative overflow-hidden">
          <CageOverlay intensity="medium" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left" delay={0.3}>
                <div className="text-center md:text-left">
                  <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
                    <span className="text-primary font-headline text-sm uppercase tracking-widest font-bold flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      Next Fight Night
                    </span>
                  </div>
                  <h2 className="font-headline text-5xl md:text-7xl font-black uppercase tracking-wider text-primary combat-shadow-strong italic">OFC 25: Reckoning</h2>
                  <p className="text-2xl md:text-3xl text-foreground mt-4 font-bold">October 26, 2024</p>
                  <p className="text-xl text-muted-foreground font-semibold">MGM Grand, Las Vegas</p>
                  
                  <div className="mt-8 mb-8">
                    <CountdownTimer 
                      targetDate={new Date('2024-10-26T20:00:00')} 
                    />
                  </div>

                  <Button asChild size="lg" className="aggressive-glow font-bold text-lg px-8 strike-animation w-full sm:w-auto">
                    <Link href="/events">
                      View Fight Card <ArrowRight className="ml-2" />
                    </Link>
                  </Button>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.4}>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl shadow-primary/40 border-2 border-primary/30 group">
                  <Image
                    src="/Ofc/event-poster.jpg"
                    alt="OFC 25 Reckoning"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-headline text-xl md:text-2xl uppercase font-bold">The Battle Begins</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Why OFC Section */}
      <ScrollReveal direction="up" delay={0.1}>
        <section className="py-16 md:py-24 relative">
          <CageOverlay intensity="subtle" />
          <div className="container mx-auto px-4 relative z-10">
            <ScrollReveal direction="scale" delay={0.2}>
              <h2 className="text-center font-headline text-3xl md:text-5xl font-black uppercase tracking-wider text-primary combat-shadow-strong">The OFC Difference</h2>
              <Separator className="w-32 h-1 mx-auto my-6 bg-gradient-to-r from-transparent via-primary to-transparent" />
              <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto mb-12">
                We don't compromise. We don't settle. We set the standard for combat sports excellence.
              </p>
            </ScrollReveal>
            <StaggerContainer staggerDelay={0.15} className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyOFC.map((item, index) => (
                <StaggerItem key={index} className="h-96">
                  <FeatureCard
                    imageUrl={whyOFCImages[index]?.imageUrl || ''}
                    imageAlt={item.title}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                  />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </ScrollReveal>

      {/* Divisions Section */}
      <ScrollReveal direction="up" delay={0.1}>
        <section className="py-16 md:py-24 bg-black">
          <div className="container mx-auto px-4">
             <ScrollReveal direction="scale" delay={0.2}>
               <h2 className="text-center font-headline text-3xl md:text-5xl font-bold uppercase tracking-wider text-primary">Our Divisions</h2>
               <Separator className="w-24 h-1 mx-auto my-6 bg-primary" />
             </ScrollReveal>
            <StaggerContainer staggerDelay={0.12} className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {divisionCards.map((division) => (
                <StaggerItem key={division.name} className="h-[450px]">
                  <DivisionCard
                    imageUrl={division.imageUrl}
                    name={division.name}
                    icon={division.icon}
                    description={division.stats}
                    href="#"
                    accentColor="0 84.2% 60.2%"
                  />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </ScrollReveal>

      {/* Gallery Preview */}
      <ScrollReveal direction="up" delay={0.1}>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <ScrollReveal direction="scale" delay={0.2}>
              <h2 className="text-center font-headline text-3xl md:text-5xl font-bold uppercase tracking-wider text-primary">Gallery</h2>
              <Separator className="w-24 h-1 mx-auto my-6 bg-primary" />
            </ScrollReveal>
            <StaggerContainer staggerDelay={0.08} className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((image, i) => (
                <StaggerItem key={image.id} className={` ${i >= 2 ? 'hidden md:block' : ''}`}>
                  <GalleryCard
                     src={image.imageUrl}
                     alt={image.description}
                     caption={image.description}
                     aspectRatio="video"
                     className="h-full w-full"
                  />
                </StaggerItem>
              ))}
            </StaggerContainer>
            <div className="text-center mt-8">
              <Button asChild variant="outline" size="lg">
                <Link href="/gallery-contact">View Full Gallery</Link>
              </Button>
            </div>
          </div>
        </section>
      </ScrollReveal>
      
      {/* Fighter Registration */}
      <ScrollReveal direction="scale" delay={0.1}>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-3xl">
            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="text-center font-headline text-3xl md:text-5xl font-bold uppercase tracking-wider text-primary">Join the Ranks</h2>
              <Separator className="w-24 h-1 mx-auto my-6 bg-primary" />
              <p className="text-center text-muted-foreground text-lg mb-12">
                Think you have what it takes? Apply to become an OFC fighter.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <FighterRegistrationForm />
            </ScrollReveal>
          </div>
        </section>
      </ScrollReveal>

      {/* Sponsors Section */}
      <ScrollReveal direction="up" delay={0.1}>
        <section className="py-16 md:py-24 bg-card overflow-hidden">
          <div className="container mx-auto px-4">
            <ScrollReveal direction="scale" delay={0.2}>
              <h2 className="text-center font-headline text-3xl md:text-5xl font-bold uppercase tracking-wider text-primary">Our Partners</h2>
              <Separator className="w-24 h-1 mx-auto my-6 bg-primary" />
            </ScrollReveal>
            
            {/* Infinite Scrolling Carousel */}
            <div className="mt-12 relative">
              <div className="flex w-max animate-scroll">
                {/* Duplicate sponsors array for seamless loop */}
                {[...sponsors, ...sponsors, ...sponsors].map((sponsor, index) => {
                  const logo = placeholderImages.find(p => p.id === sponsor.logoId);
                  return logo ? (
                    <div 
                      key={`${sponsor.name}-${index}`} 
                      className="flex items-center justify-center p-8 mx-6 bg-background rounded-lg hover:bg-primary/5 transition-all duration-300 min-w-[200px] group"
                    >
                      <Image
                        src={logo.imageUrl}
                        alt={sponsor.name}
                        width={150}
                        height={60}
                        className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                      />
                    </div>
                  ) : null;
                })}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}