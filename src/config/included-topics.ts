import { StaticImageData } from 'next/image';

import Im1 from '@/assets/topics/1.webp';
import Im2 from '@/assets/topics/2.webp';
import Im3 from '@/assets/topics/3.webp';

type Slide = {
  image: {
    src: string | StaticImageData;
    alt: string;
  };
  title: string;
  description: string;
};

const INCLUDED_TOPICS_SLIDES: Slide[] = [
  {
    image: {
      src: Im1,
      alt: '',
    },
    title: "REVELATION'S BATTLE FOR THRONE",
    description:
      "Why do bad things happen to good people? Why is there so much suffering in our world? Why doesn't a good God stop the suffering, sorrow and pain in the world today? Join us as we look at a battle going on behind the scenes that answers these questions and more.",
  },
  {
    image: {
      src: Im2,
      alt: '',
    },
    title: "REVELATION'S GLORY CLIMAX",
    description:
      'What is the grand climax of all prophecy? While there are many symbols and predictions in Bible prophecy, what is the most important for us to remember? How can we find peace and hope today? You won’t want to miss this topic that gives us hope and assurance in Jesus for what is coming.',
  },
  {
    image: {
      src: Im3,
      alt: '',
    },
    title: 'AMERICA IN BIBLE PROPHECY',
    description:
      'What is the last major player in Bible prophecy? Can the United States actually be found in Bible prophecy? What does the Bible predict will happen to our freedoms and liberties? You will want to know that prophecy teaches about this important subject for our time.',
  },
];

export { INCLUDED_TOPICS_SLIDES };
