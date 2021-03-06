import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {addTodo} from '../shared/todos/toDoActions';
import {validate, warn} from './form/validateForm';
import {renderField} from './form/renderField';
import './CreateTodo.css';

class ContactForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    createTodo: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    pristine: PropTypes.bool,
    submitting: PropTypes.bool
  }

  handleNewData = (values) => {
    this.props.createTodo({
      id: Date.now(),
      todo: values.todoValue,
      isOpened: false
    });

    this.props.reset();
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.handleNewData)} className="create-todo">
        <Field name="todoValue" component={renderField} type="text" label="Enter Todo"/>
        <small className="form-text text-muted">What needs to be done?</small>
        <button className="btn btn-sm btn-success" disabled={this.props.pristine || this.props.submitting} >Add todo</button>
      </form>
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

export default connect(null, mapDispatchToProps)(reduxForm({
  form: 'Add todo',
  validate,
  warn
})(ContactForm));
