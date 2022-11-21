import PropTypes from 'prop-types';

const Button = ({ onClick, type, children, className, disabled, ...props }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={
        'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
      }
      {...props}>
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
  className:
    'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded',
  type: 'button',
};

export default Button;
