import { FC, Fragment, ReactNode, useCallback, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { PanelItem } from './PanelItem';
import { SplitterBar } from './SplitterBar';
import { Orientation, ResizablePanelItem } from './types';
import { useSizeObserver } from './useSizeObserver';

interface ResizablePanelProps {
    itemHeader: (item: ResizablePanelItem) => ReactNode;
    itemBody: (item: ResizablePanelItem) => ReactNode;
    onSizeChanged?: (items: ResizablePanelItem[]) => void;
    items: ResizablePanelItem[];
    orientation?: Orientation;
    lock?: boolean;
    splitterSize?: number;
}

export const ResizablePanels: FC<ResizablePanelProps> = ({
    items,
    itemHeader,
    itemBody,
    orientation = 'vertical',
    splitterSize = 5,
    onSizeChanged,
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const isVertical = orientation === 'vertical';
    const { sizeAdjustedItems, sizeManager } = useSizeObserver(items, isVertical, ref.current);

    const onDragFinished = useCallback(
        (id: string, start: DragEvent, end: DragEvent) => {
            sizeManager?.updateSize(id, isVertical ? end.offsetY : end.offsetX);
        },
        [isVertical, sizeManager],
    );

    useEffect(() => {
        sizeAdjustedItems.length && onSizeChanged?.(sizeAdjustedItems);
    }, [onSizeChanged, sizeAdjustedItems]);

    return (
        <div className={classNames('d-flex fill', isVertical ? 'flex-column' : 'flex-row')} ref={ref}>
            {sizeAdjustedItems.map((item, index) => {
                return (
                    <Fragment key={item.id}>
                        <PanelItem header={itemHeader(item)} item={item} vertical={isVertical}>
                            {itemBody(item)}
                        </PanelItem>
                        <SplitterBar
                            id={item.id}
                            size={splitterSize}
                            isVertical={isVertical}
                            hide={index === items.length - 1}
                            onDragFinished={onDragFinished}
                        />
                    </Fragment>
                );
            })}
        </div>
    );
};
