import React, { Component } from 'react';
import {
  FeedbackOptionsButton,
  FeedbackOptionsContainer,
} from './FeedbackOptions.styled';

export default class FeedbackOptions extends Component {
  handleClick = e => {
    this.props.getFeedbacks(e.target.name);
  };

  render() {
    return (
      <>
        <FeedbackOptionsContainer>
          <FeedbackOptionsButton name="good" onClick={this.handleClick}>
            Good
          </FeedbackOptionsButton>
          <FeedbackOptionsButton name="neutral" onClick={this.handleClick}>
            Neutral
          </FeedbackOptionsButton>
          <FeedbackOptionsButton name="bad" onClick={this.handleClick}>
            Bad
          </FeedbackOptionsButton>
        </FeedbackOptionsContainer>
      </>
    );
  }
}
