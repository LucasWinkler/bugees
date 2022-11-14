import HomeNavbar from '../components/HomeNavbar';
import HomeFooter from '../components/HomeFooter';

export default function HomeLayout({ children }) {
  return (
    <>
      <HomeNavbar />
      <main>{children}</main>
      <HomeFooter />
    </>
  );
}
