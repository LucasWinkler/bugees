import clsx from 'clsx';
import Link from 'next/link';

interface Props {
  props?: any;
  children: React.ReactNode;
  className?: string;
  href: string;
}

const OutlineButton = ({ props, children, className, href }: Props) => {
  return (
    <Link
      {...props}
      className={clsx(
        'group mt-9 inline-flex items-center justify-between gap-5 rounded border-2 border-white py-3 px-6 text-lg font-medium  text-white transition-all duration-300',
        className
      )}
      href={href}>
      {children}
    </Link>
  );
};

export default OutlineButton;
