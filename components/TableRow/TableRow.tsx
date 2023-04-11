import * as React from 'react';
import { HEADERS } from '../../constants';
import TableCell from '../TableCell';
import { Row } from './TableRow.styled';
import { TableRowProps } from './TableRow.types';

const TableRow: React.FunctionComponent<TableRowProps> = props => {
  const { data } = props;
  return (
    <>
      <Row>
        {HEADERS.map((header, index) => (
          <TableCell key={header + index} padding='0px' isActive={false}>{`${index === 0 ? `${data.D} ${data.DAY} ${data.LN}` : header}`}</TableCell>
        ))}
      </Row>
      <Row>
        <TableCell key={'asdadas'} isActive={false}>a</TableCell>
        <TableCell key={'asdadasasd'} isActive={false}>a</TableCell>
        <TableCell key={'asd'} isActive={false}>a</TableCell>
        <TableCell key={'123123'} isActive={false}>a</TableCell>
        <TableCell key={'123'} isActive={false}>a</TableCell>
        <TableCell key={'sadsadfds'} isActive={false}>a</TableCell>
        <TableCell key={'sdfgdg'} isActive={false}>a</TableCell>
        <TableCell key={'tergt'} isActive={false}>a</TableCell>
        <TableCell key={'5tg'} isActive={false}>a</TableCell>
        <TableCell key={'rteg'} isActive={false}>a</TableCell>
        <TableCell key={'fdgds'} isActive={false}>a</TableCell>
        <TableCell key={'rt345'} isActive={false}>a</TableCell>
        <TableCell key={'asrtytedadas'} isActive={false}>a</TableCell>
        <TableCell key={'trhrhyt'} isActive={false}>a</TableCell>
        <TableCell key={'23435546'} isActive={false}>a</TableCell>
        <TableCell key={'jtrhr'} isActive={false}>a</TableCell>
        <TableCell key={'rtgdfssdf'} isActive={false}>a</TableCell>
        <TableCell key={'yt45654'} isActive={false}>a</TableCell>
        <TableCell key={'tjdfgfht'} isActive={false}>a</TableCell>
      </Row>
    </>
  );
};

export default React.memo(TableRow);
