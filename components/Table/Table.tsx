import * as React from 'react';
import { HEADERS } from '../../constants';
import { useBasketContext } from '../../context/basket';
import { DATA } from '../../models';
import TableHeader from '../TableHeader';
import TableRow from '../TableRow';
import { TableStyled } from './Table.styled';
import { TableProps } from './Table.types';

const Table: React.FunctionComponent<TableProps> = props => {
  const { visibleData, size } = props;

  const { changeBasketData, basketData } = useBasketContext();
  console.log('basketData = ', basketData);

  const selectedCellData = (_data: DATA) => {
    const index = basketData.findIndex(x => x.NID === _data.NID);
    return index === -1 ? undefined : basketData[index];
  };

  return (
    <TableStyled>
      <thead>
        <tr>
          {HEADERS.map((header, index) => (
            <TableHeader key={index}>{`${header}${index === 0 ? `: ${size}` : ''}`}</TableHeader>
          ))}
        </tr>
      </thead>
      <tbody>
        {visibleData.map(_data => (
          <TableRow changeBasketData={changeBasketData} key={_data.NID} data={_data} selectedCellData={selectedCellData(_data)} />
        ))}
      </tbody>
    </TableStyled>
  );
};

export default React.memo(Table);
