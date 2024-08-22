import { FC, ReactNode } from 'react';
import { ResizablePanelItem } from './types';

interface PanelItemProps {
  item: ResizablePanelItem;
  header: ReactNode;
  children: ReactNode;
}

export const PanelItem: FC<PanelItemProps> = ({ header, children, item }) => {
  return (
    <div className="d-flex flex-grow-1 flex-column">
      <div className="d-flex flex-row">{header}</div>
      <div className="d-flex flex-grow-1">{children}</div>
    </div>
  );
};
