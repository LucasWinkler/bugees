import HomeContainer from '../../components/HomeContainer';
import Image from 'next/image';
import Link from 'next/link';

export default function HomeFooter() {
  return (
    <footer>
      <HomeContainer>
        <Image
          src='/images/bugees-logo.svg'
          alt='bugees logo'
          width='119'
          height='38'
          priority={true}
        />

        <Link href='https://www.lucaswinkler.dev/'>
          Created by Lucas Winkler
        </Link>
      </HomeContainer>
    </footer>
  );
}
