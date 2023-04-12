import { BasketContextType } from '../../context/basket';
import { DATA } from '../../models';

export interface TableRowProps extends Omit<BasketContextType, 'basketData'> {
  data: DATA;
  selectedCellData?: DATA;
}
