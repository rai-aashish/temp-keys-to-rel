import React from 'react';
import { FreeAdmissionPromo, widthClassName } from '@/app/_components/free-admission-promo';
import { ButtonLink } from '@/components/ui';
import { ArrowUpRight } from 'lucide-react';
import Container from '@/components/common/container';
import { cn } from '@/lib';

const FreeAdmissionSection = () => {
  return (
    <section className={cn(['bg-[#FCFCFC05] py-8 md:py-12 lg:pb-12 lg:pt-[3.375rem]'])}>
      <Container>
        <FreeAdmissionPromo className="lg:pb-0" />

        <div className={cn(['mt-6 flex items-center justify-end md:-mt-6', widthClassName])}>
          <ButtonLink href="#" variant="secondary" rightIcon={ArrowUpRight} iconVariant="primary">
            Click Here To Reserve Your Seat
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
};

export { FreeAdmissionSection };
