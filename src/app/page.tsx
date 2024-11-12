import React from 'react';

import GiftClaim from '@/components/common/gift-claim';
import {
  HeroSection,
  BookRevelationSection,
  IncludedTopicsSection,
  FreeAdmissionPromo,
  FAQSection,
  EventLocationSearchSection,
  EventSearchBlock,
} from '@/app/_components';
import GiftClaimBanner from '@/components/common/gift-claim-banner';
import TestimonialsSlider from '@/app/_components/testimonial-slider';

export default function Home() {
  return (
    <>
      <GiftClaim />
      <HeroSection>
        <EventSearchBlock />
      </HeroSection>
      <BookRevelationSection />
      <IncludedTopicsSection />
      <GiftClaimBanner href="#" />
      <EventLocationSearchSection />
      <TestimonialsSlider />
      <FAQSection />
      <FreeAdmissionPromo />
    </>
  );
}
