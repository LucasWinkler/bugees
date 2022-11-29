const SkipNavigation = () => {
  return (
    <a
      href='#main-content'
      className='sr-only block bg-neutral-800 text-center text-white focus:not-sr-only'>
      Skip to content
    </a>
  );
};

export default SkipNavigation;
