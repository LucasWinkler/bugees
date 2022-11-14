import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div>
        <div>
          <Link href='/'>
            <Image
              src='/images/bugees-logo.svg'
              alt='bugees logo'
              width='119'
              height='38'
              priority={true}
            />
          </Link>

          <Link href='https://www.lucaswinkler.dev/'>
            Created by Lucas Winkler
          </Link>
        </div>
      </div>
    </footer>
  );
}
