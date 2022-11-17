import Navbar from '../components/home/Navbar';
import Footer from '../components/home/Footer';

export default function Home({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
