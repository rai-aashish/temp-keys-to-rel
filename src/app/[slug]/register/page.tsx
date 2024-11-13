import { Metadata } from 'next';
import Container from '@/components/common/container';

import { ReservationForm } from './_components';

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

export default async function RegisterPage({ params }: PageProps) {
  const { slug } = await params;
  return (
    <>
      <Container>
        <ReservationForm />
      </Container>
    </>
  );
}
