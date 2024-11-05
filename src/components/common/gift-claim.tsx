'use client';

import React from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

import { cn } from '@/lib';
import { useToggle } from '@/hooks';
import GiftImage from '@/assets/gift.webp';
import BookImage from '@/assets/book-xs.webp';
import { Button, ButtonLink } from '@/components/ui';
import { MotionDiv } from '@/components/motion/elements';

const GiftClaim = () => {
  const [showGiftUI, { set: setShowGiftUI }] = useToggle(true);

  const [showClaimButton, { set: setClaimButton }] = useToggle(false);

  return (
    <AnimatePresence>
      {showGiftUI && (
        <MotionDiv
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className="fixed bottom-9 right-15 z-40 inline-block"
        >
          <AnimatePresence>
            {showClaimButton && (
              <MotionDiv
                initial={{
                  opacity: 0,
                  translateX: '100%',
                }}
                animate={{
                  opacity: 1,
                  translateX: 0,
                }}
                exit={{
                  opacity: 0,
                  translateX: '100%',
                }}
                transition={{
                  duration: 0.2,
                }}
                className="absolute bottom-full right-0 w-max pb-7.5"
              >
                <ButtonLink
                  href="#"
                  variant="unstyled"
                  size="none"
                  className="relative h-[5.25rem] overflow-visible rounded-[12.5rem] pl-22 pr-5 text-[1.25rem] font-extrabold leading-[1.2] text-[#1E1E1E] shadow-[0.375rem_1.5625rem_1.9125rem_0px_#00000059] bg-primary-gradient"
                >
                  <Book className="absolute bottom-[1.3125rem] left-4 h-[4.6875rem] w-14" />
                  Claim Your Free Gift
                </ButtonLink>

                <Button
                  onClick={() => setClaimButton(false)}
                  variant="unstyled"
                  size="none"
                  className="absolute right-0 top-0 z-50 inline-grid size-10 -translate-y-[15%] translate-x-[40%] place-items-center overflow-hidden rounded-full bg-white text-black"
                >
                  <X className="size-6" />
                </Button>
              </MotionDiv>
            )}
          </AnimatePresence>

          {/* main gift icon */}
          <div
            onMouseEnter={() => setClaimButton(true)}
            tabIndex={0}
            className={cn(['relative inline-grid size-23 place-items-center rounded-full bg-primary-gradient'])}
          >
            <span className="relative inline-grid size-20 place-items-center overflow-hidden rounded-full bg-white shadow-highlight">
              <Image src={GiftImage} fill quality={100} alt="gift-image" className="object-scale-down" />
            </span>
            <Button
              onClick={() => {
                setShowGiftUI(false);
              }}
              variant="unstyled"
              size="none"
              className="absolute right-0 top-0 z-50 inline-grid size-7.5 -translate-y-[15%] translate-x-[40%] place-items-center rounded-full bg-white text-black"
            >
              <X className="size-3.5" />
            </Button>
          </div>
        </MotionDiv>
      )}
    </AnimatePresence>
  );
};

interface IBookProps {
  className?: string;
}

const Book: React.FC<IBookProps> = ({ className }) => {
  return (
    <div className={cn(['rounded-sm border border-white', 'relative isolate shadow-highlight', className])}>
      <Image src={BookImage} fill quality={100} alt="gift-image" className="rounded-sm object-cover" />

      <span className="absolute inset-0 z-[-1] inline-block translate-x-[12%] rotate-[8deg] scale-95 rounded-[inherit] bg-[#E8EBEF] shadow-highlight"></span>
    </div>
  );
};

export default GiftClaim;
