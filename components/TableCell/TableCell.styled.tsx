import styled from 'styled-components';

export const Cell = styled.td<{ isActive?: boolean }>`
  text-align: center;
  border: 1px solid gray;
  font-size: 11px;
  background-color: ${props => (props.isActive ? 'yellow' : 'transparent')};
`;

export const Button = styled.button<{ as: string; padding?: string }>`
  border: none;
  padding: 0px;
  background: transparent;
  cursor: ${props => (props.as === 'button' ? 'pointer' : 'initial')};
  padding: ${props => props.padding};
`;

