import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Todo = ({item, deleteTodo, toggleOpen, isOpened}) => {
  // sendId = () => {
  //   this.props.deleteTodo(this.props.item.id);
  // }
  // let test = isOpened ? <h2>'test'</h2> : <h2>'false'</h2>;
  return (
    <li>
      {isOpened ?
        <div>
          <input type="text" placeholder="Enter new value"/>
          <button>Save</button>
          <button>Cancel</button>
        </div> :
        <div>
          <h2>{item.todo}</h2>
          <button onClick={deleteTodo}>Delete</button>
          <button onClick={toggleOpen}>Edit</button>
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
  isOpened: PropTypes.bool.isRequired
};

export default Todo;
