import Navbar from '../components/home/Navbar';
import Footer from '../components/home/Footer';

export default function Home({ children }) {
  return (
    <div className='bg-gray-900 text-gray-300 text-base'>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
