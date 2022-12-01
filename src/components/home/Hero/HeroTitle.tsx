interface HeroTitleProps {
  children: React.ReactNode;
}

const HeroTitle = ({ children }: HeroTitleProps) => {
  return (
    <h1 className='text-4xl font-extrabold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl'>
      {children}
    </h1>
  );
};

export default HeroTitle;
