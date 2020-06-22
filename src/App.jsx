import React, { Component } from 'react';
import MainFrom from './main/mainFrom';
import 'core-js/fn/map';
import 'core-js/fn/set';

import './scss/App.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="box">
        <MainFrom />
      </div>
    );
  }
}
