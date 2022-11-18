import Link from 'next/link';
import Image from 'next/image';

import heroImage from '../../../../public/images/hero-placeholder.png';

export default function Hero() {
  return (
    <section id='hero' className='container'>
      <div className='pt-10 py-24 sm:pt-16 sm:px-6  text-center lg:flex lg:items-center lg:px-0 lg:text-left lg:pt-16 lg:pb-16 lg:gap-12 relative'>
        <div className='lg:w-1/2'>
          <h1 className='text-4xl font-extrabold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl'>
            <span className='block text-white'>Lets track down</span>
            <span className='block text-white'>
              those <span className='text-green-500'>pesky bugs.</span>
            </span>
          </h1>
          <Link
            className='text-white border-2 border-white py-3 px-6 inline-flex justify-between items-center gap-5 font-medium text-lg mt-9 group  hover:text-green-300 hover:border-green-300 transition-all duration-300 rounded'
            href='/dashboard'>
            Get work done faster
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-8 h-8'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
              />
            </svg>
          </Link>
        </div>
        <div className='lg:w-1/2 mt-12 lg:mt-0 lg:relative lg:translate-x-[7rem]'>
          <Image
            className='mx-auto lg:mx-0 lg:-z-[1]'
            src={heroImage}
            alt='placeholder dashboard hero'
            priority
          />
          <div className='hidden lg:block absolute z-[1] bg-gradient-to-l from-dark-blueish-gray to-transparent w-full h-full -translate-y-full' />
        </div>
      </div>
    </section>
  );
}
