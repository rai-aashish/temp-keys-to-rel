type Slide = {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
};

const INCLUDED_TOPICS_SLIDES: Slide[] = [
  {
    image: {
      src: 'https://images.unsplash.com/photo-1523878291631-87283277f717?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amVzdXN8ZW58MHx8MHx8fDA%3D',
      alt: '',
    },
    title: "REVELATION'S BATTLE FOR THRONE",
    description:
      "Why do bad things happen to good people? Why is there so much suffering in our world? Why doesn't a good God stop the suffering, sorrow and pain in the world today? Join us as we look at a battle going on behind the scenes that answers these questions and more.",
  },
  {
    image: {
      src: 'https://plus.unsplash.com/premium_photo-1680266015910-9b454373e340?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amVzdXN8ZW58MHx8MHx8fDA%3D',
      alt: '',
    },
    title: "REVELATION'S GLORY CLIMAX",
    description:
      'What is the grand climax of all prophecy? While there are many symbols and predictions in Bible prophecy, what is the most important for us to remember? How can we find peace and hope today? You won’t want to miss this topic that gives us hope and assurance in Jesus for what is coming.',
  },
  {
    image: {
      src: 'https://plus.unsplash.com/premium_photo-1681803531285-75db948035d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RhdHVlJTIwb2YlMjBsaWJlcnR5fGVufDB8fDB8fHww',
      alt: '',
    },
    title: 'AMERICA IN BIBLE PROPHECY',
    description:
      'What is the last major player in Bible prophecy? Can the United States actually be found in Bible prophecy? What does the Bible predict will happen to our freedoms and liberties? You will want to know that prophecy teaches about this important subject for our time.',
  },
];

export { INCLUDED_TOPICS_SLIDES };
