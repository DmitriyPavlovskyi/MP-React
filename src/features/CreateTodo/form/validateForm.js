export const validate = values => {
  const errors = {};

  if (!values.todoValue) {
    errors.todoValue = 'Is required';
  } else if (values.todoValue.length > 15) {
    errors.todoValue = 'Task is too long';
  }

  return errors;
};

export const warn = values => {
  const warnings = {};

  if (values.todoValue && values.todoValue.length <= 5) {
    warnings.todoValue = 'Task is slightly short';
  }
  return warnings;
};
