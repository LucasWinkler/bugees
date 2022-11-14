import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <input
      onChange={e => setTheme(e.target.checked ? 'dark' : 'light')}
      defaultChecked={resolvedTheme === 'dark' ? true : false}
      type='checkbox'
      name='themeToggle'
      id='themeToggle'
    />
  );
};

export default ThemeToggle;
