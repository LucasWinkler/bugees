// TODO: Use proper types instead of randomly trying things until it works... lol

import { cva, VariantProps } from 'cva';
import clsx from 'clsx';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { ButtonHTMLAttributes } from 'react';

const button = cva(
  'rounded-md relative font-medium transition-color duration-150 inline-block leading-[inherit]',
  {
    variants: {
      variant: {
        primary: 'bg-green-600 hover:bg-green-700 text-white',
        secondary: 'bg-blue-600 hover:bg-blue-700 text-white',
        destructive: 'bg-red-600 hover:bg-red-700 text-white',
        monochrome: 'bg-neutral-100 hover:bg-neutral-300 text-black',
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
      variant: 'primary',
      size: 'medium',
    },
  }
);

interface ButtonAsButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> {
  // This prevents you from adding an href prop on a real button, and also tells typescript that by knowing
  // an href is NOT allowed here, that as soon as an href is passed, its type will be ButtonAsAnchorProps
  // and not ButtonAsButtonProps anymore.
  href?: never;
}

interface ButtonAsAnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

type ButtonProps = VariantProps<typeof button> &
  (ButtonAsButtonProps | ButtonAsAnchorProps) & {
    children: React.ReactNode;
    loading?: boolean;
  };

const ButtonElement = ({ children, ...props }: any) => {
  if (typeof props.href === 'string') {
    return <Link {...props}>{children}</Link>;
  }
  return <button {...props}>{children}</button>;
};

const Button = ({
  children,
  variant,
  modifier,
  size,
  fullWidth,
  disabled,
  loading,
  href,
  onClick,
}: ButtonProps) => {
  return (
    <ButtonElement
      href={href}
      onClick={onClick}
      className={button({
        variant,
        modifier,
        size,
        fullWidth,
        disabled,
      })}>
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
    </ButtonElement>
  );
};

export default Button;
