import React, { Component } from 'react';
import './FeedbackOptions.css';

export default class FeedbackOptions extends Component {
  handleClick = e => {
    this.props.getFeedbacks(e.target.name);
  };

  render() {
    return (
      <>
        <div className="feedback-options">
          <button name="good" onClick={this.handleClick}>
            Good
          </button>
          <button name="neutral" onClick={this.handleClick}>
            Neutral
          </button>
          <button name="bad" onClick={this.handleClick}>
            Bad
          </button>
        </div>
      </>
    );
  }
}
