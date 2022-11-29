import clsx from 'clsx';
import Image from 'next/image';
import PropTypes from 'prop-types';

const HeroImage = ({ src, alt, className }) => {
  return (
    <Image
      className={clsx('mx-auto lg:mx-0', className)}
      src={src}
      alt={alt}
      priority
    />
  );
};

HeroImage.propTypes = {
  src: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default HeroImage;
