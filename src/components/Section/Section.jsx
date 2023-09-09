import React, { Component } from 'react';
import { SectionContainer, SectionTitle } from './Section.styled';

export default class Section extends Component {
  render() {
    return (
      <SectionContainer>
        <SectionTitle>{this.props.title}</SectionTitle>

        {this.props.children}
      </SectionContainer>
    );
  }
}
