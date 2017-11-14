import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Todo = (props) => {
  const {item, deleteTodo, toggleOpen, isOpened, updateTodo, isCompleted, toggleCompleted} = props;

  // Как можно stateless компоненту передать ref чтоб не делать такие костыли?
  function updateTodoData(ev) {
    updateTodo(ev.target.previousSibling.value);
  }
  // Как правильнее передать в новый инпут значение todo?
  return (
    <li>
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
          <button onClick={toggleOpen}>Edit</button>
          <button onClick={deleteTodo}>Delete</button>
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
