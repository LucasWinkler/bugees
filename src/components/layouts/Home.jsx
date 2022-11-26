import Navbar from '../common/Navbar';
import Footer from '../home/Footer';
import SkipNavigation from '../home/SkipNavigation';

export default function Home({ children }) {
  return (
    <>
      <SkipNavigation />
      <Navbar />
      <main id='main-content'>{children}</main>
      <Footer />
    </>
  );
}
