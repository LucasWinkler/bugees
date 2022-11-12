import { Disclosure, Transition } from '@headlessui/react';
import styled from 'styled-components';
import HomeContainer from '../HomeContainer';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

const Heading = styled.h2`
  color: ${props => props.theme.colour.neutral700};
  margin: 0;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1.7em;
`;

const FAQSection = styled.section`
  background-color: ${props => props.theme.colour.neutral200};
  padding-block: 5em;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 30em;
  width: 100%;
  margin: 0 auto;
  gap: 1.25em;
`;

const StyledDisclosureButton = styled(Disclosure.Button)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2em;
  text-align: left;
  background-color: ${props => props.theme.colour.neutral100};
  border: none;
  font-size: 1.125rem;
  color: ${props => props.theme.colour.neutral700};
  filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.3));
`;

const StyledDisclosurePanel = styled(Disclosure.Panel)`
  font-size: 1rem;
  text-align: left;
  color: ${props => props.theme.colour.neutral600};
`;

const StyledChevronRightIcon = styled(ChevronRightIcon)`
  width: auto;
  height: 1.5em;
  transform: rotateZ(${props => (props.open ? '90deg' : '0deg')});
  color: ${props => props.theme.colour.primary400};
`;

export default function HomeFAQ() {
  return (
    <FAQSection id='faq'>
      <HomeContainer>
        <Heading>Frequently Asked Questions</Heading>
        <Content>
          <Disclosure>
            {({ open }) => (
              <>
                <StyledDisclosureButton>
                  Is Bugees free? <StyledChevronRightIcon open={open} />
                </StyledDisclosureButton>
                <StyledDisclosurePanel>Yes!</StyledDisclosurePanel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <StyledDisclosureButton>
                  Is Bugees free? <StyledChevronRightIcon open={open} />
                </StyledDisclosureButton>
                <StyledDisclosurePanel>Yes!</StyledDisclosurePanel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <StyledDisclosureButton>
                  Is Bugees free? <StyledChevronRightIcon open={open} />
                </StyledDisclosureButton>
                <StyledDisclosurePanel>Yes!</StyledDisclosurePanel>
              </>
            )}
          </Disclosure>
        </Content>
      </HomeContainer>
    </FAQSection>
  );
}
