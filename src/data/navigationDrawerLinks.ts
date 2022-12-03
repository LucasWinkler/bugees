import {
  BugAntIcon,
  DocumentDuplicateIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';

export const navigationDrawerLinks = [
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

export default navigationDrawerLinks;
