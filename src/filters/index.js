import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setAllFilter, setActiveFilter, setInActiveFilter} from './actions';

class Filters extends Component {
  static propTypes = {
    setAllFilter: PropTypes.func.isRequired,
    setActiveFilter: PropTypes.func.isRequired,
    setInActiveFilter: PropTypes.func.isRequired
  };

  render() {
    return (
      <div>
      Show:
        {' '}
        <a href="#" onClick={this.props.setAllFilter}>All</a>
        {', '}
        <a href="#" onClick={this.props.setActiveFilter}>Active</a>
        {', '}
        <a href="#" onClick={this.props.setInActiveFilter}>Completed</a>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setAllFilter: () => {
      dispatch(setAllFilter());
    },
    setActiveFilter: () => {
      dispatch(setActiveFilter());
    },
    setInActiveFilter: () => {
      dispatch(setInActiveFilter());
    }
  };
};

export default connect(null, mapDispatchToProps)(Filters);
