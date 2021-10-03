import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import { TodosContext } from '../context/todos-contex';

export default function TodoList() {
  const todos = useContext(TodosContext).data;

  return (
    <ul className='space-y-3 mt-10 '>
      {todos.map((item) => (
        <TodoItem key={item.id} todo={item} />
      ))}
    </ul>
  );
}
