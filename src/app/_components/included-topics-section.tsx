'use client';

import React, { useState } from 'react';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { cn } from '@/lib';
import Image from 'next/image';
import SwiperType from 'swiper';
import Container from '@/components/common/container';
import { INCLUDED_TOPICS_SLIDES } from '@/config/included-topics';
import { SliderContextProvider, SliderNav } from '@/components/common/slider';

function IncludedTopicsSection({ className, ...props }: React.ComponentPropsWithRef<'section'>) {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [boundary, setBoundary] = useState<'start' | 'end' | 'intermediate'>('start');

  const SLIDES = [...INCLUDED_TOPICS_SLIDES, ...INCLUDED_TOPICS_SLIDES, ...INCLUDED_TOPICS_SLIDES];

  return (
    <section className={cn(['relative mb-16 mt-16 overflow-hidden', className])} {...props}>
      <Container>
        <h2 className="mb-12 text-center text-sh4 font-bold uppercase text-shiny drop-shadow-shiny md:text-sh3 lg:text-sh2">
          Topics Include these and more!
        </h2>

        <SliderContextProvider swiper={swiper}>
          <div className="relative">
            <Swiper
              centeredSlidesBounds
              centeredSlides
              onInit={(swiper) => {
                setSwiper(swiper);
              }}
              modules={[Pagination, Navigation]}
              onSlideChange={(s) => {
                setBoundary(s.isBeginning ? 'start' : s.isEnd ? 'end' : 'intermediate');
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1.8,
                  spaceBetween: 32,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 32,
                },
              }}
            >
              {SLIDES.map((card, index) => (
                <SwiperSlide key={index}>
                  {() => {
                    return (
                      <div className="h-full rounded-2xl border-[0.1875rem] border-[#FFFFFF0E] bg-[linear-gradient(157.41deg,rgba(255,255,255,0.14)_-13.64%,rgba(255,255,255,0)_57.52%,rgba(255,255,255,0.14)_128.67%)] p-4 backdrop-blur-[2.125rem]">
                        <div className="relative aspect-[256/185] overflow-hidden rounded-t-xl md:aspect-[305/225] lg:aspect-[342/295]">
                          <Image src={card.image.src} alt={card.image.alt} fill className="object-cover" />
                        </div>
                        <div className="px-2 pb-3 pt-6">
                          <div className="line-clamp-1 text-ellipsis text-s2 text-[#F7F1E3]">{card.title}</div>
                          <p className="mt-4 text-b2 text-[#F7F1E3B8]">{card.description}</p>
                        </div>
                      </div>
                    );
                  }}
                </SwiperSlide>
              ))}
            </Swiper>

            {/* navigations */}
            {boundary !== 'start' && (
              <SliderNav
                type="prev"
                className="absolute left-6 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 md:left-4 lg:left-0"
              />
            )}
            {boundary !== 'end' && (
              <SliderNav
                type="next"
                className="absolute right-6 top-1/2 z-10 -translate-y-1/2 translate-x-1/2 md:right-4 lg:right-0"
              />
            )}
          </div>
          {/* thumb wrapper */}
          <div className="h-14"></div>
        </SliderContextProvider>
      </Container>
    </section>
  );
}

export { IncludedTopicsSection };
