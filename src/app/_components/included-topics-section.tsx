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

const bulletWrapperId = 'pagination-bullets--included-topics';

function IncludedTopicsSection({ className, ...props }: React.ComponentPropsWithRef<'section'>) {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const SLIDES = [...INCLUDED_TOPICS_SLIDES, ...INCLUDED_TOPICS_SLIDES, ...INCLUDED_TOPICS_SLIDES];

  return (
    <section className={cn(['relative mb-16 mt-16 overflow-hidden', className])} {...props}>
      <Container>
        <h2 className="mb-12 text-center text-sh4 font-bold uppercase text-shiny drop-shadow-shiny md:text-sh3 lg:text-sh2">
          Topics Include these and more!
        </h2>
      </Container>

      <Container className="-mx-sm-screen-gutter md:-mx-md-screen-gutter lg:mx-auto">
        <SliderContextProvider swiper={swiper}>
          <div className="relative">
            <Swiper
              loop
              pagination={{
                el: `#${bulletWrapperId}`,
                type: 'bullets',
                clickable: true,
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'active',

                renderBullet: function (index: number, className: string) {
                  return `<span class="${cn([className])}"></span>`;
                },
              }}
              centeredSlides
              centeredSlidesBounds
              onInit={(swiper) => {
                setSwiper(swiper);
              }}
              modules={[Pagination, Navigation]}
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
                  {({ isActive }) => {
                    return (
                      <div
                        data-active={isActive}
                        className="bg-glassmorphic h-full rounded-2xl border-[0.1875rem] border-[#FFFFFF0E] p-2 data-[active=false]:opacity-30 md:p-3 lg:data-[active=false]:opacity-100"
                      >
                        <div className="relative aspect-[256/185] overflow-hidden rounded-t-xl md:aspect-[305/225] lg:aspect-[342/295]">
                          <Image src={card.image.src} alt={card.image.alt} fill className="object-cover" />
                        </div>
                        <div className="pb-3 pt-6 lg:px-2">
                          <div className="line-clamp-1 text-ellipsis text-b1-b text-[#F7F1E3] md:text-s3 lg:text-s2">
                            {card.title}
                          </div>
                          <p className="mt-4 text-b2 text-[#F7F1E3B8]">{card.description}</p>
                        </div>
                      </div>
                    );
                  }}
                </SwiperSlide>
              ))}
            </Swiper>

            <SliderNav
              type="prev"
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 md:left-6 lg:left-0 lg:-translate-x-1/2"
            />

            <SliderNav
              type="next"
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 md:right-6 lg:right-0 lg:translate-x-1/2"
            />
          </div>
          {/* pagination */}
          <div id={bulletWrapperId} className="mt-5.5 flex h-10 w-full justify-center gap-2 md:mt-13"></div>
        </SliderContextProvider>
      </Container>
    </section>
  );
}

export { IncludedTopicsSection };
