import React from 'react';
import { ArrowUpRight, MapPin, Search } from 'lucide-react';

import Container from '@/components/common/container';
import { Badge, ButtonLink, Label, Typography } from '@/components/ui';

const EventRegisterBlock = () => {
  const FORMATTED_EVENT_START_DATE = 'September 14';
  const EVENT_LOCATION = 'Madison, Wisconsin';
  return (
    <div className="w-full py-4 bg-primary-gradient md:absolute md:bottom-0 md:left-0">
      <Container className="flex flex-col items-center justify-between gap-4 text-[#1E1E1E] md:flex-row">
        <div className="flex flex-col gap-2 md:gap-3 lg:flex-row lg:items-center">
          <Typography.Heading as="h3" className="text-center text-h4 uppercase md:text-left lg:text-h3">
            Starting on {FORMATTED_EVENT_START_DATE}
          </Typography.Heading>

          <div className="inline-flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <div className="inline-flex items-center gap-2 text-b1 font-normal lg:text-s2">
              <MapPin strokeWidth="1.5" className="size-6 shrink-0" />
              {EVENT_LOCATION}
            </div>
            <Badge variant="outlined" size="sm" className="uppercase">
              Free Admission
            </Badge>
          </div>
        </div>

        <ButtonLink
          href="#search_location"
          variant="secondary"
          iconVariant="primary"
          rightIcon={ArrowUpRight}
          leftIcon={() => <span className="invisible md:hidden"></span>}
          classNames={{
            leftIconWrapper: 'invisible md:hidden w-px',
          }}
          className="justify-between self-stretch md:grow-0 md:justify-center md:self-end md:data-[has-left-icon=true]:pl-6 lg:self-center"
        >
          Register Now
        </ButtonLink>
      </Container>
    </div>
  );
};

export { EventRegisterBlock };
