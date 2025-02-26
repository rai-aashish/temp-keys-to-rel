import {
  FreeAdmissionSection,
  SpeakerSection,
  SpecificEventLocation,
  EventRegisterBlock,
} from '@/app/[slug]/_components';

import { BookRevelationSection, FAQSection, HeroSection, IncludedTopicsSection } from '@/app/_components';
import TestimonialsSlider from '@/app/_components/testimonial-slider';
import GiftClaimBanner from '@/components/common/gift-claim-banner';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate metadata for the page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `Event Identifier - ${slug}`,
    description: `This is the page for ${slug}`,
  };
}

// Server Component
export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  if (!['1', '2'].includes(slug)) {
    notFound();
  }

  return (
    <>
      <HeroSection>
        <EventRegisterBlock />
      </HeroSection>
      <BookRevelationSection />
      <FreeAdmissionSection />
      <IncludedTopicsSection />
      <GiftClaimBanner href="#" />
      <SpecificEventLocation />
      <SpeakerSection />
      <FAQSection />
      <TestimonialsSlider />
    </>
  );
}
