import * as React from 'react';
import { Header } from './TableHeader.styled';
import { TableHeaderProps } from './TableHeader.types';

const TableHeader: React.FunctionComponent<TableHeaderProps> = props => {
  const { children } = props;
  return <Header>{children}</Header>;
};

export default TableHeader;
