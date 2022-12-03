import clsx from 'clsx';
import { useState } from 'react';

interface NavigationDrawerProps {
  className?: string;
}

const NavigationDrawer = ({ className }: NavigationDrawerProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside className={clsx('', className)}>
      <nav className=''>Sidebar Navigation Drawer</nav>
    </aside>
  );
};

export default NavigationDrawer;
