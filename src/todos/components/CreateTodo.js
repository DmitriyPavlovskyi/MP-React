import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {addTodo} from '../actions';
import {connect} from 'react-redux';

class CreateTodo extends Component {
  static propTypes = {
    createTodo: PropTypes.func.isRequired
  };

  input = null;

  onClickAddToDoButton = () => {
    this.props.createTodo({
      id: Date.now(),
      todo: this.input.value
    });
    this.input.value = '';
  }

  render() {
    return (
      <div>
        <input ref={(input) => {this.input = input;}} type="text" placeholder="Add some text"/>
        <button onClick={this.onClickAddToDoButton}>Add todo</button>
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
