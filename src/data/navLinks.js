import {
  Cog6ToothIcon,
  HomeIcon,
  BugAntIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

export const PrimaryNavigationLinks = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Features',
    href: '/#features',
  },
  {
    name: 'FAQ',
    href: '/#faq',
  },
  {
    name: 'Contact',
    href: '/#contact',
  },
];

export const AvatarMenuLinks = [
  {
    name: 'Home',
    href: '/',
    icon: HomeIcon,
  },
  {
    name: 'Settings',
    href: '/account',
    icon: Cog6ToothIcon,
  },
];

export const DashboardSidebarLinks = [
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
];
