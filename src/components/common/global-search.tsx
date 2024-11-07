'use client';

import React from 'react';
import { Search } from 'lucide-react';

import { cn } from '@/lib';
import { Button, Input } from '@/components/ui';
import { EventLocationSearchDialog } from '@/components/common/event-location-search/event-location-search-dialog';

interface IGlobalSearchProps extends React.ComponentPropsWithRef<'div'> {}

const GlobalSearch = ({ className, ...props }: IGlobalSearchProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className={cn(['', className])} {...props}>
      <Button
        onClick={() => setOpen(true)}
        variant="unstyled"
        size="none"
        className={cn([
          'gap-2',
          'rounded-[200px] border',
          'bg-[#1E1E1E0D] hover:bg-[#9d9d9d4d]',
          'px-4 py-[0.8438rem] backdrop-blur-[2.125rem]',
          'border-[#1E1E1E1F] group-data-[scrolled=true]:border-[#f7f1e380]',
          'group-data-[scrolled=true]:bg-transparent group-data-[scrolled=true]:hover:bg-[#9d9d9d4d]',
        ])}
      >
        <Search className="size-5 group-data-[scrolled=true]:text-[#f7f1e380]" />

        <span className="hidden text-[#1E1E1E9E] group-data-[scrolled=true]:text-[#F7F1E3] lg:inline-block">
          Search locations...
        </span>
      </Button>

      <EventLocationSearchDialog open={open} onOpenChange={setOpen} />
    </div>
  );
};

export default GlobalSearch;
