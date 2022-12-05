import Header from '@/components/dashboard/Header';
import SkipNavigation from '@/components/common/SkipNavigation';
import NavigationDrawer from '@/components/dashboard/NavigationDrawer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <SkipNavigation />
      <div className='dashboard-layout'>
        <Header className='dashboard-header' />
        <NavigationDrawer className='dashboard-sidebar' />
        <main className='dashboard-main mx-8 my-2' id='main-content'>
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
