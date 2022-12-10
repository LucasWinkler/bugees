import { FC } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Role } from '@prisma/client';
import formatDate from '@/util/formatDate';
import titleCase from '@/util/titleCase';

type UserProps = {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  role: Role;
};

const columnHelper = createColumnHelper<UserProps>();

const columns = [
  columnHelper.accessor<'name', string>('name', {
    header: 'Name',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor<'email', string>('email', {
    header: 'Email',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor<'role', Role>('role', {
    header: 'Role',
    cell: info => titleCase(info.getValue()),
  }),
  columnHelper.accessor<'createdAt', Date>('createdAt', {
    header: 'Date Created',
    cell: info => formatDate(info.getValue()),
  }),
];

// TODO: Add pagination, sorting and edit action

const UsersTable: FC<{ users: UserProps[] }> = ({ users }) => {
  const table = useReactTable({
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <div className='relative overflow-x-auto rounded shadow-md sm:rounded-lg'>
        <table className='w-full text-left text-sm text-neutral-400'>
          <thead className='bg-neutral-600 text-xs uppercase text-neutral-300'>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th className='py-3 px-6' key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className=''>
            {table.getRowModel().rows.map(row => (
              <tr
                className='bg-neutral-800 even:bg-neutral-700 hover:bg-neutral-900'
                key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td className='py-4 px-6' key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UsersTable;
