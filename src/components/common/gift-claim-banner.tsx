import React from 'react';

import { cn } from '@/lib';
import Book from '@/components/common/book';
import { ButtonLink } from '@/components/ui';
import SmallBook from '@/assets/book-xs.webp';
import Container from '@/components/common/container';
import { ArrowUpRight } from 'lucide-react';

interface IGiftClaimBannerProps {
  className?: string;
  href: string;
}

function GiftClaimBanner({ className, href }: IGiftClaimBannerProps) {
  return (
    <Container className={cn(['mb-15 mt-16 md:px-23', className])}>
      <div
        className={cn(
          'bg-primary-gradient',
          'relative flex justify-between rounded-xl',
          'gap-3.5 lg:gap-19',
          'flex-col items-center md:items-start lg:flex-row',
          'px-4 pb-5.5 pt-[6.75rem] md:px-9 md:py-4.5 lg:px-4',
          'md:pl-[14.8125rem] lg:pl-[9.375rem]',
        )}
      >
        <Book
          src={SmallBook}
          alt="book-thumbnail"
          className={cn([
            'absolute aspect-[52/70]',
            'lg:bottom-3 lg:left-7',
            'md:bottom-10 md:left-9 md:top-[unset] md:translate-x-0',
            'left-1/2 top-[-20%] -translate-x-1/2',
            'w-23 md:w-[8.125rem] lg:w-22',
          ])}
        />

        {/* <div className="flex grow flex-col"> */}
        <div className="text-center md:text-start">
          <span className="block text-h4 text-[#1E1E1E]">CLAIM YOUR FREE GIFT!</span>
          <span className="mt-0.5 block text-b2 text-[#1E1E1ED1]">
            Register today and receive a free gift upon arrival!
          </span>
        </div>

        <ButtonLink
          href={href}
          variant="secondary"
          rightIcon={ArrowUpRight}
          classNames={{
            root: 'md:self-start',
            rightIcon: 'text-[#1E1E1E]',
            rightIconWrapper: 'bg-[#FFBD28]',
          }}
        >
          Register To Claim Your Gift
        </ButtonLink>
      </div>
      {/* </div> */}
    </Container>
  );
}

export default GiftClaimBanner;
