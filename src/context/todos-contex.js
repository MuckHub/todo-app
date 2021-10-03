/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';

export const TodosContext = React.createContext({
  data: [],
  addNewData: () => {},
  toggleComplete: () => {},
  deleteTodo: () => {},
});

export default (props) => {
  const [data, setData] = useState(() => {
    const initialValue = JSON.parse(localStorage.getItem('todos'));
    return initialValue || [];
  });

  const updateLocalStorage = (newData) => {
    localStorage.setItem('todos', JSON.stringify(newData));
  };

  const addNewData = (todo) => {
    const newData = [...data];
    newData.push(todo);
    setData(newData);
    updateLocalStorage(newData);
  };

  const toggleComplete = (id) => {
    const updatedData = data.map((el) =>
      el.id === id ? { ...el, completed: !el.completed } : el
    );
    setData(updatedData);
    updateLocalStorage(updatedData);
  };

  const deleteTodo = (id) => {
    const updatedData = data.filter((el) => el.id !== id);
    setData(updatedData);
    updateLocalStorage(updatedData);
  };

  return (
    <TodosContext.Provider
      value={{ data, addNewData, toggleComplete, deleteTodo }}
    >
      {props.children}
    </TodosContext.Provider>
  );
};
