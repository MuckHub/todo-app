import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import MainContainer from './components/MainContainer';
import TodosProvider from './context/todos-contex';

function App() {
  return (
    <TodosProvider>
      <MainContainer>
        <AddTodo />
        <TodoList />
      </MainContainer>
    </TodosProvider>
  );
}

export default App;
