import React, {Component} from 'react';
import PropTypes from 'prop-types';
// Как можно удобнее передать аргументы?
const Todo = (props) => {
  const {item, deleteTodo, toggleOpen, isOpened, updateTodo, isCompleted, toggleCompleted} = props;
  // sendId = () => {
  //   this.props.deleteTodo(this.props.item.id);
  // }
  // let test = isOpened ? <h2>'test'</h2> : <h2>'false'</h2>;

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
          <h2
            style={{textDecoration: isCompleted ? 'line-through' : 'none'}}
            onClick={toggleCompleted}>{item.todo}
          </h2>
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
