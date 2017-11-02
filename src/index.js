import React, {Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';

class App extends Component {
    static propTypes = {
    };

    render() {
      return (
        <h2>Hello World!</h2>
      );
    }
}

render(<App />, document.getElementById('container'));
