import { FormWrapper } from '@/app/[slug]/register/_components/form-wrapper';
import { Button, FormFieldGroup, Input, RadioGroupField, SelectField } from '@/components/ui';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const ABOUT_US_OPTIONS = ['Flyer', 'Social media', 'Friend', 'Billboard', 'Other'];

function ReservationForm() {
  return (
    <FormWrapper>
      <form className="flex flex-col gap-16">
        <FormFieldGroup
          number="1"
          title="Complete your Information"
          description="Please provide your detail information for the registration."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <Input fancyHover label="First Name" placeholder="Jane" required />
            <Input fancyHover label="Last Name" placeholder="Frost" required />
            <Input fancyHover className="col-span-full" label="Email" placeholder="Janefrost@gmail.com" required />
            <Input fancyHover className="col-span-full" label="Phone Number" placeholder="+1 - XXXXXXXXXX" required />
          </div>
        </FormFieldGroup>

        <FormFieldGroup
          number="2"
          title="Attendance Details"
          description="Please fill the necessary filled to secure your spot."
        >
          <div className="grid grid-cols-1 gap-4">
            <SelectField
              optionsTextCenter
              fancyHover
              required
              label="How many adults will be attending?"
              options={[...Array(10)].map((_, index) => `${index + 1}`)}
            />

            <SelectField
              optionsTextCenter
              fancyHover
              value="0"
              label="If you’re bringing children with you, Please tell us How many children will you be bringing."
              options={[...Array(10)].map((_, index) => `${index}`)}
            />

            <RadioGroupField label="How did you hear about us?" options={ABOUT_US_OPTIONS} />

            <div>
              <Button type="submit" rightIcon={ArrowUpRight} iconVariant="dark">
                Reserve Your Seat
              </Button>
            </div>

            <p className="text-b1">
              By clicking "Reserve Your Seat", you agree to our{' '}
              <Link href={'#'} className="text-[#357BE3] underline underline-offset-4">
                Event Terms and Conditions.
              </Link>
            </p>
          </div>
        </FormFieldGroup>
      </form>
    </FormWrapper>
  );
}

export { ReservationForm };
