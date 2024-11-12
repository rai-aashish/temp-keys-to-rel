import { Metadata } from 'next';

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
      <h1>Register for event: {slug}</h1>
    </>
  );
}
