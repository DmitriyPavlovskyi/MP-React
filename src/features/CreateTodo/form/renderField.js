import React from 'react';
import {errorStyles, warningStyles} from '../../shared/formsValidationStyles';

export const renderField = ({input, label, type, meta: { touched, error, warning }
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
