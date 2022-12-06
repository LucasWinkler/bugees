import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { FC } from 'react';

const Search: FC = () => {
  return (
    <div className='flex items-center rounded bg-neutral-800'>
      <label htmlFor='search'>
        <MagnifyingGlassIcon className='h-5 w-auto px-3 text-neutral-300' />
      </label>
      <input
        id='search'
        type='text'
        className='w-full rounded-md bg-neutral-800 py-2 text-sm placeholder-neutral-400 focus:outline-none'
        placeholder='Search'
      />
    </div>
  );
};

export default Search;
