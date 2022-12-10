import {
  Cog6ToothIcon,
  HomeIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline';

const avatarMenuLinks = {
  primary: [
    {
      name: 'Home',
      href: '/',
      icon: HomeIcon,
    },
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: Squares2X2Icon,
    },
  ],

  secondary: [
    {
      name: 'Settings',
      href: '/dashboard/settings',
      icon: Cog6ToothIcon,
    },
  ],
};

export default avatarMenuLinks;
