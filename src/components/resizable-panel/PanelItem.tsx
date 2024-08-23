import { FC, ReactNode, useEffect, useState } from 'react';
import { ResizablePanelItem } from './types';

interface PanelItemProps {
    item: ResizablePanelItem;
    header: ReactNode;
    children: ReactNode;
    vertical: boolean;
}

export const PanelItem: FC<PanelItemProps> = ({ header, children, item, vertical }) => {
    const [style, setStyle] = useState<React.CSSProperties>({});

    useEffect(() => {
        if (vertical) {
            setStyle({ height: `${item.verticalSize}%` });
        } else {
            setStyle({ width: `${item.horizontalSize}%` });
        }
    }, [vertical, item.verticalSize, item.horizontalSize]);

    return (
        <div className='d-flex flex-column' style={style}>
            <div className='d-flex flex-row'>{header}</div>
            <div className='d-flex flex-grow-1'>{children}</div>
        </div>
    );
};
