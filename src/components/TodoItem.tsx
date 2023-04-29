import React from 'react';
import './TodoItem.module.css';


const TodoItem: React.FC<{ text: string; onRemoveTodo: (event: React.MouseEvent) => void }> = (props) => {
  return <li className='item' onClick={props.onRemoveTodo}>{props.text}</li>
};

export default TodoItem;