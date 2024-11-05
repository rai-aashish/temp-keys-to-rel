import React from 'react';
import Image from 'next/image';

import HeroImage from '@/assets/hero-image.webp';
import Container from '@/components/common/container';
import { ButtonLink, Typography } from '@/components/ui';
import { MapPin, Pin, Search } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen">
      <Image src={HeroImage} fill quality={100} alt="hero-image" className="object-cover" />

      {/* sticky bar */}
      <div className="absolute bottom-0 left-0 w-full py-4 bg-primary-gradient">
        <Container className="flex flex-col items-center justify-between gap-4 text-[#1E1E1E] md:flex-row">
          <div className="flex flex-col gap-5 md:flex-row lg:items-center">
            <span className="mx-auto inline-grid size-12 shrink-0 place-items-center self-start rounded-full bg-white lg:size-15 lg:self-center">
              <MapPin className="size-6 lg:size-7" />
            </span>

            <div className="space-y-1">
              <Typography.Heading as="h3" className="text-h4 lg:text-h3">
                Find A FREE Bible Prophecy Seminar Near You!
              </Typography.Heading>

              <Typography.Paragraph styleAs="s3" className="text-b2 opacity-80 lg:text-s3">
                Experience it LIVE at one of more than 100+ locations in 2025!
              </Typography.Paragraph>
            </div>
          </div>

          <ButtonLink
            href="#search_location"
            variant="secondary"
            rightIcon={Search}
            leftIcon={() => <span className="invisible md:hidden"></span>}
            classNames={{
              leftIconWrapper: 'invisible md:hidden',
            }}
            className="justify-between self-stretch md:grow-0 md:justify-center md:self-end md:data-[has-left-icon=true]:pl-6 lg:self-center"
          >
            Search Location
          </ButtonLink>
        </Container>
      </div>
    </section>
  );
};

export { HeroSection };
