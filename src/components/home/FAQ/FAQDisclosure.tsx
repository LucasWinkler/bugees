import { Disclosure, Transition } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

interface FAQDisclosureProps {
  question: string;
  children: React.ReactNode;
}

const FAQDisclosure = ({ question, children }: FAQDisclosureProps) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className='flex w-full justify-between rounded-sm bg-neutral-800 px-4 py-3 text-left text-sm font-medium text-white hover:bg-neutral-900 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75'>
            <span>{question}</span>
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
              {children}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default FAQDisclosure;
