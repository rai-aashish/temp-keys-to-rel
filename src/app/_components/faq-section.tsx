import React from 'react';
import { ArrowUpRight } from 'lucide-react';

import { ButtonLink } from '@/components/ui';
import Container from '@/components/common/container';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FAQ } from '@/config/faq';

const FAQSection = () => {
  return (
    <section className="border-t border-[#FFFFFF1A] py-6 md:py-20 lg:pb-22 lg:pt-20">
      <Container gridLayout className="gap-x-13 gap-y-12">
        <div className="col-span-full lg:col-span-4">
          <h2 className="text-sh3 text-shiny drop-shadow-shiny md:text-sh1">
            Frequently
            <br /> Asked Questions
          </h2>

          <p className="mb-6 mt-2 text-b2">If you have any more questions or queries, Please feel free to reach out.</p>

          <ButtonLink
            href="#"
            rightIcon={ArrowUpRight}
            variant="outlined-secondary"
            size="md"
            leftIcon={() => <span />}
            className="w-full justify-between text-bu-s data-[has-left-icon=true]:pl-6 md:w-[unset]"
            classNames={{
              leftIconWrapper: 'w-0.5 invisible md:hidden',
            }}
          >
            Contact Us
          </ButtonLink>
        </div>

        <div className="col-span-full lg:col-span-8">
          <Accordion type="multiple" defaultValue={['0']} className="flex flex-col gap-y-2">
            {FAQ.map(({ question, answer }, index) => {
              return (
                <AccordionItem value={index.toString()} key={index}>
                  <AccordionTrigger>{question}</AccordionTrigger>
                  <AccordionContent>{answer}</AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </Container>
    </section>
  );
};

export { FAQSection };
