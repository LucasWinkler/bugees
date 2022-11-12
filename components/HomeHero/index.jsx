import styled from 'styled-components';
import HomeContainer from '../HomeContainer';
import HomeButton from '../HomeButton';

const HeroSection = styled.section`
  background-color: ${props => props.theme.colour.primary400};
`;

const Heading = styled.h1`
  color: ${props => props.theme.colour.neutral100};
  margin-top: 0;
`;

export default function HomeHero() {
  return (
    <HeroSection>
      <HomeContainer>
        <Heading>
          Your new best friend that will help you track down those pesky bugs.
        </Heading>
        <HomeButton href='/dashboard' name='Get work done faster' />
      </HomeContainer>
    </HeroSection>
  );
}
