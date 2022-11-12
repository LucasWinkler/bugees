import HomeContainer from '../../components/HomeContainer';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const Footer = styled.footer`
  padding: 3em;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  justify-content: space-between;
  align-items: center;
`;

const CreatedBy = styled(Link)`
  display: inline-block;
  padding: 0.2em;
  color: ${props => props.theme.colour.neutral700};
  text-decoration: none;
  font-size: 1rem;
`;

export default function HomeFooter() {
  return (
    <Footer>
      <HomeContainer>
        <Flex>
          <Link href='/'>
            <Image
              src='/images/bugees-logo.svg'
              alt='bugees logo'
              width='119'
              height='38'
              priority={true}
            />
          </Link>

          <CreatedBy href='https://www.lucaswinkler.dev/'>
            Created by Lucas Winkler
          </CreatedBy>
        </Flex>
      </HomeContainer>
    </Footer>
  );
}
