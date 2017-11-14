import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addTodo} from '../shared/todos/toDoActions';

class CreateTodo extends Component {
  static propTypes = {
    createTodo: PropTypes.func.isRequired
  };

  input = null;

  handleDispatchAddition = () => {
    this.props.createTodo({
      id: Date.now(),
      todo: this.input.value,
      isOpened: false
    });

    this.input.value = '';
  }

  render() {
    return (
      <div>
        <input ref={(input) => {this.input = input;}} type="text" placeholder="Add some text"/>
        <button onClick={this.handleDispatchAddition}>Add todo</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createTodo: (data) => {
      dispatch(addTodo(data));
    }
  };
};

export default connect(null, mapDispatchToProps)(CreateTodo);
