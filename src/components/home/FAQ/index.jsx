import { Container } from 'components/common/Container';
import Link from 'next/link';
import FAQDisclosure from './FAQDisclosure';

const FAQ = () => {
  return (
    <section
      id='frequently-asked-questions'
      className='pb-[6rem] pt-14 lg:py-24'>
      <Container>
        <h2 className='text-center text-3xl font-bold text-white md:text-4xl xl:text-5xl'>
          Frequently asked questions
        </h2>
        <div className='mx-auto mt-14 w-full max-w-md space-y-1 rounded bg-neutral-800 p-2'>
          <FAQDisclosure question='How much does Bugees cost?'>
            Bugees is 100% free and always will be. This project was made to
            help{' '}
            <Link
              className='text-green-300 underline underline-offset-2 hover:no-underline'
              href='https://www.lucaswinkler.dev/'>
              Lucas Winkler
            </Link>{' '}
            learn how to use Next.js.
          </FAQDisclosure>
          <FAQDisclosure question='How much does Bugees cost?'>
            Bugees is 100% free and always will be. This project was made to
            help{' '}
            <Link
              className='text-green-300 underline underline-offset-2 hover:no-underline'
              href='https://www.lucaswinkler.dev/'>
              Lucas Winkler
            </Link>{' '}
            learn how to use Next.js.
          </FAQDisclosure>
          <FAQDisclosure question='How much does Bugees cost?'>
            Bugees is 100% free and always will be. This project was made to
            help{' '}
            <Link
              className='text-green-300 underline underline-offset-2 hover:no-underline'
              href='https://www.lucaswinkler.dev/'>
              Lucas Winkler
            </Link>{' '}
            learn how to use Next.js.
          </FAQDisclosure>
        </div>
      </Container>
    </section>
  );
};
export default FAQ;
