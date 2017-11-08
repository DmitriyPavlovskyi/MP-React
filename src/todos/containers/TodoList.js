import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Todo from '../components/Todo';
import {deleteTodo, toggleTodo} from '../actions';

class TodoList extends Component {
  // handleDeletion = (id) => {
  //   console.log('Delete item');
  //   this.props.deleteTodo(id);
  // }

  render() {
    const todos = this.props.todos;
    // Правильно ли так передавать item?
    // Как лучше передавать:
    // 1- {this.props.deleteTodo.bind(null, item.id)}
    // 2- закомментированное
    let todoList = todos.map(item => (<Todo
      key = {item.id}
      deleteTodo = {this.props.deleteTodo.bind(null, item.id)}
      toggleOpen = {this.props.toggleOpen.bind(null, item.id)}
      isOpened={item.isOpened}
      item = {item}
    />));
    return (
      <ul>
        <h2>ToDo List:</h2>
        {todoList}
      </ul>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleOpen: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id) => {
      dispatch(deleteTodo(id));
    },
    toggleOpen: (id) => {
      dispatch(toggleTodo(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
