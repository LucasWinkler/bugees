import { cva } from 'cva';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

const button = cva(
  'rounded-md relative font-medium transition-color duration-150',
  {
    variants: {
      variant: {
        primary:
          'bg-green-600 hover:bg-green-700 text-white border border-green-700',
        secondary: 'bg-blue-600 hover:bg-blue-700 text-white',
        destructive: 'bg-red-600 hover:bg-red-700 text-white',
        monochrome:
          'bg-neutral-100 hover:bg-neutral-300 text-black border border-gray-400',
      },
      modifier: {
        outline: '!bg-transparent border border-current',
        plain:
          'shadow-none bg-transparent border-none px-2 py-1 text-sm text-white',
      },
      size: {
        small: 'text-sm',
        medium: 'text-sm',
        large: 'text-base',
      },
      fullWidth: {
        true: 'w-full',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
      },
    },
    compoundVariants: [
      {
        modifier: 'outline',
        variant: 'monochrome',
        className: 'text-neutral-100 hover:text-neutral-300',
      },
      {
        modifier: 'outline',
        variant: 'destructive',
        className: 'text-red-500 hover:bg-transparent hover:text-red-600',
      },
      {
        modifier: 'outline',
        variant: 'primary',
        className: 'text-green-500 hover:bg-transparent hover:text-green-600',
      },
      {
        modifier: 'outline',
        variant: 'secondary',
        className: 'text-blue-500 hover:bg-transparent hover:text-blue-600',
      },
      {
        modifier: 'plain',
        variant: 'destructive',
        className: 'text-red-500 hover:bg-transparent hover:text-red-600',
      },
      {
        modifier: 'plain',
        variant: 'primary',
        className: 'text-green-500 hover:bg-transparent hover:text-green-600',
      },
      {
        modifier: 'plain',
        variant: 'secondary',
        className: 'text-blue-500 hover:bg-transparent hover:text-blue-600',
      },
      {
        modifier: undefined,
        size: 'small',
        className: 'px-3 py-[3px]',
      },
      {
        modifier: 'outline',
        size: 'small',
        className: 'px-3 py-[3px]',
      },
      {
        modifier: undefined,
        size: 'medium',
        className: 'px-4 py-2',
      },
      {
        modifier: 'outline',
        size: 'medium',
        className: 'px-4 py-2',
      },
      {
        modifier: undefined,
        size: 'large',
        className: 'px-6 py-3',
      },
      {
        modifier: 'outline',
        size: 'large',
        className: 'px-6 py-3',
      },
    ],
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
);

const Button = ({
  children,
  variant,
  modifier,
  size,
  fullWidth,
  disabled,
  loading,
}) => {
  return (
    <button
      className={button({
        variant,
        modifier,
        size,
        fullWidth,
        disabled,
      })}
      disabled={disabled}>
      <span className={clsx('', loading && 'text-transparent')}>
        {children}
      </span>
      {loading && (
        <>
          <span className='absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2'>
            <ArrowPathIcon className='h-5 w-5 animate-spin' />
          </span>
          <span className='sr-only'>Loading</span>
        </>
      )}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'destructive',
    'monochrome',
  ]),
  modifier: PropTypes.oneOf(['outline', 'plain']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

export default Button;
