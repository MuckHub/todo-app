import React, { useContext } from 'react';
import TodoItemContainer from './TodoItemContainer';
import DeleteButton from './DeleteButton';
import { TodosContext } from '../context/todos-contex';

export default function TodoItem({ todo }) {
  const toggleComplete = useContext(TodosContext).toggleComplete;

  return (
    <TodoItemContainer completed={todo.completed}>
      <div className='relative flex  content-center'>
        <div className='sm:flex flex flex-wrap content-center '>
          <input
            onClick={() => toggleComplete(todo.id)}
            type='checkbox'
            defaultChecked={todo.completed}
            className='focus:ring-black h-4 w-4 text-black border-gray-300 rounded'
          />
        </div>
        <div className='ml-6 text-sm'>
          <label className='font-medium text-gray-700'>{todo.task}</label>
          <p className='text-gray-500'>{todo.description}</p>
        </div>
      </div>

      <DeleteButton id={todo.id} />
    </TodoItemContainer>
  );
}
