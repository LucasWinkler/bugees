import Link from 'next/link';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';
import { AvatarMenuLinks } from '../../../data/navLinks';
import classNames from '../../../util/joinClassNames';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { PowerIcon } from '@heroicons/react/24/outline';
import titleCase from '../../../util/titleCase';
import defaultProfileIcon from '../../../../public/images/default-profile-icon.png';

const AvatarMenu = () => {
  const { data: session, status } = useSession();

  if (status !== 'authenticated') {
    return null;
  }

  const profileImage = session.user.image || defaultProfileIcon;

  return (
    <Menu as='div' className='relative m-1 inline-block text-left'>
      <>
        <Menu.Button className='flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 focus:ring-offset-gray-800   hover:outline-none hover:ring-2 hover:ring-green-300 hover:ring-offset-2 hover:ring-offset-gray-800 transition duration-200 overflow-hidden ease-in'>
          <span className='sr-only'>Open user menu</span>
          <Image
            className='rounded-full h-8 w-8 xs:h-10 xs:w-10 md:h-12 md:w-12 hover:scale-[1.18] transition-transform duration-[400ms] delay-75'
            referrerPolicy='no-referrer'
            src={profileImage}
            alt='profile'
            width={100}
            height={100}
            priority
          />
        </Menu.Button>
      </>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'>
        <Menu.Items className='absolute whitespace-nowrap right-0 z-10 mt-4 min-w-[12rem] origin-top-right rounded-md bg-neutral-900 p-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border border-neutral-700'>
          <Menu.Item>
            {({ active }) => (
              <>
                <div className='flex items-center mr-4 py-2'>
                  <div className='ml-4 mr-3'>
                    <Image
                      className='rounded-full border min-w-[3rem] min-h-[3rem] max-h-[3rem] max-w-[3rem] border-neutral-700'
                      referrerPolicy='no-referrer'
                      src={profileImage}
                      alt='profile'
                      width={100}
                      height={100}
                      priority
                    />
                  </div>
                  <div className='pt-0 pb-1 text-sm text-neutral-300 font-semibold'>
                    <div className='pt-1 text-neutral-400 font-normal'>
                      {titleCase(session.user.role)}
                    </div>
                    {session.user.name || session.user.email}
                  </div>
                </div>
              </>
            )}
          </Menu.Item>
          <div className='separator'></div>
          {AvatarMenuLinks.map(link => (
            <Menu.Item key={link.name}>
              {({ active }) => (
                <Link
                  className={classNames(
                    active ? 'bg-neutral-800' : '',
                    'block px-4 py-2 text-sm text-neutral-300 rounded'
                  )}
                  href={link.href}>
                  <div className='flex items-center gap-2'>
                    <link.icon className='h-5 w-5' />
                    {link.name}
                  </div>
                </Link>
              )}
            </Menu.Item>
          ))}
          <div className='separator'></div>
          <Menu.Item>
            {({ active }) => (
              <button
                className={classNames(
                  active ? 'bg-neutral-800' : '',
                  'block px-4 py-2 text-sm text-red-500 opacity-95 rounded w-[100%]'
                )}
                onClick={() => signOut()}>
                <div className='flex items-center gap-2'>
                  <PowerIcon className='h-5 w-5' />
                  Sign Out
                </div>
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default AvatarMenu;
