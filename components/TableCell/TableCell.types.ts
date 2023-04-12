import { ReactNode } from 'react';
import { BasketContextType } from '../../context/basket';
import { DATA } from '../../models';

export interface TableCellProps extends Omit<BasketContextType, 'basketData'> {
  children?: ReactNode;
  padding?: string;
  data?: DATA;
  id?: string;
  isActive?: boolean;
  rate?: number;
}
