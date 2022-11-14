import { Disclosure } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

export default function FAQ() {
  return (
    <section id='faq'>
      <div>
        <h2>Frequently Asked Questions</h2>
        <div>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button>
                  Is Bugees free? <ChevronRightIcon />
                </Disclosure.Button>
                <Disclosure.Panel>Yes!</Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button>
                  Is Bugees free? <ChevronRightIcon />
                </Disclosure.Button>
                <Disclosure.Panel>Yes!</Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button>
                  Is Bugees free? <ChevronRightIcon />
                </Disclosure.Button>
                <Disclosure.Panel>Yes!</Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </section>
  );
}
