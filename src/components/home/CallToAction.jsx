import PropTypes from 'prop-types';

import { Container } from 'components/common/Container';

const CallToAction = ({ id, title, children }) => {
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

CallToAction.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default CallToAction;
