import React from 'react';
import Image from 'next/image';
import Link, { LinkProps } from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { cn } from '@/lib';
import BrandLogo from '@/assets/logo.webp';
import Container from '@/components/common/container';
import { FOOTER_LINKS, FOOTER_MISCEILLANEOUS_LINKS } from '@/config/footer';

function FooterLink({ className, children, ...props }: LinkProps & React.ComponentPropsWithRef<'a'>) {
  return (
    <Link
      className={cn([
        'text-sm flex items-start gap-0.5 text-b2 font-medium text-[#F7F1E3B8] duration-100 hover:text-white',
        className,
      ])}
      {...props}
    >
      {children}
      <ArrowUpRight className="size-3.5" />
    </Link>
  );
}

function Footer({ className, ...props }: React.ComponentPropsWithRef<'footer'>) {
  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <Container
      as="footer"
      className={cn(['bg-[#1A1A1A] py-6 text-[#F7F1E3B8] lg:py-12', className as string])}
      {...props}
    >
      <div className="mb-10 flex flex-col items-center justify-center gap-8 md:mb-8 md:flex-row md:items-start md:justify-between lg:mb-29">
        {/* BRAND LOGO */}
        <div className="relative aspect-[230/112] w-[12.125rem] md:w-[13.125rem] lg:w-[14.375rem]">
          <Image fill src={BrandLogo} alt="brand-logo" className="object-scale-down" />
        </div>

        {/* FOOTER LINK GROUPS */}
        <div className="flex items-start gap-15 md:gap-17 lg:gap-22">
          {FOOTER_LINKS.map((linkGroup, index) => (
            <div key={index}>
              <span className="mb-5 block text-b2 font-semibold text-[#F7F1E3]">{linkGroup.group}</span>
              <ul className="flex flex-col gap-4">
                {linkGroup.links.map((link, index) => (
                  <li key={index}>
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* MISCELLANEOUS LINKS */}
      <div className="flex flex-col justify-between gap-1 border-y border-[#F7F1E31A] py-3 md:flex-row">
        <div className="flex flex-wrap items-center gap-2.5">
          {FOOTER_MISCEILLANEOUS_LINKS.map((link, index) => (
            <FooterLink key={index} href={link.href}>
              {link.label}
            </FooterLink>
          ))}
        </div>

        <span className="text-b2">Copyrights © {CURRENT_YEAR}. All rights reserved</span>
      </div>
    </Container>
  );
}

export { Footer };
