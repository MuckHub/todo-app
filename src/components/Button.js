import React from 'react';

export default function Button(props) {
  return (
    <button
      type='submit'
      className='w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-black hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black  sm:w-auto sm:text-sm'
    >
      {props.children}
    </button>
  );
}
