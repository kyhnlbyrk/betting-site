import * as React from 'react';
import { Cell } from './TableCell.styled';
import { TableCellProps } from './TableCell.types';

const TableCell: React.FunctionComponent<TableCellProps> = props => {
  const { children, isActive, padding } = props;
  return <Cell padding={padding} isActive={isActive}>{children}</Cell>;
};

TableCell.defaultProps = {
  padding: '12px'
}

export default TableCell;
