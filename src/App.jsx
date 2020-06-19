import React, { Component } from 'react';
import { Button } from 'antd-mobile';

import './scss/App.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="box">
        <Button type="primary">primary</Button>
        <p>配置scss</p>
      </div>
    );
  }
}
