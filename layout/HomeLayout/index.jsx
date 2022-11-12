import HomeNavbar from '../../components/HomeNavbar';
import HomeFooter from '../../components/HomeFooter';

export default function HomeLayout({ children }) {
  return (
    <>
      <header>
        <HomeNavbar />
      </header>

      <main>{children}</main>

      <HomeFooter />
    </>
  );
}
