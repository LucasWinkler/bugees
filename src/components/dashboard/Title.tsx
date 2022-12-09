import type { FC } from 'react';

type TitleProps = {
  children: string;
};

const Title: FC<TitleProps> = ({ children }) => {
  return (
    <h1 className='pb-6 text-lg font-bold text-neutral-200 sm:text-xl md:text-2xl'>
      {children}
    </h1>
  );
};
export default Title;
