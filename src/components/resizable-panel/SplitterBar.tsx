import { FC, useEffect, useMemo, useRef } from 'react';
import './SplitterBar.css';
interface SplitterBarProps {
    id: string;
    size: number;
    isVertical: boolean;
    lock?: boolean;
    onDragFinished?: (id: string, end: DragEvent) => void;
}

export const SplitterBar: FC<SplitterBarProps> = ({ id, size, isVertical, lock, onDragFinished }) => {
    const ref = useRef<HTMLDivElement>(null);
    const style = useMemo(
        () => ({
            width: isVertical ? '100%' : size,
            height: isVertical ? size : '100%',
            cursor: lock ? 'default' : isVertical ? 'n-resize' : 'e-resize',
        }),
        [isVertical, size, lock],
    );
    useEffect(() => {
        const refInstance = ref.current;
        const onDragEnd = (e: DragEvent) => onDragFinished?.(id, e);

        refInstance?.addEventListener('dragend', onDragEnd);

        return () => {
            refInstance?.removeEventListener('dragend', onDragEnd);
        };
    }, [id, onDragFinished]);

    return <div className='splitter' style={style} ref={ref} draggable={!lock}></div>;
};
