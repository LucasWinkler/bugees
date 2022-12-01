import { Container } from '@/components/common/Container';

interface CallToActionProps {
  id: string;
  title: string;
  children?: React.ReactNode;
}

const CallToAction = ({ id, title, children }: CallToActionProps) => {
  return (
    <section id={id} className='bg-green-700 py-14'>
      <Container>
        <div className='text-center'>
          <h2 className='text-3xl font-bold text-white md:text-4xl xl:text-5xl'>
            {title}
          </h2>
          {children}
        </div>
      </Container>
    </section>
  );
};

export default CallToAction;
