import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';

import { RootLayout as Layout } from './_components/root-layout';

import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-primary',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Keys to Revelation',
  description: 'Keys to Revelation',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
