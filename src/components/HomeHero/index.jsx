import Link from 'next/link';

export default function HomeHero() {
  return (
    <section id='hero'>
      <div>
        <h1>
          Your new best friend that will help you track down those pesky bugs.
        </h1>
        <Link href='/dashboard'>Get work done faster</Link>
      </div>
    </section>
  );
}
