import { TTestimonial } from '@/config/testimonial';
import { cn } from '@/lib';
import Image from 'next/image';
import React from 'react';
import UserPlaceholderImage from '@/assets/logo.webp';

interface ITestimonialSlideProps {
  testimonial: TTestimonial;
  className?: string;
  isActive: boolean;
}

function TestimonialSlide({ testimonial, isActive, className }: ITestimonialSlideProps) {
  const imageSrc = testimonial.image || UserPlaceholderImage;
  return (
    <div
      data-active={isActive}
      className={cn([
        'data-[active=false]:blur-sm',
        'bg-glassmorphic w-full rounded-[1.125rem] border-[0.1875rem] border-[#FFFFFF0E] p-2 md:p-3',
        className,
      ])}
    >
      <div className="relative aspect-[418/320] overflow-hidden rounded-[0.5rem] bg-[black]">
        <Image src={imageSrc} fill alt={testimonial.fullName} className="object-cover" />
      </div>
      <div className="mt-4 flex flex-col items-center gap-2 px-3 pb-3 md:mt-6">
        <p className="mb-4 text-b2 text-[#F7F1E3B8] md:mb-3 md:text-b1">“{testimonial.statement}”</p>
        <span className="text-s3 font-bold text-[#F7F1E3B8] md:text-s1">{testimonial.fullName}</span>
      </div>
    </div>
  );
}

export { TestimonialSlide };
