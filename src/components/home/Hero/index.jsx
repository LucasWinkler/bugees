import Link from 'next/link';
import Image from 'next/image';

import heroImage from '../../../../public/images/hero-placeholder.png';

export default function Hero() {
  return (
    <section id='hero' className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='pt-10 py-24 sm:pt-16 sm:px-6  sm:text-center lg:flex lg:items-center lg:pl-0 lg:text-left lg:pt-0 lg:pb-14 lg:gap-11 relative'>
        <div className='w-full'>
          <h1 className='text-4xl font-extrabold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl'>
            <span className='block text-white'>Lets track down</span>
            <span className='block text-white'>
              those <span className='text-green-500'>pesky bugs.</span>
            </span>
          </h1>
          <Link
            className='text-white border-2 border-white p-3 px-6 inline-flex justify-between items-center gap-5 font-medium text-lg mt-9 group  hover:text-green-300 hover:border-green-300 transition-all duration-300'
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
        <div className='w-full'>
          <Image
            className='mx-auto pt-12 lg:pt-0 lg:absolute lg:right-[-100px]'
            src={heroImage}
            alt='placeholder dashboard hero'
            priority
          />
        </div>
      </div>
    </section>
  );
}
