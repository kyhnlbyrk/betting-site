import styled from 'styled-components';

export const Cell = styled.td<{ isActive: boolean; padding?: string }>`
  text-align: center;
  border: 1px solid gray;
  padding: ${props => props.padding};
  font-size: 11px;
  background-color: ${props => (props.isActive ? 'yellow' : 'transparent')};
`;
