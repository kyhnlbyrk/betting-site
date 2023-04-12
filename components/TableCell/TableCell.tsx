import * as React from 'react';
import { Button, Cell } from './TableCell.styled';
import { TableCellProps } from './TableCell.types';

const TableCell: React.FunctionComponent<TableCellProps> = props => {
  const { children, padding, data, isActive, id, rate, changeBasketData } = props;

  const onClick = () => {
    if (data && id && changeBasketData) {
      changeBasketData({ ...data, id, rate }, !isActive);
    }
  };
  return (
    <Cell isActive={isActive}>
      <Button onClick={() => onClick()} padding={padding} as={!data ? 'div' : 'button'}>
        {children}
      </Button>
    </Cell>
  );
};

TableCell.defaultProps = {
  padding: '12px',
};

export default React.memo(TableCell);
