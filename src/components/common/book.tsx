import { cn } from '@/lib';
import Image, { StaticImageData } from 'next/image';

interface IBookProps {
  className?: string;
  src: string | StaticImageData;
  alt: string;
}

const Book: React.FC<IBookProps> = ({ className, src, alt }) => {
  return (
    <div className={cn(['rounded-sm border border-white', 'relative isolate shadow-highlight', className])}>
      <Image src={src} fill quality={100} alt={alt} className="rounded-sm object-cover" />

      <span className="absolute inset-0 z-[-1] inline-block translate-x-[12%] rotate-[8deg] scale-95 rounded-[inherit] bg-[#E8EBEF] shadow-highlight"></span>
    </div>
  );
};

export default Book;
