import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import {addTodo} from '../shared/todos/toDoActions';
import {errorStyles, warningStyles} from '../shared/formsValidationStyles';

const validate = values => {
  const errors = {};

  if (!values.todoValue) {
    errors.todoValue = 'Is required';
  } else if (values.todoValue.length > 15) {
    errors.todoValue = 'Task is too long';
  }

  return errors;
};

const warn = values => {
  const warnings = {};

  if (values.todoValue && values.todoValue.length <= 5) {
    warnings.todoValue = 'Task is slightly short';
  }
  return warnings;
};

const renderField = ({input, label, type, meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span style={errorStyles}>{error}</span>) ||
          (warning && <span style={warningStyles}>{warning}</span>))}
    </div>
  </div>
);

class ContactForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    createTodo: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    pristine: PropTypes.bool,
    submitting: PropTypes.bool
  }

  handleNewData = (values) => {debugger
    this.props.createTodo({
      id: Date.now(),
      todo: values.todoValue,
      isOpened: false
    });

    this.props.reset();
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.handleNewData)}>
        <Field name="todoValue" component={renderField} type="text" label="Todo test"/>
        <button disabled={this.props.pristine || this.props.submitting} >Add todo</button>
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
