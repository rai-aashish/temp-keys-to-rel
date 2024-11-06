import React from 'react';

import GiftClaim from '@/components/common/gift-claim';
import {
  HeroSection,
  BookRevelationSection,
  IncludedTopicsSection,
  FreeAdmissionPromo,
  FAQSection,
  EventLocationSearchSection,
} from '@/app/_components';

export default function Home() {
  return (
    <>
      <GiftClaim />
      <HeroSection />
      <BookRevelationSection />
      <IncludedTopicsSection />
      <EventLocationSearchSection />
      <FAQSection />
      <FreeAdmissionPromo />
    </>
  );
}
