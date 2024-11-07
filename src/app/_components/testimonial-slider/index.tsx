'use client';

import 'swiper/css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

import { cn } from '@/lib';
import SwiperType from 'swiper';
import { TESTIMONIALS } from '@/config/testimonial';
import Container from '@/components/common/container';
import { TestimonialSlide } from './testimonial-slide';
import { SliderContextProvider, SliderNav } from '@/components/common/slider';

const bulletWrapperId = 'pagination-bullets';

export default function TestimonialsSlider() {
  const [swiper, setSwiper] = React.useState<SwiperType | null>(null);
  return (
    <Container className={cn(['overflow-hidden', 'py-12 lg:py-15'])}>
      <h2 className="mx-auto max-w-[11.25rem] text-center text-sh3 font-bold uppercase text-shiny md:max-w-full md:text-sh2">
        What People are Saying
      </h2>
      <Container fluid className="relative mt-6 px-6 md:mt-12 md:max-w-[82.5rem] md:px-4.5 xl:max-w-[90rem]">
        <SliderContextProvider swiper={swiper}>
          <Swiper
            className="mx-auto lg:max-w-[69.1875rem] xl:max-w-[72rem]"
            onInit={setSwiper}
            modules={[Navigation, Pagination, EffectCoverflow]}
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
            effect="coverflow"
            centeredSlides
            loop
            breakpoints={{
              0: {
                slidesPerView: 1,
                coverflowEffect: {
                  rotate: 0,
                  depth: 400,
                  modifier: 1,
                  slideShadows: false,
                },
              },
              768: {
                slidesPerView: 2,
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 600,
                  modifier: 1,
                  slideShadows: false,
                },
              },
              1024: {
                slidesPerView: 2,
                coverflowEffect: {
                  rotate: 0,
                  depth: 600,
                  modifier: 1,
                  slideShadows: false,
                },
              },
            }}
          >
            {TESTIMONIALS.map((testimonial, index) => (
              <SwiperSlide key={testimonial.fullName + index}>
                {({ isActive }) => <TestimonialSlide isActive={isActive} testimonial={testimonial} />}
              </SwiperSlide>
            ))}
          </Swiper>

          <SliderNav type="prev" className="absolute left-0 top-[30%] z-10 hidden md:inline-grid lg:translate-x-0" />
          <SliderNav type="next" className="absolute right-0 top-[30%] z-10 hidden md:inline-grid lg:translate-x-0" />

          {/* pagination */}
          <div id={bulletWrapperId} className="mt-5.5 flex h-10 w-full justify-center gap-2 md:mt-13"></div>
        </SliderContextProvider>
      </Container>
    </Container>
  );
}
