import {
  Cog6ToothIcon,
  HomeIcon,
  BugAntIcon,
  DocumentDuplicateIcon,
  QuestionMarkCircleIcon,
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
    name: 'Account Settings',
    href: '/account',
    icon: Cog6ToothIcon,
  },
  {
    name: 'Link 2',
    href: '/',
    icon: QuestionMarkCircleIcon,
  },
  {
    name: 'Link 3',
    href: '/',
    icon: QuestionMarkCircleIcon,
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
