import {
  BugAntIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  HomeIcon,
  PowerIcon,
} from '@heroicons/react/24/outline';

const navigationDrawerLinks = {
  primary: [
    {
      name: 'Overview',
      href: '/dashboard',
      icon: HomeIcon,
    },
    {
      name: 'Projects',
      href: '/dashboard/projects',
      icon: DocumentDuplicateIcon,
    },
    {
      name: 'Bugs',
      href: '/dashboard/bugs',
      icon: BugAntIcon,
    },
  ],
  secondary: [
    {
      name: 'Account Settings',
      href: '/account',
      icon: Cog6ToothIcon,
    },
    {
      name: 'Sign out',
      href: '/api/auth/signout',
      icon: PowerIcon,
    },
  ],
};

export default navigationDrawerLinks;
