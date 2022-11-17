import Image from 'next/image';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <header className='bg-blue-800 py-4'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <nav className='text-white flex justify-between  items-center'>
          <Link href='/'>
            <Image
              src='/images/bugees-logo-white.svg'
              alt='bugees logo'
              width='119'
              height='38'
              priority
            />
          </Link>

          {/* <ul className='flex justify-between items-center gap-11'>
            <li>
              <Link scroll={false} href='#features'>
                Features
              </Link>
            </li>
            <li>
              <Link scroll={false} href='#faq'>
                FAQ
              </Link>
            </li>
            <li>
              <Link scroll={false} href='#contact'>
                Contact
              </Link>
            </li>
          </ul> */}
          <div className='flex justify-between items-center gap-0 sm:gap-1'>
            {status === 'authenticated' ? (
              <>
                <Link
                  className='text-white py-2 px-2 text-sm sm:text-base'
                  href='/dashboard'>
                  Dashboard
                </Link>

                <Menu as='div' className='relative ml-3'>
                  <>
                    <Menu.Button className='flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
                      <span className='sr-only'>Open user menu</span>
                      <Image
                        className='rounded-full h-12 w-12 '
                        referrerPolicy='no-referrer'
                        src={session.user.image}
                        alt='profile'
                        width={48}
                        height={48}
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
                    <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                            href='/dashboard'>
                            Dashboard
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href='/dashboard/settings'
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}>
                            Settings
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700 w-[100%] text-left'
                            )}
                            onClick={() => signOut()}>
                            Sign Out
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </>
            ) : (
              <>
                <button
                  className=' text-white text-sm sm:text-base py-2 px-4 rounded inline-flex items-center'
                  onClick={() => signIn()}>
                  <ArrowRightOnRectangleIcon className='w-6 h-6 mr-2' />
                  Sign In
                </button>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
