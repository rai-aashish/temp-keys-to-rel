type FooterLink = {
  label: string;
  href: string;
};

type FooterLinkGroup = {
  group: string;
  links: FooterLink[];
};

const FOOTER_LINKS: FooterLinkGroup[] = [
  {
    group: 'Quick Links',
    links: [
      {
        label: 'Events',
        href: '#',
      },

      {
        label: 'Contact',
        href: '#',
      },
    ],
  },
  {
    group: 'Social',
    links: [
      {
        label: 'Facebook',
        href: '#',
      },

      {
        label: 'instagram',
        href: '#',
      },
    ],
  },
];

const FOOTER_MISCEILLANEOUS_LINKS: FooterLink[] = [
  {
    label: 'Terms',
    href: '#',
  },
  {
    label: 'Privacy',
    href: '#',
  },
  {
    label: 'Security',
    href: '#',
  },
];

export { FOOTER_LINKS, FOOTER_MISCEILLANEOUS_LINKS };
