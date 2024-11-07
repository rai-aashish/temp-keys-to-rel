import { cn } from '@/lib';
import React from 'react';
import SkyBg from '@/assets/sky-bg.webp';
import Image from 'next/image';
import Container from '@/components/common/container';
import { EventLocationSearch } from '@/components/common/event-location-search';

const EventLocationSearchSection = () => {
  return (
    <section className={cn(['relative isolate lg:min-h-[43.75rem]', 'pb-10 pt-12 lg:pt-[7.5rem]'])}>
      <div className="absolute left-0 top-0 z-[-1] h-1/2 min-h-[25.3125rem] w-full">
        <Image src={SkyBg} fill alt="sky-bg" className="object-cover" />
      </div>

      <Container>
        <EventLocationSearch />
      </Container>
    </section>
  );
};

export { EventLocationSearchSection };
