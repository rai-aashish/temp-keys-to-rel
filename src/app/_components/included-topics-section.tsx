'use client';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import { cn } from '@/lib';
import Container from '@/components/common/container';
import { INCLUDED_TOPICS_SLIDES } from '@/config/included-topics';
import Image from 'next/image';
import SwiperType from 'swiper';
import { SliderContextProvider, SliderNav, SliderThumbs } from '@/components/common/slider';

function IncludedTopicsSection({ className, ...props }: React.ComponentPropsWithRef<'section'>) {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [boundary, setBoundary] = useState<'start' | 'end' | 'intermediate'>('start');

  const SLIDES = [...INCLUDED_TOPICS_SLIDES, ...INCLUDED_TOPICS_SLIDES, ...INCLUDED_TOPICS_SLIDES];

  return (
    <section className={cn(['relative mb-2 mt-16 h-screen', className])} {...props}>
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
                  slidesPerView: 1.5,
                  spaceBetween: 32,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 32,
                },
              }}
            >
              {swiper &&
                SLIDES.map((card, index) => (
                  <SwiperSlide key={index}>
                    {() => {
                      return (
                        <div className="h-full rounded-2xl border-[0.1875rem] border-[#FFFFFF0E] bg-[linear-gradient(157.41deg,rgba(255,255,255,0.14)_-13.64%,rgba(255,255,255,0)_57.52%,rgba(255,255,255,0.14)_128.67%)] p-4 backdrop-blur-[2.125rem]">
                          <div className="relative aspect-[342/295] overflow-hidden rounded-t-xl">
                            <Image
                              src={card.image.src}
                              alt={card.image.alt}
                              fill
                              quality={100}
                              className="object-cover"
                            />
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
        </SliderContextProvider>
      </Container>
    </section>
  );
}

export { IncludedTopicsSection };
