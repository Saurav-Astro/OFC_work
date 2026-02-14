import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  group?: string;
};

export const placeholderImages: ImagePlaceholder[] = data.placeholderImages as ImagePlaceholder[];

export const weightClasses = [
    "Flyweight",
    "Bantamweight",
    "Featherweight",
    "Lightweight",
    "Welterweight",
    "Middleweight",
    "Light Heavyweight",
    "Heavyweight",
];

export const divisions = ["MMA", "Boxing", "Kickboxing", "Grappling"];

export const upcomingEvents: { id: number; name: string; date: string; location: string; posterId: string; description?: string }[] = [
    {
      id: 1,
      name: "Fit India Marathon",
      date: "TBD 2024",
      location: "Across India",
      posterId: "event-marathon",
      description: "Our goal is simple — to transform an Obese India into a Fit India. Through this marathon, we aim to inspire people to prioritize their health, adopt an active lifestyle, and build discipline in their daily lives. Run for Fitness. Run for a Stronger India."
    }
];

export const pastEvents: { id: number; name: string; date: string; location: string; posterId: string; description?: string }[] = [];

export const sponsors = [
    { name: 'Sponsor One', logoId: 'sponsor-1' },
    { name: 'Partner Two', logoId: 'sponsor-2' },
    { name: 'Brand Three', logoId: 'sponsor-3' },
    { name: 'Corp Four', logoId: 'sponsor-4' },
    { name: 'Logo Five', logoId: 'sponsor-5' },
];
