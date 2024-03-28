import React, { useContext } from 'react';
import './TodoList.css';
import Todo from './Todo';
import { TodoContext } from '../App';

const TodoList = () => {
  const { todo } = useContext(TodoContext);
  return (
    <div className="TodoList">
      {todo.map((item) => (
        <Todo key={item.id} {...item} />
      ))}
    </div>
  );
};

export default TodoList;
