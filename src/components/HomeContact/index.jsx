import styled from 'styled-components';
import HomeButton from '../HomeButton';
import HomeContainer from '../HomeContainer';

const ContactSection = styled.section`
  background-color: ${props => props.theme.colour.primary400};
`;

const Heading = styled.h2`
  color: ${props => props.theme.colour.neutral100};
  margin: 0;
  font-size: 2.5rem;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  justify-content: space-around;
  align-items: center;
  padding-block: 4.5em;
`;

export default function HomeContact() {
  return (
    <ContactSection id='contact'>
      <HomeContainer>
        <Flex>
          <Heading>Get in Touch</Heading>
          <HomeButton
            href='mailto:hello@lucaswinkler.dev'
            name='hello@lucaswinkler.dev'
          />
        </Flex>
      </HomeContainer>
    </ContactSection>
  );
}
