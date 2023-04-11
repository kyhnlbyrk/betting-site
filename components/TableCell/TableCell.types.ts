import { ReactNode } from 'react';

export interface TableCellProps {
  children: ReactNode;
  isActive: boolean;
  padding?: string;
}
