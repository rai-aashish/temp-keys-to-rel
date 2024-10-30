import React from 'react';

import { cn } from '@/lib';

function Footer({ ref, ...className }: React.ComponentPropsWithRef<'footer'>) {
  return (
    <footer ref={ref} className={cn(['', '', className as string])}>
      App FOoter
    </footer>
  );
}

export { Footer };
