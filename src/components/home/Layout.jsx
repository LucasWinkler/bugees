import Header from 'components/common/Header';
import SkipNavigation from '../common/SkipNavigation';
import Footer from './Footer';

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
