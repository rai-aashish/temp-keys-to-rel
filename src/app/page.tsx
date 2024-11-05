import React from 'react';

import GiftClaim from '@/components/common/gift-claim';
import { HeroSection, BookRevelationSection, IncludedTopicsSection, FreeAdmissionPromo } from '@/app/_components';

export default function Home() {
  return (
    <>
      <GiftClaim />
      <HeroSection />
      <BookRevelationSection />
      <IncludedTopicsSection />
      <FreeAdmissionPromo />
    </>
  );
}
