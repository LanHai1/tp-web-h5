import React, { Component } from 'react';
import { Button } from 'antd-mobile';

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return <Button type="primary">primary</Button>;
  }
}
