import Header from 'components/common/Header';
import SkipNavigation from '../common/SkipNavigation';
import NavigationDrawer from './NavigationDrawer';

const Layout = ({ children }) => {
  return (
    <>
      <SkipNavigation />
      <Header />
      <NavigationDrawer />
      <main id='main-content'>{children}</main>
    </>
  );
};

export default Layout;
