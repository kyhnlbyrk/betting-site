import React, { createContext, useContext, ReactNode, useState } from 'react';
import { DATA } from '../../models';

export type BasketContextType = {
  basketData: DATA[];
  changeBasketData?: (selectedData: DATA, update: boolean) => void;
};

export const InitialData: BasketContextType = {
  basketData: [],
  changeBasketData: () => null,
};

export const BasketContext = createContext<BasketContextType>(InitialData);

export const useBasketContext = () => {
  return useContext(BasketContext);
};

type Props = {
  children: ReactNode;
};

export const BasketProvider = ({ children }: Props) => {
  const [basketData, setBasketData] = useState<DATA[]>([]);

  const changeBasketData = React.useCallback((_basketData: DATA, update: boolean) => {
    setBasketData(prevState => {
      const newArr = [...prevState];
      const index = newArr.findIndex(x => x.NID === _basketData.NID);
      if (index === -1) newArr.push(_basketData);
      else if (update) newArr[index] = _basketData;
      else newArr.splice(index, 1);
      return newArr;
    });
  }, []);

  const value = {
    basketData,
    changeBasketData,
  };

  return (
    <>
      <BasketContext.Provider value={value}>{children}</BasketContext.Provider>
    </>
  );
};
