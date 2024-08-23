import { FC, memo } from 'react';
import { PanelTestComponentItem } from './types';
import { ResizablePanelItem } from '../resizable-panel';

interface TempChildProps {
    id: string;
    dataItem: PanelTestComponentItem;
}

export const TempChild: FC<TempChildProps> = memo(({ id, dataItem }) => {
    console.log('TempChild', id);
    return (
        <div>
            <div>{dataItem.name}</div>
            <div>{dataItem.title}</div>
        </div>
    );
});

export const TempChildHeader: FC<ResizablePanelItem<PanelTestComponentItem>> = memo(props => {
    console.log('TempChildHeader');
    return (
        <div>
            <div>Header : {props.dataItem.title}</div>
        </div>
    );
});

export const dataItems: ResizablePanelItem<PanelTestComponentItem>[] = [
    { id: 'One', dataItem: { name: 'item1', title: 'Title 1' } },
    { id: 'Two', dataItem: { name: 'item2', title: 'Title 2' } },
    { id: 'Three', dataItem: { name: 'item3', title: 'Title 3' } },
];
