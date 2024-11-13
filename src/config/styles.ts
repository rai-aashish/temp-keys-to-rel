import { cn } from '@/lib';

const fancyHoverClassName = cn([
  'relative isolate',
  'before:opacity-0',

  'before:duration-150',
  'before:z-[-2]',
  'before:bg-[linear-gradient(91.09deg,_#FFBD28_-1.76%,_#EEFF28_60.26%,_#FF4F28_117.77%)]',
  'before:rounded-[inherit]',
  'before:abs-center before:h-[calc(100%+2px)] before:w-[calc(100%+2px)]',
  'after:abs-center',
  'after:z-[-1] after:h-full after:w-full after:rounded-[inherit] after:bg-[inherit]',

  //   active state classNames
  'hover:before:opacity-100',
  'focus:before:opacity-100',
  'has-[input:focus]:before:opacity-100',
  'data-[state=open]:before:opacity-100',

  //shadow
  'hover:shadow-[0px_0px_8px_0px_rgba(255,189,40,0.13),0px_0px_8px_1px_rgba(255,255,255,0.15)]',
]);

export { fancyHoverClassName };
