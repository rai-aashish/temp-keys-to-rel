'use client';

import React from 'react';
import { cn } from '@/lib';
import { Button } from '@/components/ui';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import SwiperType from 'swiper';

interface ISliderContext {
  swiper: SwiperType | null;
}

const SliderContext = React.createContext<ISliderContext>({
  swiper: null,
});

const SliderContextProvider: React.FC<ISliderContext & { children: React.ReactNode }> = ({ swiper, children }) => {
  return <SliderContext.Provider value={{ swiper }}>{children}</SliderContext.Provider>;
};

const useSliderContext = () => {
  const context = React.useContext(SliderContext);

  if (!context) {
    throw new Error('useSliderContext must be used within a SliderContextProvider');
  }

  return context;
};

interface ISliderNavProps {
  className?: string;
  type: 'prev' | 'next';
}

function SliderNav(props: ISliderNavProps) {
  const isPrev = props.type === 'prev';
  const { swiper } = useSliderContext();

  const Icon = isPrev ? ArrowLeft : ArrowRight;
  const handleNav = () => {
    if (isPrev) {
      swiper?.slidePrev();
    } else {
      swiper?.slideNext();
    }
  };

  return (
    <Button
      variant="unstyled"
      size="none"
      onClick={handleNav}
      className={cn(['bg-glassmorphic border border-[#FFFFFF0E]', 'size-14 rounded-full p-0', props?.className])}
    >
      <Icon className="size-6" />
    </Button>
  );
}

interface ISliderThumbsProps {
  className?: string;
  thumbClassName?: string;
}

function SliderThumbs(props?: ISliderThumbsProps) {
  const { swiper } = useSliderContext();

  const activeIndex = swiper?.realIndex;
  const totalSlides = swiper ? swiper?.slides?.length : 0;

  return (
    <div className={cn(['inline-flex items-center gap-3 *:shrink-0', props?.className])}>
      {[...Array(totalSlides)].map((_, index) => (
        <button
          onClick={() => {
            swiper?.slideTo(index);
          }}
          type="button"
          key={index}
          className={cn([
            'border-1 size-2 rounded-full border-[#FFFFFF33]',
            activeIndex === index ? 'border-[#FFFFFF] bg-[#FFFFFF]' : 'bg-[red]',
            props?.thumbClassName,
          ])}
        />
      ))}
      <button type="button" className={cn(['size-2 rounded-full', props?.thumbClassName])} />
    </div>
  );
}

export { useSliderContext, SliderThumbs, SliderContextProvider, SliderNav };
