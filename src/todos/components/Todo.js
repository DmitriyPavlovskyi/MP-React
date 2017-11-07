import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Todo = ({item, deleteTodo}) => {
  // sendId = () => {
  //   this.props.deleteTodo(this.props.item.id);
  // }

  return (
    <li>
      {item.todo}
      <button onClick={deleteTodo}>x</button>
    </li>
  );
};

Todo.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    todo: PropTypes.string,
    isCompleted: PropTypes.bool.isRequired
  }),
  deleteTodo: PropTypes.func.isRequired
};

export default Todo;
