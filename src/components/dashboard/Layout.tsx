import Header from '@/components/common/Header';
import SkipNavigation from '@/components/common/SkipNavigation';
import NavigationDrawer from '@/components/dashboard/NavigationDrawer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
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
