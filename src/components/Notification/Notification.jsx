import React, { Component } from 'react';

export default class Notification extends Component {
  render() {
    return <p className="notification">{this.props.message}</p>;
  }
}
