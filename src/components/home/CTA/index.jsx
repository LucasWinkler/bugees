import Link from 'next/link';

export default function CTA() {
  return (
    <section id='cta' className='bg-green-500 py-14'>
      <div className='container text-center flex gap-1 flex-col'>
        <h2 className='text-white font-bold text-4xl'>
          What are you waiting for? It&apos;s free!
        </h2>
        <Link
          className='text-white border-2 border-white p-3 px-6 flex justify-between items-center gap-5 font-medium text-lg mt-6 rounded self-center'
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
