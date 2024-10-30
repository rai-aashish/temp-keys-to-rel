import { HeroSection } from '@/app/_components';
import { Button } from '@/components/ui';
import { Search } from 'lucide-react';
import React from 'react';

export default function Home() {
  return (
    <>
      <HeroSection />
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
        rightIcon={Search}
      >
        here
      </Button>
    </>
  );
}
