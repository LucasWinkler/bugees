import PropTypes from 'prop-types';

const HeroTitle = ({ children }) => {
  return (
    <h1 className='text-4xl font-extrabold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl'>
      {children}
    </h1>
  );
};

HeroTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeroTitle;
