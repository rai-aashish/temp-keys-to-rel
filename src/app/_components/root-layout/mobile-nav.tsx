'use client';
import React, { useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

import { useBreakpoint, useToggle } from '@/hooks';
import { EventLocationSearch } from '@/components/common/event-location-search';
import { Button, ButtonLink, Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui';

const MobileNav = () => {
  const [openNav, { set }] = useToggle(false);

  useBreakpoint('md', {
    matchedCallback: () => set(false),
  });

  return (
    <>
      <Dialog open={openNav} onOpenChange={set}>
        <DialogTrigger asChild>
          <Button
            suppressHydrationWarning
            variant="menu"
            size="menu-md"
            className="text-[#1E1E1E] group-data-[scrolled=true]:text-[#F7F1E3] md:hidden"
          >
            <Menu />
          </Button>
        </DialogTrigger>

        <DialogContent className="h-screen w-screen max-w-[unset] overflow-y-auto rounded-none bg-[#141414] py-[3.375rem] sm:rounded-none sm:px-5">
          <DialogTitle className="sr-only">Mobile Navigation</DialogTitle>

          <EventLocationSearch variant="mobile-nav" className="" />

          <div className="mt-6">
            <ButtonLink
              href="#"
              rightIcon={ArrowUpRight}
              leftIcon={() => <span />}
              classNames={{
                root: 'w-full justify-between',
                leftIconWrapper: 'w-px invisible',
              }}
            >
              Register Now
            </ButtonLink>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export { MobileNav };
