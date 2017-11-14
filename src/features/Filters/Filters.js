import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setFilter, clearCompletedTodos} from './actions';

class Filters extends Component {
  static propTypes = {
    setAllFilter: PropTypes.func.isRequired,
    setActiveFilter: PropTypes.func.isRequired,
    setInActiveFilter: PropTypes.func.isRequired,
    clearCompletedTodos: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired
  };

  render() {
    const {todos} = this.props;
    let todoCounter = 0;

    todos.map(todo => !todo.isCompleted ? todoCounter++ : null);
    return (
      <div>
      Show:
        {' '}
        <a href="#" onClick={this.props.setAllFilter}>All</a>
        {', '}
        <a href="#" onClick={this.props.setActiveFilter}>Active</a>
        {', '}
        <a href="#" onClick={this.props.setInActiveFilter}>Completed</a>
        <div>{todoCounter} {todoCounter === 1 ? ' Item left' : ' Items left '}</div>
        <button onClick={this.props.clearCompletedTodos}>Clear completed</button>
      </div>
    );
  }
}

const matStateToProps = state => {
  return {
    todos: state.todos.todoList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setAllFilter: () => {
      dispatch(setFilter('SHOW_ALL'));
    },
    setActiveFilter: () => {
      dispatch(setFilter('SHOW_ACTIVE'));
    },
    setInActiveFilter: () => {
      dispatch(setFilter('SHOW_INACTIVE'));
    },
    clearCompletedTodos: () => {
      dispatch(clearCompletedTodos());
    }
  };
};

export default connect(matStateToProps, mapDispatchToProps)(Filters);
