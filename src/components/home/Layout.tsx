import Header from '@/components/common/Header';
import SkipNavigation from '@/components/common/SkipNavigation';
import Footer from '@/components/home/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
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
