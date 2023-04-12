import * as React from 'react';
import { HEADERS } from '../../constants';
import TableCell from '../TableCell';
import { Row } from './TableRow.styled';
import { TableRowProps } from './TableRow.types';

const TableRow: React.FunctionComponent<TableRowProps> = props => {
  const { data, selectedCellData, changeBasketData } = props;
  return (
    <>
      <Row>
        {HEADERS.map((header, index) => (
          <TableCell key={`${data.NID}-${header}-${index}`} id={`${data.NID}-${header}`} padding="0px">{`${index === 0 ? `${data.D} ${data.DAY} ${data.LN}` : header}`}</TableCell>
        ))}
      </Row>
      <Row>
        <TableCell id={`${data.NID}-name`} key={`${data.NID}-name`}>
          <b>{data.C}</b>
          {` ${data.T} ${data.N}`}
        </TableCell>
        <TableCell key={`${data.NID}-comments`} id={`${data.NID}-comments`}>
          Yorumlar
        </TableCell>
        <TableCell key={`${data.NID}-mbs`} id={`${data.NID}-mbs`}>
          {data.OCG[1].MBS}
        </TableCell>
        <TableCell
          changeBasketData={changeBasketData}
          isActive={selectedCellData?.id === `${data.NID}-ocg-1-oc-0-o`}
          data={data}
          key={`${data.NID}-ocg-1-oc-0-o`}
          id={`${data.NID}-ocg-1-oc-0-o`}
          rate={data.OCG[1].OC[0].O}
        >
          {data.OCG[1].OC[0].O}
        </TableCell>
        <TableCell
          changeBasketData={changeBasketData}
          isActive={selectedCellData?.id === `${data.NID}-ocg-1-oc-1-o`}
          data={data}
          key={`${data.NID}-ocg-1-oc-1-o`}
          id={`${data.NID}-ocg-1-oc-1-o`}
          rate={data.OCG[1].OC[1].O}
        >
          {data.OCG[1].OC[1].O}
        </TableCell>
        <TableCell key={`${data.NID}-empty-1`} id={`${data.NID}-empty-1`} />
        <TableCell
          changeBasketData={changeBasketData}
          isActive={selectedCellData?.id === `${data.NID}-ocg-5-oc-25-o`}
          data={data}
          key={`${data.NID}-ocg-5-oc-25-o`}
          id={`${data.NID}-ocg-5-oc-25-o`}
          rate={data.OCG[5].OC[25].O}
        >
          {data.OCG[5].OC[25].O}
        </TableCell>
        <TableCell
          changeBasketData={changeBasketData}
          isActive={selectedCellData?.id === `${data.NID}-ocg-5-oc-26-o`}
          data={data}
          key={`${data.NID}-ocg-5-oc-26-o`}
          id={`${data.NID}-ocg-5-oc-26-o`}
          rate={data.OCG[5].OC[26].O}
        >
          {data.OCG[5].OC[26].O}
        </TableCell>
        <TableCell key={`${data.NID}-empty-2`} id={`${data.NID}-empty-2`}></TableCell>
        <TableCell key={`${data.NID}-empty-3`} id={`${data.NID}-empty-3`}></TableCell>
        <TableCell key={`${data.NID}-empty-4`} id={`${data.NID}-empty-4`}></TableCell>
        <TableCell key={`${data.NID}-empty-5`} id={`${data.NID}-empty-5`}></TableCell>
        <TableCell key={`${data.NID}-empty-6`} id={`${data.NID}-empty-6`}></TableCell>
        <TableCell
          changeBasketData={changeBasketData}
          isActive={selectedCellData?.id === `${data.NID}-ocg-2-oc-3-o`}
          data={data}
          key={`${data.NID}-ocg-2-oc-3-o`}
          id={`${data.NID}-ocg-2-oc-3-o`}
          rate={data.OCG[2].OC[3].O}
        >
          {data.OCG[2].OC[3].O}
        </TableCell>
        <TableCell
          changeBasketData={changeBasketData}
          isActive={selectedCellData?.id === `${data.NID}-ocg-2-oc-4-o`}
          data={data}
          key={`${data.NID}-ocg-2-oc-4-o`}
          id={`${data.NID}-ocg-2-oc-4-o`}
          rate={data.OCG[2].OC[4].O}
        >
          {data.OCG[2].OC[4].O}
        </TableCell>
        <TableCell
          changeBasketData={changeBasketData}
          isActive={selectedCellData?.id === `${data.NID}-ocg-2-oc-5-o`}
          data={data}
          key={`${data.NID}-ocg-2-oc-5-o`}
          id={`${data.NID}-ocg-2-oc-5-o`}
          rate={data.OCG[2].OC[5].O}
        >
          {data.OCG[2].OC[5].O}
        </TableCell>
        <TableCell key={`${data.NID}-empty-7`} id={`${data.NID}-empty-7`}></TableCell>
        <TableCell key={`${data.NID}-empty-8`} id={`${data.NID}-empty-8`}></TableCell>
        <TableCell key={`${data.NID}-3`} id={`${data.NID}-3`}>
          3
        </TableCell>
      </Row>
    </>
  );
};

export default React.memo(TableRow);
