import { FC } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Role } from '@prisma/client';
import formatDate from '@/util/formatDate';

type UserProps = {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  role: Role;
};

const columnHelper = createColumnHelper<UserProps>();

const columns = [
  columnHelper.accessor<'role', Role>('role', {
    header: 'Role',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor<'name', string>('name', {
    header: 'Name',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor<'email', string>('email', {
    header: 'Email',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor<'createdAt', Date>('createdAt', {
    header: 'Date Created',
    cell: info => formatDate(info.getValue()),
  }),
];

const UsersTable: FC<{ users: UserProps[] }> = ({ users }) => {
  const table = useReactTable({
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <div className='p-2'>
        <table>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id}>
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
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id}>
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
