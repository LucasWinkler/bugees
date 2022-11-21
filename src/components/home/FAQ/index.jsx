import { Disclosure, Transition } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

export default function FAQ() {
  return (
    <section
      id='faq'
      className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-[6rem] pt-14 lg:py-24'>
      <h2 className='text-white text-center font-bold text-3xl md:text-4xl xl:text-5xl'>
        Frequently asked questions
      </h2>
      <div className='mx-auto w-full max-w-md rounded bg-neutral-800 p-2 mt-14 space-y-1 > *'>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className='flex w-full justify-between rounded-sm bg-neutral-800 px-4 py-3 text-left text-sm font-medium text-white hover:bg-neutral-900 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75'>
                <span>How much does Bugees cost?</span>
                <ChevronRightIcon
                  className={`${
                    open ? 'rotate-90 transform' : ''
                  } h-5 w-5 text-green-500`}
                />
              </Disclosure.Button>
              <Transition
                enter='transition duration-100 ease-out'
                enterFrom='transform scale-95 opacity-0'
                enterTo='transform scale-100 opacity-100'
                leave='transition duration-75 ease-out'
                leaveFrom='transform scale-100 opacity-100'
                leaveTo='transform scale-95 opacity-0'>
                <Disclosure.Panel className='px-4 pt-1 pb-3 text-sm'>
                  Bugees is 100% free and always will be. This project was made
                  to help{' '}
                  <Link
                    className='text-green-300 underline underline-offset-2 hover:no-underline'
                    href='https://www.lucaswinkler.dev/'>
                    Lucas Winkler
                  </Link>{' '}
                  learn how to use Next.js.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className='flex w-full justify-between rounded-sm bg-neutral-800 px-4 py-3 text-left text-sm font-medium text-white hover:bg-neutral-900 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75'>
                <span>How much does Bugees cost?</span>
                <ChevronRightIcon
                  className={`${
                    open ? 'rotate-90 transform' : ''
                  } h-5 w-5 text-green-500`}
                />
              </Disclosure.Button>
              <Transition
                enter='transition duration-100 ease-out'
                enterFrom='transform scale-95 opacity-0'
                enterTo='transform scale-100 opacity-100'
                leave='transition duration-75 ease-out'
                leaveFrom='transform scale-100 opacity-100'
                leaveTo='transform scale-95 opacity-0'>
                <Disclosure.Panel className='px-4 pt-1 pb-3 text-sm'>
                  Bugees is 100% free and always will be. This project was made
                  to help{' '}
                  <Link
                    className='text-green-300 underline underline-offset-2 hover:no-underline'
                    href='https://www.lucaswinkler.dev/'>
                    Lucas Winkler
                  </Link>{' '}
                  learn how to use Next.js.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className='flex w-full justify-between rounded-sm bg-neutral-800 px-4 py-3 text-left text-sm font-medium text-white hover:bg-neutral-900 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75'>
                <span>How much does Bugees cost?</span>
                <ChevronRightIcon
                  className={`${
                    open ? 'rotate-90 transform' : ''
                  } h-5 w-5 text-green-500`}
                />
              </Disclosure.Button>
              <Transition
                enter='transition duration-100 ease-out'
                enterFrom='transform scale-95 opacity-0'
                enterTo='transform scale-100 opacity-100'
                leave='transition duration-75 ease-out'
                leaveFrom='transform scale-100 opacity-100'
                leaveTo='transform scale-95 opacity-0'>
                <Disclosure.Panel className='px-4 pt-1 pb-3 text-sm'>
                  Bugees is 100% free and always will be. This project was made
                  to help{' '}
                  <Link
                    className='text-green-300 underline underline-offset-2 hover:no-underline'
                    href='https://www.lucaswinkler.dev/'>
                    Lucas Winkler
                  </Link>{' '}
                  learn how to use Next.js.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
    </section>
  );
}
