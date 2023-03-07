import React from 'react';

import TodoItem from './TodoItem';
import Todo from '../models/todo';
import classes from './Todos.module.css';

const Todos: React.FC<{ items: Todo[], onDeleteTodo: (id: string) => void }> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem id={item.id} key={item.id} text={item.text} onDelete={props.onDeleteTodo} />
      ))}
    </ul>
  );
};

export default Todos;
