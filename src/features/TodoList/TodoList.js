import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Todo from './components/Todo';
import {deleteTodo, toggleTodo, updateTodo, toggleCompleted} from '../shared/todos/toDoActions';

class TodoList extends Component {
  render() {
    const todos = this.props.todos;
    let activeFilters = todos.filter(item => !item.isCompleted);
    let inActiveFilters = todos.filter(item => item.isCompleted);
    const filters = {
      SHOW_ALL: todos,
      SHOW_ACTIVE: activeFilters,
      SHOW_INACTIVE: inActiveFilters
    };

    let todoList = filters[this.props.activeFilter].map(item => (<Todo
      key = {item.id}
      deleteTodo = {this.props.deleteTodo.bind(null, item.id)}
      toggleOpen = {this.props.toggleOpen.bind(null, item.id)}
      toggleCompleted = {this.props.toggleCompleted.bind(null, item.id)}
      updateTodo = {this.props.updateTodo.bind(null, item.id)}
      isOpened={item.isOpened}
      isCompleted={item.isCompleted}
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
  toggleOpen: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  toggleCompleted: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos.todoList,
    activeFilter: state.filters
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id) => {
      dispatch(deleteTodo(id));
    },
    toggleOpen: (id) => {
      dispatch(toggleTodo(id));
    },
    updateTodo: (id, data) => {
      dispatch(updateTodo(id, data));
    },
    toggleCompleted: (id) => {
      dispatch(toggleCompleted(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
