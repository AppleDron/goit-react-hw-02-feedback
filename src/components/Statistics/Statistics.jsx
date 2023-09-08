import React, { Component } from 'react';

export default class Statistics extends Component {
  render() {
    const { good, neutral, bad } = this.props;
    const { countTotalFeedbacks, countPositiveFeedbackPercentage } = this.props;

    return (
      <>
        <div>
          <h3>Statistics</h3>
          <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
          </ul>
        </div>
        <p>Total: {countTotalFeedbacks()}</p>
        <p>Positive feedback: {countPositiveFeedbackPercentage()}%</p>
      </>
    );
  }
}
