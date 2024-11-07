import { StaticImageData } from 'next/image';

import Person1 from '@/assets/testimonial/t-1.webp';
import Person2 from '@/assets/testimonial/t-2.webp';
import Person3 from '@/assets/testimonial/t-3.webp';

type TTestimonial = {
  image?: string | StaticImageData;

  fullName: string;
  statement: string;
};

const TESTIMONIALS: Array<TTestimonial> = [
  {
    image: Person1,

    fullName: 'Jim',
    statement:
      'I was desperately searching for peace. I knew the answers lay in the Bible, but I never read it. When I went to this seminar, it felt like an anvil was lifted off my back. It made a big difference in my heart.',
  },
  {
    image: Person2,

    fullName: 'Cecille Williams',
    statement:
      'A very professional presentation. This seminar took ancient biblical truth and made it relevant for my life today. Jesus is more real to me as a result.',
  },
  {
    image: Person3,

    fullName: 'Cecille Williams',
    statement:
      'This seminar answered all my questions, plus more questions I didn’t even know I had. I have hope now, because I know the end of the story.',
  },
  {
    image: Person1,

    fullName: 'Jim',
    statement:
      'I was desperately searching for peace. I knew the answers lay in the Bible, but I never read it. When I went to this seminar, it felt like an anvil was lifted off my back. It made a big difference in my heart.',
  },
  {
    image: Person2,

    fullName: 'Cecille Williams',
    statement:
      'A very professional presentation. This seminar took ancient biblical truth and made it relevant for my life today. Jesus is more real to me as a result.',
  },
  {
    image: Person3,

    fullName: 'Cecille Williams',
    statement:
      'This seminar answered all my questions, plus more questions I didn’t even know I had. I have hope now, because I know the end of the story.',
  },
];

export type { TTestimonial };
export { TESTIMONIALS };
