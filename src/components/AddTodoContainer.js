import React from 'react';

export default function AddTodoContainer(props) {
  return (
    <div className='bg-white shadow sm:rounded-lg mt-10 '>
      <div className='px-4 py-5 sm:p-6'>{props.children}</div>
    </div>
  );
}
