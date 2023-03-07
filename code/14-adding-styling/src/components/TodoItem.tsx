import classes from './TodoItem.module.css';
import React from 'react';

const TodoItem: React.FC<{ text: string, id: string, onDelete: (id: string) => void }> = (props) => {
  function onClickHandler(e: React.MouseEvent) {
    props.onDelete(props.id);
  }

  return <li className={classes.item} onClick={onClickHandler}>{props.text}</li>;
};

export default TodoItem;
