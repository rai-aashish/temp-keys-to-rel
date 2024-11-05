'use client';

import React from 'react';
import { Header } from './header';
import { Footer } from './footer';

type TRootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: TRootLayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export { RootLayout };
