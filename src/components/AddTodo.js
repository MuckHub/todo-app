import React, { useState, useContext } from 'react';
import AddTodoContainer from './AddTodoContainer';
import { TodosContext } from '../context/todos-contex';
import Button from './Button';
import Input from './Input';

export default function AddTodo() {
  const [input, setInput] = useState({ task: '', description: '' });
  const [taskIsValid, setTaskIsValid] = useState(true);
  const [descriptionIsValid, setDescriptionIsValid] = useState(true);

  const addNewData = useContext(TodosContext).addNewData;

  const addNewTask = () => {
    const todoId = Date.now();
    const newTodo = {
      id: todoId,
      task: input.task,
      description: input.description,
      completed: false,
    };
    addNewData(newTodo);
  
  };

  const taskHandler = (e) => {
    setTaskIsValid(true);
    setInput(() => ({
      task: e.target.value,
      description: input.description,
    }));
  };

  const descriptionHandler = (e) => {
    setDescriptionIsValid(true);
    setInput(() => ({
      task: input.task,
      description: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const taskIsEmpty = input.task.trim() === '';
    const descriptionIsEmpty = input.description.trim() === '';

    if (taskIsEmpty) setTaskIsValid(false);
    if (descriptionIsEmpty) setDescriptionIsValid(false);
    if (taskIsEmpty || descriptionIsEmpty) return;

    addNewTask();
    setInput({ task: '', description: '' });
  };

  return (
    <AddTodoContainer>
      <h3 className='text-lg leading-6 font-medium text-gray-900'>
        Add your todo list
      </h3>
      <form onSubmit={submitHandler} className='mt-5 sm:flex sm:items-center'>
        <div className='w-full sm:max-w-xs'>
          <Input
            placeholder={'Add task here...'}
            value={input.task}
            onChange={taskHandler}
            isValid={taskIsValid}
          />

          <Input
            placeholder={'Add description here...'}
            value={input.description}
            onChange={descriptionHandler}
            isValid={descriptionIsValid}
          />
          <Button>Add</Button>
        </div>
      </form>
    </AddTodoContainer>
  );
}
