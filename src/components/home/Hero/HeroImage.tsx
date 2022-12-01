import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';

interface HeroImageProps {
  src: string | StaticImageData;
  alt: string;
  className?: string;
}

const HeroImage = ({ src, alt, className }: HeroImageProps) => {
  return (
    <Image
      className={clsx('mx-auto lg:mx-0', className)}
      src={src}
      alt={alt}
      priority
    />
  );
};

export default HeroImage;
