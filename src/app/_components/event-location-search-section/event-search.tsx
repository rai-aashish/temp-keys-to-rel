'use client';

import { cn } from '@/lib';
import { Button, Input } from '@/components/ui';
import { Search, SlidersHorizontal } from 'lucide-react';

import React from 'react';
interface IEventSearchProps {
  className?: string;
}

function EventSearch({ className }: IEventSearchProps) {
  return (
    <div className={cn(['', className])}>
      <Input
        leftSection={<Search className="mx-1 size-6 opacity-60 group-has-[input:focus]:opacity-100" />}
        placeholder="Search by your location, church name, city, street address, postal code..."
        classNames={{
          wrapper:
            'p-2 md:p-3  group bg-[#F7F1E30D] border-[#F7F1E31F] has-[input:focus]:border-white hover:border-white/50',
          input: 'peer placeholder:text-[#F7F1E39E]',
        }}
        rightSection={
          <Button
            variant="unstyled"
            size="none"
            className="size-8 rounded-full bg-[#1E1E1EB8] text-[#F7F1E3] md:size-11"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <SlidersHorizontal className="size-4 md:size-5" />
          </Button>
        }
      />
    </div>
  );
}

export { EventSearch };
