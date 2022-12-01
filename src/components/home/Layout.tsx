import Header from '@/components/common/Header';
import SkipNavigation from '@/components/common/SkipNavigation';
import Footer from '@/components/home/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <SkipNavigation />
      <Header />
      <main id='main-content'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
