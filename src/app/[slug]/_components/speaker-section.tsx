import React from 'react';
import Image from 'next/image';

import { cn } from '@/lib';
import SpeakerImage from '@/assets/speaker.webp';
import Container from '@/components/common/container';

const SpeakerSection = () => {
  return (
    <section className="py-6 md:py-8 lg:py-15">
      <Container>
        <h2 className="text-center text-sh4 font-bold uppercase text-shiny md:text-sh2 lg:text-sh1">
          Meet the speaker
        </h2>

        <div
          className={cn([
            'mt-12 md:mt-6 lg:mt-12',
            'mx-auto rounded-2xl border-[0.1875rem] border-[#FFFFFF0E] p-2 bg-glassmorphic md:p-4',
            'flex flex-col gap-4 md:flex-row md:gap-6',
            'w-[calc(100%-1.25rem)]',
            'md:w-[min(100%,50.25rem)]',
          ])}
        >
          <div className="relative aspect-[280/240] shrink-0 basis-[19.6875rem] overflow-hidden rounded-xl bg-[cyan] md:aspect-square">
            <Image src={SpeakerImage} fill alt="speaker-image" className="object-cover" />
          </div>
          <div className="pt-8 md:pr-7.5">
            <div>
              <div className="text-s3 font-bold text-[#F7F1E3]">Rony Pieper</div>
              <div className="mt-0.5 text-b2 font-medium text-[#F7F1E385]">Pastor - Hannah Lou Pastor</div>
            </div>
            <p className="mt-6 text-b2 text-[#F7F1E3B8]">
              Pastor Eddie D. Alford SR; is a native of Georgia. He accepted Christ around the tender age of twelve
              years old. He is a humble, and gifted servant of God.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export { SpeakerSection };
