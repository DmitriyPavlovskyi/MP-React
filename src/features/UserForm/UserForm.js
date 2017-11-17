import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import {errorStyles} from '../shared/formsValidationStyles';
import submit from './submit';

//-----------Не совсем понятна эта функция-----------
const renderField = ({input, label, type, meta: { touched, error }}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span style={errorStyles}>{error}</span>}
    </div>
  </div>
);

const SubmitValidationForm = props => {
  const { error, handleSubmit, pristine, reset, submitting } = props;

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
      />
      <Field
        name="password"
        type="password"
        component={renderField}
        label="Password"
      />
      {error && <strong>{error}</strong>}
      <div>
        <button type="submit" disabled={submitting}>
          Log In
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

SubmitValidationForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default reduxForm({
  form: 'SubmitValidationForm'
})(SubmitValidationForm);
