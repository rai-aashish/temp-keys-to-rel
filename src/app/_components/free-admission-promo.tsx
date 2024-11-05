import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Book from '@/components/common/book';
import { ButtonLink } from '@/components/ui';
import BookSmall from '@/assets/book-xs.webp';
import BookImage from '@/assets/hero-image.webp';
import Container from '@/components/common/container';

const FreeAdmissionPromo = () => {
  return (
    <Container className="relative">
      <div className="mx-auto h-[21.625rem] max-w-[62.5rem] overflow-hidden rounded-xl">
        <div className="relative flex h-full">
          <div className="relative grow">
            <Image src={BookImage} fill alt="book-thumbnail" className="object-cover" />

            {/* typography */}
            <div
              style={{
                writingMode: 'vertical-lr',
                textOrientation: 'sideways',
              }}
              className="absolute left-0 top-1/2 inline-grid h-full w-[8.625rem] -translate-y-1/2 rotate-180 place-items-center bg-[#1E1E1E9C] text-center text-h3 uppercase backdrop-blur-[1.5rem]"
            >
              Free Admission
            </div>
          </div>

          {/* RIGHT section */}
          <div className="flex h-full w-[347px] flex-col">
            <div className="grow px-9 pt-9 bg-radial-primary-gradient">
              <div className="mb-5 text-[1.75rem] font-extrabold uppercase leading-[1.2] tracking-[-0.02em]">
                Sign up
                <br /> now!
              </div>

              <ButtonLink
                href="#"
                variant="secondary"
                classNames={{
                  rightIconWrapper: 'bg-[#131313] text-white',
                }}
                rightIcon={ArrowUpRight}
              >
                Reserve Your Seat
              </ButtonLink>
            </div>

            <div className="relative mt-auto bg-[#1E1E1E] p-4.5 text-center text-b2 font-bold uppercase leading-[1.1] text-white">
              <Book src={BookSmall} alt="book-thumbnail" className="absolute bottom-3 left-5.5 aspect-[52/70] w-13" />
              <span className="inline-block w-16"></span>
              claim your free gift
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export { FreeAdmissionPromo };
