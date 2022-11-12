import Image from 'next/image';
import HomeContainer from '../../components/HomeContainer';

export default function HomeNavbar() {
  return (
    <nav>
      <HomeContainer>
        <Image
          src={'/images/bugees-logo.svg'}
          alt='bugees logo'
          width='119'
          height='38'
          priority={true}
        />
        Home navbar
      </HomeContainer>
    </nav>
  );
}
