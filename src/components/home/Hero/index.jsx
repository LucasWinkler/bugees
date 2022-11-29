import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import { Container } from 'components/common/Container';
import HeroImage from './HeroImage';
import HeroTitle from './HeroTitle';

import heroImage from '../../../../public/images/hero-placeholder.png';
import OutlineButton from '../OutlineButton';

const Hero = () => {
  return (
    <section id='hero' className='pb-24 pt-10 sm:pt-16 lg:pt-16 lg:pb-16'>
      <Container>
        <div className='relative text-center lg:flex lg:items-center lg:gap-12 lg:text-left'>
          <div className='lg:w-1/2'>
            <HeroTitle>
              Lets track down
              <br />
              those <span className='text-green-500'>pesky bugs.</span>
            </HeroTitle>
            <OutlineButton
              className='hover:border-green-300 hover:text-green-300'
              href='/dashboard'>
              Get work done faster
              <ArrowLongRightIcon className='h-8 w-8' />
            </OutlineButton>
          </div>
          <div className='mt-12 lg:relative lg:mt-0 lg:w-1/2 lg:translate-x-[7rem]'>
            <HeroImage src={heroImage} alt='Placeholder hero image' />
            <div className='absolute z-[1] hidden h-full w-full -translate-y-full bg-gradient-to-l from-dark-blueish-gray to-transparent lg:block' />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
