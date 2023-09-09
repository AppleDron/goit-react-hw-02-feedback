import styled from 'styled-components';

export const FeedbackOptionsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const FeedbackOptionsButton = styled.button`
  background-color: teal;
  border-radius: 8px;
  border-style: none;
  color: #ffffff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  padding: 10px 16px;
  text-align: center;
  transition: color 100ms;

  &:hover {
    background-color: cadetblue;
  }
`;
