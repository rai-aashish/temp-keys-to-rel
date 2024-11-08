import EventLocationLabel from '@/components/common/event-location-label';
import { Button, ButtonLink } from '@/components/ui';
import { cn } from '@/lib';
import { ChurchEvent, EventLocationType } from '@/types';
import { ArrowUpRight, Calendar, Clock, MapPin } from 'lucide-react';
import React from 'react';

interface IEventLocationResultProps {
  className?: string;
  event: Partial<ChurchEvent>;
  as?: React.ElementType;
}

const EventLocationResult = ({ className, as = 'div', event }: IEventLocationResultProps) => {
  const Tag = as;

  return (
    <Tag className={cn(['border-t border-stroke px-4 py-5', className])}>
      <div className="text-b1-b">{event?.title || '(Event Title)'}</div>

      <div>{event?.location_type}</div>

      <ul className="mt-4 flex flex-col gap-2 text-c1 text-[#F7F1E3B8]">
        <li className="flex items-center gap-1">
          <Calendar className="mr-2 size-4" />
          Sept 04-05
        </li>
        <li className="flex items-center gap-1">
          <MapPin className="mr-2 size-4" />
          100 Smith Street Madison, WI 30665
        </li>
        <li className="flex items-center gap-1">
          <Clock className="mr-2 size-4" />
          <span>8AM - 3PM</span>
          {event.location_type && (
            <EventLocationLabel
              type={event.location_type}
              classNames={{
                root: 'ml-1',
              }}
            />
          )}
        </li>
      </ul>

      <div className="mt-4 flex items-center gap-4">
        <Button variant="outlined" size="sm">
          Learn More
        </Button>
        <ButtonLink href="#" variant="outlined-secondary" iconVariant="primary" size="sm" rightIcon={ArrowUpRight}>
          Register Now
        </ButtonLink>
      </div>
    </Tag>
  );
};

export { EventLocationResult };
