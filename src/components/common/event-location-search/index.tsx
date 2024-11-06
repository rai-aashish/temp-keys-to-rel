import { cn } from '@/lib';
import React from 'react';

import { EventSearch } from './event-search';
import { EventLocationResult } from '@/app/_components/event-location-search-section/event-location-result';
import { ChurchEvent, EventLocationType } from '@/types';
import { ScrollArea } from '@/components/ui';

const MOCK_EVENTS: Array<Partial<ChurchEvent>> = [
  {
    id: '1',
    title: 'Madison, Wisconsin',
    location_type: EventLocationType.OnlineOnly,
  },
  {
    id: '2',
    title: 'Detroit, Michigan',
    location_type: EventLocationType.OnlineOnly,
  },
  {
    id: '3',
    title: 'Lansing, Michigan',
    location_type: EventLocationType.OnlineOnly,
  },
];

interface IEventLocationSearchProps {
  className?: string;
}

const EventLocationSearch = (props: IEventLocationSearchProps) => {
  return (
    <div
      className={cn([
        'mx-auto max-w-[1500px] rounded-2xl border-2 border-[#FFFFFF24] bg-[#181818A6] px-4 py-5 backdrop-blur-bg md:px-6 lg:py-8',
        props?.className,
      ])}
    >
      <h2 className="text-center text-sh4 font-bold md:text-start md:text-sh2">Find a Location Near you!</h2>
      <EventSearch className="mb-6 mt-3 lg:mb-11 lg:mt-5" />

      <div className={cn(['flex gap-x-4', 'flex-col-reverse gap-y-4 md:gap-y-6 lg:flex-row'])}>
        <div className="basis-[390px] rounded-xl border-[1.2px] border-stroke bg-[#6361610F] px-1 py-3">
          <h6 className="mb-7 px-2 text-s2 text-[#F7F1E3]">Event Location</h6>

          <ScrollArea className="flex max-h-[33.1875rem] flex-col gap-1 px-2">
            {MOCK_EVENTS.map((event, index) => (
              <EventLocationResult as="div" key={index} event={event} />
            ))}
          </ScrollArea>
        </div>

        {/* map */}
        <div
          className={cn([
            'grid grow place-items-center rounded-xl border-[1.2px] border-stroke bg-white/10',
            'aspect-[320/280] md:aspect-[654/420] lg:aspect-auto',
          ])}
        >
          <span className="text-h3 opacity-30">(MAP HERE)</span>
        </div>
      </div>
    </div>
  );
};

export { EventLocationSearch };
