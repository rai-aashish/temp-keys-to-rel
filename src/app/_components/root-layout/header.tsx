'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

import { cn } from '@/lib';
import Logo from '@/assets/logo.webp';
import { useScrollPosition } from '@/hooks';
import GlobalSearch from '@/components/common/global-search';
import { ButtonLink, Separator, Typography } from '@/components/ui';
import { MobileNav } from './mobile-nav';
import Container from '@/components/common/container';
import { ClassValue } from 'tailwind-variants';

function Header({ ref, ...className }: React.ComponentPropsWithRef<'header'>) {
  const { y } = useScrollPosition();

  return (
    <header
      ref={ref}
      className={cn([
        'fixed left-0 right-0 top-0 z-50 duration-150',
        y > 10 && 'bg-background/10 backdrop-blur-sm',
        className as ClassValue,
      ])}
    >
      <Container className="flex items-center justify-between py-5 text-[#F7F1E3]">
        {/* BRANDING */}

        <Link href="/" className="flex items-center gap-x-4">
          <div className="relative h-[2.3438rem] w-[4.5469rem] md:h-[3.125rem] md:w-[6.0625rem]">
            <Image src={Logo} quality={100} alt="logo" className="object-scale-down" />
          </div>
          <Separator orientation="vertical" className="bg-[currentColor]" />
          <Typography.Paragraph as="span" className="text-[0.6563rem] md:text-b2-b md:tracking-[0.02em] lg:text-b1-b">
            A Bible Prophecy Seminar
          </Typography.Paragraph>
        </Link>
        <div className="hidden items-center gap-x-5 md:flex">
          <GlobalSearch className="text-[#1E1E1EB8]" />
          <ButtonLink href="/events" rightIcon={ArrowUpRight}>
            Register Now
          </ButtonLink>
        </div>
        <MobileNav />
      </Container>
    </header>
  );
}

export { Header };
