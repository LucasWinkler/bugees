import Image from 'next/image';
import HomeContainer from '../../components/HomeContainer';
import styled from 'styled-components';
import Link from 'next/link';

const Header = styled.header`
  background-color: ${props => props.theme.colour.primary400};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 1.25em;
`;

const NavList = styled.ul`
  display: flex;
  gap: 2.5em;
  list-style: none;
  padding: 0;
`;

const NavUser = styled.ul`
  display: flex;
  gap: 2.5em;
  list-style: none;
  padding: 0;
`;

const NavItem = styled.li``;

const NavLink = styled(Link)`
  display: inline-block;
  font-size: 1.125rem;
  text-decoration: none;
  color: ${props => props.theme.colour.neutral100};
`;

const Logo = styled(Link)`
  display: inline-block;
`;

export default function HomeNavbar() {
  return (
    <Header>
      <HomeContainer>
        <Nav>
          <Logo href='/'>
            <Image
              src='/images/bugees-logo-white.svg'
              alt='bugees logo'
              width='119'
              height='38'
              priority={true}
            />
          </Logo>
          <NavList>
            <NavItem>
              <NavLink href='#features'>Features</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#faq'>FAQ</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#contact'>Contact</NavLink>
            </NavItem>
          </NavList>
          <NavUser>
            <NavLink href='/login'>Sign In</NavLink>
            <NavLink href='/register'>Sign Up</NavLink>
          </NavUser>
        </Nav>
      </HomeContainer>
    </Header>
  );
}
