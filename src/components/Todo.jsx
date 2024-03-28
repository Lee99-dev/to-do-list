import React, { useContext } from 'react';
import { TodoContext } from '../App';
import './Todo.css';
import { TiDelete } from 'react-icons/ti';

const Todo = ({ id, text, checked, createDate }) => {
  const { onUpdate, onDelete } = useContext(TodoContext);

  const onChangeCheckbox = () => {
    onUpdate(id);
  };
  const onDeleteTodo = () => {
    onDelete(id);
  };
  return (
    <div className="Todo">
      <div className="Todo_checkbox">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={onChangeCheckbox}
        />
      </div>
      <label htmlFor={id} className="Todo_text">
        {text}
      </label>
      <div className="Todo_date">
        {new Date(createDate).toLocaleDateString()}
      </div>
      <div className="Todo_btn">
        <button onClick={onDeleteTodo}>
          <TiDelete size={20} color="#D04848" />
        </button>
      </div>
    </div>
  );
};

export default Todo;
