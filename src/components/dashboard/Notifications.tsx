import { Menu } from '@headlessui/react';
import { BellIcon } from '@heroicons/react/24/outline';
import { FC } from 'react';

const Notifications: FC = () => {
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button
          title='Notifications'
          className='inline-flex w-full justify-center rounded-md px-2 text-sm font-medium text-gray-300 transition-colors ease-in hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
          <span className='sr-only'>Notifications Menu</span>
          <BellIcon className='h-5 w-auto' />
        </Menu.Button>
      </div>
    </Menu>
  );
};

export default Notifications;
