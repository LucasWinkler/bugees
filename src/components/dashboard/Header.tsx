import { Menu } from '@headlessui/react';
import { BellIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { FC } from 'react';
import AvatarMenu from '../common/AvatarMenu';

interface HeaderProps {
  className?: string;
}

const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <header
      className={clsx(
        'flex items-center justify-end px-4 py-6 md:px-8',
        className
      )}>
      <ul className='flex items-center justify-end gap-1'>
        <li className='text-white'>
          <Menu as='div' className='relative m-1 inline-block text-left'>
            <div>
              <Menu.Button
                title='Notifications'
                className='inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-300 transition-colors ease-in hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
                <span className='sr-only'>Notifications Menu</span>
                <BellIcon className='h-5 w-auto' />
              </Menu.Button>
            </div>
          </Menu>
        </li>
        <AvatarMenu />
      </ul>
    </header>
  );
};

export default Header;
