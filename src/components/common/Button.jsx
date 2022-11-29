// TODO: Use CVA and tailwind to create a button component with different variants and sizes

import PropTypes from 'prop-types';

const Button = ({ onClick, type, children, className, disabled, ...props }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className='transition-color rounded bg-green-600 py-2 px-4 font-bold text-white duration-300 hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50'>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  disabled: false,
  type: 'button',
};

export default Button;
