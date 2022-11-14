import Image from 'next/image';

export default function Header() {
  return (
    <header>
      <Image
        src='/images/bugees-logo.svg'
        alt='bugees logo'
        width='119'
        height='38'
        priority={true}
      />
      Dashboard header
    </header>
  );
}
