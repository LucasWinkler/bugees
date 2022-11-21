import { Cog6ToothIcon } from '@heroicons/react/24/outline';

export const PrimaryNavigationLinks = [
  {
    name: 'Home',
    path: '/',
    disabled: false,
  },
  {
    name: 'Features',
    path: '/#features',
    disabled: false,
  },
  {
    name: 'FAQ',
    path: '/#faq',
    disabled: false,
  },
  {
    name: 'Contact',
    path: '/#contact',
    disabled: false,
  },
];

export const AccountDropdownLinks = [
  {
    name: 'Account Settings',
    path: '/account',
    disabled: false,
    icon: Cog6ToothIcon,
  },
];

export const DashboardSidebarLinks = [
  {
    name: 'Overview',
    path: '/dashboard',
    disabled: false,
    icon: null,
  },
  {
    name: 'Projects',
    path: '/dashboard/projects',
    disabled: false,
    icon: null,
  },
  {
    name: 'Bugs',
    path: '/dashboard/bugs',
    disabled: false,
    icon: null,
  },
];
