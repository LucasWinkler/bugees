import Link from 'next/link';

export default function Contact() {
  return (
    <section id='contact' className='bg-green-600 py-14'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex gap-1 flex-col'>
        <h2 className='text-white text-center font-bold text-3xl md:text-4xl xl:text-5xl'>
          Got any more questions?
        </h2>
        <Link
          scroll={false}
          className='text-white border-2 border-white p-3 px-6 flex justify-between items-center gap-5 font-medium text-lg mt-6 rounded self-center'
          href='mailto:hello@lucaswinkler.dev'>
          hello@lucaswinkler.dev
        </Link>
      </div>
    </section>
  );
}
