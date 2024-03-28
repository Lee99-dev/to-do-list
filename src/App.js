import { createContext, useEffect, useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import Header from './components/Header';

export const TodoContext = createContext();

function App() {
  const [todo, setTodo] = useState(() => readTodo());

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo));
  }, [todo]);

  const onAdd = (item) => {
    setTodo([...todo, item]);
  };

  const onUpdate = (targetId) => {
    setTodo(
      todo.map((item) => {
        if (item.id === targetId) {
          return {
            ...item,
            checked: !item.checked,
          };
        } else {
          return item;
        }
      })
    );
  };

  const onDelete = (targetId) =>
    setTodo(todo.filter((item) => item.id !== targetId));
  return (
    <div className="App">
      <Header />
      <TodoContext.Provider value={{ todo, onAdd, onUpdate, onDelete }}>
        <NewTodo />
        <TodoList />
      </TodoContext.Provider>
    </div>
  );
}
const readTodo = () => {
  const todo = localStorage.getItem('todo');
  if (todo) return JSON.parse(todo);
  else return [];
};

export default App;
