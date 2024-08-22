import { FC } from 'react';
import { PanelTestComponentItem } from './types';
import { ResizablePanelItem } from '../resizable-panel';

export const TempChild: FC<ResizablePanelItem<PanelTestComponentItem>> = (props) => {
  return (
    <div>
      <div>{props.dataItem.name}</div>
      <div>{props.dataItem.title}</div>
    </div>
  );
};

export const TempChildHeader: FC<ResizablePanelItem<PanelTestComponentItem>> = (props) => {
  return (
    <div>
      <div>Header : {props.dataItem.title}</div>
    </div>
  );
};

export const dataItems: ResizablePanelItem<PanelTestComponentItem>[] = [
  { id: 'One', dataItem: { name: 'item1', title: 'Title 1' } },
  { id: 'Two', dataItem: { name: 'item2', title: 'Title 2' } },
  { id: 'Three', dataItem: { name: 'item3', title: 'Title 3' } },
];
