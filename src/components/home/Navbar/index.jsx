import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header>
      <div>
        <nav>
          <Link href='/'>
            <Image
              src='/images/bugees-logo-white.svg'
              alt='bugees logo'
              width='119'
              height='38'
              priority
            />
          </Link>
          <ul>
            <li>
              <Link scroll={false} href='#features'>
                Features
              </Link>
            </li>
            <li>
              <Link scroll={false} href='#faq'>
                FAQ
              </Link>
            </li>
            <li>
              <Link scroll={false} href='#contact'>
                Contact
              </Link>
            </li>
          </ul>
          <div>
            <Link href='/login'>Sign In</Link>
            <Link href='/register'>Sign Up</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
