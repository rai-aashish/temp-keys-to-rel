import { HeroSection } from '@/app/_components/hero-section';
import GiftClaim from '@/components/common/gift-claim';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import React from 'react';

export default function Home() {
  return (
    <>
      <HeroSection />
      <GiftClaim />
      <Button
        variant={{
          initial: 'primary',
          md: 'secondary',
          lg: 'primary',
        }}
        size={{
          initial: 'sm',
          md: 'md',
          lg: 'lg',
        }}
        rightIcon={ArrowUpRight}
      >
        Press me
      </Button>
    </>
  );
}
