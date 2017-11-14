import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setFilter} from './actions';

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
      dispatch(setFilter('SHOW_ALL'));
    },
    setActiveFilter: () => {
      dispatch(setFilter('SHOW_ACTIVE'));
    },
    setInActiveFilter: () => {
      dispatch(setFilter('SHOW_INACTIVE'));
    }
  };
};

export default connect(null, mapDispatchToProps)(Filters);
