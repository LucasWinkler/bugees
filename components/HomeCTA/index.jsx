import HomeContainer from '../../components/HomeContainer';
import styled from 'styled-components';
import HomeButton from '../HomeButton';

const CTASection = styled.section`
  background-color: ${props => props.theme.colour.primary400};
`;

const Heading = styled.h2`
  color: ${props => props.theme.colour.neutral100};
  margin: 0;
  font-size: 2.5rem;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-block: 5.5em;
`;

export default function HomeCTA() {
  return (
    <CTASection>
      <HomeContainer>
        <Flex>
          <Heading>What are you waiting for? It&apos;s free!</Heading>
          <HomeButton href='/dashboard' name='Get work done faster' />
        </Flex>
      </HomeContainer>
    </CTASection>
  );
}
