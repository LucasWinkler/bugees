import {
  BugAntIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  PowerIcon,
  Squares2X2Icon,
  UsersIcon,
} from '@heroicons/react/24/outline';

const navigationDrawerLinks = {
  primary: [
    {
      name: 'Overview',
      href: '/dashboard',
      icon: Squares2X2Icon,
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
      name: 'Settings',
      href: '/dashboard/settings',
      icon: Cog6ToothIcon,
    },
    {
      name: 'Sign out',
      href: '/api/auth/signout',
      icon: PowerIcon,
    },
  ],
  admin: [
    {
      name: 'Users',
      href: '/dashboard/admin/users',
      icon: UsersIcon,
    },
  ],
};

export default navigationDrawerLinks;
