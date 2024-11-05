'use client';
import React from 'react';
import { Menu } from 'lucide-react';

import { Button } from '@/components/ui';

const MobileNav = () => {
  return (
    <>
      <Button suppressHydrationWarning variant="menu" size="menu-md" className="text-[#1E1E1E] md:hidden">
        <Menu />
      </Button>
    </>
  );
};

export { MobileNav };
