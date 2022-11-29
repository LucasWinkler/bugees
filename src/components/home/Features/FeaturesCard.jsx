import PropTypes from 'prop-types';

const FeaturesCard = ({ title, icon, children }) => {
  return (
    <div className='flex flex-col items-center justify-center rounded border-b-4 border-green-300 bg-neutral-800 px-6 py-12 xs:max-w-[20rem] md:max-w-[18rem] md:px-8 md:py-12 lg:max-w-[20rem] xl:max-w-[22rem] xl:py-20'>
      {icon && (
        <div className='mx-auto my-3 flex h-20 w-20 items-center justify-center rounded-full bg-neutral-900'>
          <span className='h-auto w-full p-4 text-green-300'>{icon}</span>
        </div>
      )}
      {title && (
        <h3 className='my-2 text-center text-xl font-semibold text-white'>
          {title}
        </h3>
      )}
      {children && <p className='my-2 max-w-[40ch] text-center'>{children}</p>}
    </div>
  );
};

FeaturesCard.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.element,
  children: PropTypes.node,
};

export default FeaturesCard;
