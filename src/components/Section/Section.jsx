import React, { Component } from 'react';
import './section.css';

export default class Section extends Component {
  render() {
    return (
      <div className="section">
        <h2 className="section-title">{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
}
