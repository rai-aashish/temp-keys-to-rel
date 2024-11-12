import React from 'react';
import { ArrowUpRight } from 'lucide-react';

import { ButtonLink } from '@/components/ui';
import Container from '@/components/common/container';

function NotFound() {
  return (
    <div className="h-screen w-screen">
      <Container className="grid h-full overflow-y-auto">
        <div className="m-auto text-center">
          <div className="text-[3rem] font-bold text-shiny md:text-[5rem] lg:text-[18rem] lg:leading-[1]">404</div>
          <p className="mt-1 text-h5 font-medium uppercase text-shiny md:text-sh3 lg:text-sh2">Page not found!!</p>

          <ButtonLink href="/" rightIcon={ArrowUpRight} className="mt-8 md:mt-10 lg:mt-12">
            Go Back to Home Page
          </ButtonLink>
        </div>
      </Container>
    </div>
  );
}

export default NotFound;
