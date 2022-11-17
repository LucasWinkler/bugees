import Link from 'next/link';

export default function Hero() {
  return (
    <section id='hero' className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-md sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:pl-0 lg:text-left pt-10 sm:pt-16 lg:pt-0 lg:pb-14 py-24'>
        <h1 className='text-4xl font-extrabold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl'>
          <span className='block text-white'>Lets track down</span>
          <span className='block text-white'>
            those <span className='text-green-500'>pesky bugs.</span>
          </span>
        </h1>
        <Link
          className='text-white border-2 border-white p-3 px-6 inline-flex justify-between items-center gap-5 font-medium text-lg mt-9'
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
    </section>
  );
}
