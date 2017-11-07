import React from 'react';
import PropTypes from 'prop-types';

function Todo(props) {
  const {item} = props;

  return (
    <li>{item.todo}</li>
  );
}

Todo.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    todo: PropTypes.string,
    isCompleted: PropTypes.bool.isRequired
  })
};

export default Todo;
