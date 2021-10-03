import React from 'react';

export default function TodoItemContainer(props) {
  const color = props.completed ? 'green-100' : 'white';

  return (
    <li className={`bg-${color} shadow overflow-hidden rounded-md px-6 py-4`}>
      <div className='relative sm:flex justify-between	flex items-center'>
        {props.children}
      </div>
    </li>
  );
}
