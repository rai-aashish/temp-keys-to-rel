import React from 'react';
import { Search } from 'lucide-react';

import { cn } from '@/lib';
import { Button, Input } from '@/components/ui';

interface IGlobalSearchProps extends React.ComponentPropsWithRef<'div'> {}

const GlobalSearch = ({ className, ...props }: IGlobalSearchProps) => {
  return (
    <div className={cn([], className)} {...props}>
      <Input
        placeholder="Search locations..."
        className="hidden lg:block"
        classNames={{
          wrapper:
            'pl-3 py-[0.8438rem] rounded-[200px] pr-0 backdrop-blur-[2.125rem] has-[input:focus]:bg-foreground hover:bg-foreground/60',
          input: 'placeholder:text-[#1E1E1E9E]',
        }}
        leftSection={<Search className="size-5" />}
      />

      <Button
        unStyled
        className="inline-grid size-12 place-items-center rounded-full border border-[#1E1E1E1F] backdrop-blur-[2.125rem] lg:hidden"
      >
        <Search className="size-5" />
      </Button>
    </div>
  );
};

export default GlobalSearch;
