import * as React from 'react';

import { useBasketContext } from '../../context/basket';
import { DATA } from '../../models';
import { BasketWrapper, TotalPrice, ItemWrapper } from './Basket.styled';

const Basket: React.FunctionComponent = () => {
  const { basketData } = useBasketContext();

  const renderBasketItem = (_data: DATA) => {
    return (
      <ItemWrapper>
        {`${_data.OCG[1].MBS} Kod: ${_data.C} Maç: ${_data.N}`} <b>{`Oran:  ${_data.rate}`}</b>
      </ItemWrapper>
    );
  };

  const $totalAmount = basketData.reduce((acc, { rate }) => rate ? acc * rate : acc, basketData.length > 0 ? 1 : 0).toFixed(2);

  return (
    <BasketWrapper>
      <>
        {basketData.map(item => renderBasketItem(item))}
        <TotalPrice>Toplam Tutar: {`${$totalAmount} TL`}</TotalPrice>
      </>
    </BasketWrapper>
  );
};

export default Basket;
