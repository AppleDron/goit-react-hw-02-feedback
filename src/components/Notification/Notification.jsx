import React, { Component } from 'react';

export default class Notification extends Component {
  render() {
    return <p>{this.props.message}</p>;
  }
}
