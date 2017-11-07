import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Todo from '../components/Todo';

function TodoList(props) {
  const todos = props.todos;
  // Правильно ли так передавать item?
  let todoList = todos.map(item => <Todo key = {item.id} item = {item} />);
  return (
    <ul>
      <h2>ToDo List:</h2>
      {todoList}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(TodoList);
