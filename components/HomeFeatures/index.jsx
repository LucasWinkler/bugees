import styled from 'styled-components';
import HomeContainer from '../HomeContainer';

const Heading = styled.h2`
  color: ${props => props.theme.colour.neutral700};
  margin: 0;
  font-size: 2.5rem;
  text-align: center;
`;

const FeaturesSection = styled.section`
  background-color: ${props => props.theme.colour.neutral200};
  padding-block: 5em;
  margin: 0 auto;
`;

const Flex = styled.div`
  display: flex;
  gap: 2em;
`;

export default function HomeFeatures() {
  return (
    <FeaturesSection id='features'>
      <HomeContainer>
        <Heading>Features</Heading>
        <Flex>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
            praesentium!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
            praesentium!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
            praesentium!
          </p>
        </Flex>
      </HomeContainer>
    </FeaturesSection>
  );
}
