import React, { useContext } from 'react';
import { TodosContext } from '../context/todos-contex';

export default function DeleteButton({ id }) {
  const deleteTodo = useContext(TodosContext).deleteTodo;

  return (
    <button
      type='button'
      onClick={() => deleteTodo(id)}
      className='items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 '
    >
      Delete
    </button>
  );
}
