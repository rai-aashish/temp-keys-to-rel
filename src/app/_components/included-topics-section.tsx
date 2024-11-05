import React from 'react';

import { cn } from '@/lib';

function IncludedTopicsSection({ className, ...props }: React.ComponentPropsWithRef<'section'>) {
  return (
    <section className={cn(['relative mb-2 mt-16 h-screen', className])} {...props}>
      <h2 className="text-shiny text-center text-sh2 drop-shadow-shiny">Topics Include these and more!</h2>
    </section>
  );
}

export { IncludedTopicsSection };
