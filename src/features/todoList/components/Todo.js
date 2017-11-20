import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Todo.css';

const Todo = (props) => {
  const {item, deleteTodo, toggleOpen, isOpened, updateTodo, isCompleted, toggleCompleted} = props;

  // Как можно stateless компоненту передать ref чтоб не делать такие костыли?
  function updateTodoData(ev) {
    updateTodo(ev.target.previousSibling.value);
  }
  // Как правильнее передать в новый инпут значение todo?
  return (
    <li className="todo__item">
      {isOpened ?
        <div>
          <input type="text" placeholder="Enter new value"/>
          <button onClick={updateTodoData}>Save</button>
          <button onClick={toggleOpen}>Cancel</button>
        </div> :
        <div>
          <span
            style={{textDecoration: isCompleted ? 'line-through' : 'none'}}
            onClick={toggleCompleted}>{item.todo}
          </span>
          <div className="todo__buttons-wrapper">
            <button onClick={toggleOpen} className="btn btn-sm btn-info todo__button">Edit</button>
            <button onClick={deleteTodo} className="btn btn-sm btn-danger todo__button">Delete</button>
          </div>
        </div>
      }
    </li>
  );
};

Todo.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    todo: PropTypes.string,
    isCompleted: PropTypes.bool.isRequired
  }),
  deleteTodo: PropTypes.func.isRequired,
  toggleOpen: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  isOpened: PropTypes.bool.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  toggleCompleted: PropTypes.func.isRequired
};

export default Todo;
