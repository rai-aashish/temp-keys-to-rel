import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

import { cn } from '@/lib';
import { ButtonLink } from '@/components/ui';
import Container from '@/components/common/container';
import BookThumbnail from '@/assets/book-thumbnail.webp';

interface IBookRevelationSectionProps {
  className?: string;
}
const BookRevelationSection: React.FC<IBookRevelationSectionProps> = ({ className }) => {
  return (
    <Container className={cn(['py-12 lg:py-15', className])}>
      <div className="flex flex-col md:flex-row md:items-start md:gap-6 md:px-4.5 lg:gap-12 lg:p-4">
        <div className="relative aspect-[378/367] w-full shrink-0 md:w-[29.5%]">
          <Image
            fill
            src={BookThumbnail}
            alt="book-thumbnail"
            className="shrink-0 overflow-hidden rounded-[0.5rem] object-cover"
          />
        </div>

        <div className="grow pt-5.5">
          <h2 className="text-center text-sh3 text-shiny drop-shadow-shiny md:text-left lg:text-sh2">
            The Book of Revelation
          </h2>

          <p className="mb-8 mt-4 text-b1 lg:mb-10 lg:mt-6">
            In this dynamic seminar, you will discover more about Bible prophecy and the book of Revelation that you
            ever imagined. The book of Revelation is filled with mysterious signs, strange beasts, and confusing
            numbers, but what does it all mean? Are there keys that unlock the mysterious of Revelation for us today?
            With these keys can we make sense of the book of Revelation? Where is our world headed? Is there hope in
            these end time prophecies? Can we find peace for our lives today from the pages of this book? Discover the
            truth and hope that can be found once you understand this often misunderstood book of the Bible. Don’t miss
            this exciting opportunity–register for this free seminar today!
          </p>

          <ButtonLink
            href="#"
            size="lg"
            className="w-full justify-between py-[1.0938rem] text-bu-s md:w-[unset]"
            rightIcon={ArrowUpRight}
            leftIcon={() => <span></span>}
            classNames={{
              leftIconWrapper: 'w-px opacity-0 md:hidden',
            }}
          >
            Reserve Your Seat
          </ButtonLink>
        </div>
      </div>
    </Container>
  );
};

export { BookRevelationSection };
