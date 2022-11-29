import clsx from 'clsx';
import Link from 'next/link';
import PropTypes from 'prop-types';

const OutlineButton = ({ props, children, className, href, onClick }) => {
  return (
    <Link
      {...props}
      className={clsx(
        'group mt-9 inline-flex items-center justify-between gap-5 rounded border-2 border-white py-3 px-6 text-lg font-medium  text-white transition-all duration-300',
        className
      )}
      href={href}
      onClick={onClick}>
      {children}
    </Link>
  );
};

OutlineButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default OutlineButton;
