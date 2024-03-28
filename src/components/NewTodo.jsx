import React, { useContext, useRef, useState } from 'react';
import './NewTodo.css';
import { TodoContext } from '../App';
import { FaPlus } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const NewTodo = () => {
  const { onAdd } = useContext(TodoContext);
  const [text, setText] = useState('');
  const handleChange = (e) => setText(e.target.value);

  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      inputRef.current.focus();
      return;
    }
    onAdd({
      id: uuidv4(),
      text,
      checked: false,
      createDate: new Date().getTime(),
    });
    setText('');
  };
  return (
    <form className="NewTodo" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="할 일을 입력하세요"
        value={text}
        onChange={handleChange}
      ></input>
      <button>
        <FaPlus />
      </button>
    </form>
  );
};

export default NewTodo;
