import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Book from '@/components/common/book';
import { ButtonLink } from '@/components/ui';
import BookSmall from '@/assets/book-xs.webp';
import BookImage from '@/assets/hero-image.webp';
import Container from '@/components/common/container';
import { cn } from '@/lib';

const FreeAdmissionPromo = () => {
  return (
    <Container className="relative md:pb-15 md:pt-21 lg:pb-15 lg:pt-14">
      <div className="relative isolate mx-auto md:mb-14 md:min-h-[14.5rem] md:max-w-[calc(100%-30px)] lg:mb-22 lg:h-[21.625rem] lg:max-w-[62.5rem]">
        <div className="h-full w-full overflow-hidden rounded-xl shadow-2xl shadow-[black]">
          <div className="relative flex h-full flex-col md:flex-row">
            {/* LEFT section */}
            <div className="relative aspect-[335/308] grow md:aspect-[unset]">
              <div
                className={cn([
                  'pointer-events-none absolute inset-0 z-10',
                  'border-[#787878] md:border-r-2 md:border-dashed',
                ])}
              ></div>

              <Image src={BookImage} fill alt="book-thumbnail" className="object-cover" />

              {/* typography */}
              <div
                className={cn([
                  'absolute left-0 inline-grid place-items-center bg-[#1E1E1E9C] text-center text-h5 uppercase backdrop-blur-[1.5rem] lg:w-[8.625rem] lg:text-h3',
                  'h-[4.375rem] w-full border-b-2 border-dashed border-[#787878] md:border-b-0 md:border-l-2',
                  'md:top-1/2 md:h-full md:w-[5.625rem] md:-translate-y-1/2 md:rotate-180 md:[text-orientation:sideways] md:[writing-mode:vertical-lr]',
                ])}
              >
                Free Admission
              </div>
            </div>

            {/* RIGHT section */}
            <div className="flex h-full shrink-0 flex-col md:w-[14.5rem] lg:w-[347px]">
              <div className="grow px-5 pb-10 pt-4 bg-radial-primary-gradient md:px-6 md:pt-9 lg:px-9">
                <div className="mb-5 text-center text-[1.75rem] font-extrabold uppercase leading-[1.2] tracking-[-0.02em] md:text-start lg:text-[3.25rem]">
                  Sign up
                  <br /> now!
                </div>

                <ButtonLink
                  href="#"
                  variant="secondary"
                  classNames={{
                    rightIconWrapper: 'bg-[#131313] text-white size-7 md:size-8 lg:size-10',
                    rightIcon: 'size-4 lg:size-6',
                  }}
                  rightIcon={ArrowUpRight}
                  className="w-full justify-between text-bu-s md:w-[unset] md:data-[has-icon]:py-2 lg:text-bu-l lg:data-[has-icon]:py-1.5"
                >
                  Reserve Your Seat
                </ButtonLink>
              </div>

              <div className="relative mt-auto flex bg-[#1E1E1E] py-4 text-center text-b1 font-bold uppercase leading-[1.1] text-white xxs:justify-center md:py-2.5 md:text-[0.75rem] lg:p-4.5 lg:text-b2">
                <Book
                  src={BookSmall}
                  alt="book-thumbnail"
                  className="absolute bottom-3 left-5.5 aspect-[52/70] w-12 md:w-[2.125rem] lg:w-13"
                />
                <span className="inline-block h-full w-20 shrink-0 xs:w-0 md:w-8"></span>
                claim your free gift
              </div>
            </div>
          </div>
        </div>
        {/* backdrop component */}
        <div className="absolute inset-0 z-[-1] hidden translate-x-[-1%] translate-y-[13%] rotate-[-4deg] overflow-hidden rounded-xl bg-white md:block"></div>
      </div>
    </Container>
  );
};

export { FreeAdmissionPromo };
