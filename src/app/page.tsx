import React from 'react';

import GiftClaim from '@/components/common/gift-claim';
import {
  HeroSection,
  BookRevelationSection,
  IncludedTopicsSection,
  FreeAdmissionPromo,
  FAQSection,
} from '@/app/_components';
import ContentBox from '@/components/common/content-box';

export default function Home() {
  return (
    <>
      <GiftClaim />
      <HeroSection />
      <BookRevelationSection />
      <IncludedTopicsSection />
      <FAQSection />
      <FreeAdmissionPromo />
    </>
  );
}
