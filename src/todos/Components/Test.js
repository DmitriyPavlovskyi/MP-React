import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

function Test(props) {
  const todos = props.todos;

  let test = todos.map(item => <li key = {item.id}>{item.todo}</li>);
  return (
    <ul>
      <h2>ToDo List:</h2>
      {test}
    </ul>
  );
}

Test.propTypes = {

};

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(Test);
