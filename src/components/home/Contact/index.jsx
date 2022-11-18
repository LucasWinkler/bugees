import Link from 'next/link';

export default function Contact() {
  return (
    <section id='contact' className='container bg-green-500 py-14'>
      <div className='text-center flex gap-1 flex-col'>
        <h2 className='text-white font-bold text-4xl '>Get in Touch</h2>
        <Link
          className='text-white border-2 border-white p-3 px-6 flex justify-between items-center gap-5 font-medium text-lg mt-6 rounded self-center'
          href='mailto:hello@lucaswinkler.dev'>
          hello@lucaswinkler.dev
        </Link>
      </div>
    </section>
  );
}
