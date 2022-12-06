import titleCase from '@/util/titleCase';
import { Role } from '@prisma/client';
import clsx from 'clsx';
import { useSession } from 'next-auth/react';
import { FC } from 'react';
import AvatarMenu from '../common/AvatarMenu';
import Notifications from './Notifications';

interface HeaderProps {
  className?: string;
}

interface UserRoleProps {
  name: string;
  role: Role;
}

const UserRole: FC<UserRoleProps> = ({ name, role }) => {
  const showAdminRole = role === Role.ADMIN && titleCase(role);

  return (
    <p>
      {name}
      <br />
      <span className='font-normal text-neutral-400'>{showAdminRole} User</span>
    </p>
  );
};

const Header: FC<HeaderProps> = ({ className }) => {
  const { data: session } = useSession();
  const usersName = session?.user.name || 'Users name unavailable';
  const usersRole = session?.user.role || Role.USER;

  return (
    <header
      className={clsx(
        'flex items-center justify-between gap-2 border-b border-neutral-800 px-4 py-6 md:px-8',
        className
      )}>
      <UserRole name={usersName} role={usersRole} />
      <div className='flex items-center justify-between gap-4'>
        <ul className='flex items-center justify-end gap-1'>
          <li>
            <Notifications />
          </li>
          <li>
            <AvatarMenu />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
