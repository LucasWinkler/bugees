import Link from 'next/link';

export default function CTA() {
  return (
    <section id='cta'>
      <div>
        <div>
          <h2>What are you waiting for? It&apos;s free!</h2>
          <Link href='/dashboard'>Get work done faster</Link>
        </div>
      </div>
    </section>
  );
}
