import clsx from 'clsx';

interface NavigationDrawerProps {
  className?: string;
}

const NavigationDrawer = ({ className }: NavigationDrawerProps) => {
  return (
    <aside className={clsx('', className)}>
      <nav className=''>Sidebar Navigation Drawer</nav>
    </aside>
  );
};

export default NavigationDrawer;
