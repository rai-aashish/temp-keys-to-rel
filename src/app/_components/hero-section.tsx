import React from 'react';
import Image from 'next/image';

import { cn } from '@/lib';
import HeroImage from '@/assets/hero-image.webp';

interface IHeroSectionProps {
  className?: string;
  children?: React.ReactNode;
}

function HeroSection(props?: IHeroSectionProps) {
  return (
    <section className={cn(['relative', props?.className])}>
      <div className="relative h-screen">
        <Image src={HeroImage} fill quality={100} alt="hero-image" className="object-cover" />
      </div>

      {props?.children}
    </section>
  );
}

export { HeroSection };
