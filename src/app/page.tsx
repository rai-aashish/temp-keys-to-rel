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
import GiftClaimBanner from '@/components/common/gift-claim-banner';

export default function Home() {
  return (
    <>
      <GiftClaim />
      <HeroSection />
      <BookRevelationSection />
      <IncludedTopicsSection />
      <GiftClaimBanner href="#" />
      <EventLocationSearchSection />
      <FAQSection />
      <FreeAdmissionPromo />
    </>
  );
}
