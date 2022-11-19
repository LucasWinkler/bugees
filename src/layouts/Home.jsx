import Navbar from '../components/home/Navbar';
import Footer from '../components/home/Footer';
import SkipNavigation from '../components/home/SkipNavigation';

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
