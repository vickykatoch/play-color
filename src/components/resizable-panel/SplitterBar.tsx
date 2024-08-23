//#region imports
import { FC, useEffect, useMemo, useRef } from 'react';
import './SplitterBar.css';
//#endregion

//#region local types
interface SplitterBarProps {
    id: string;
    size: number;
    isVertical: boolean;
    lock?: boolean;
    onDragFinished?: (id: string, end: DragEvent) => void;
}
//#endregion

export const SplitterBar: FC<SplitterBarProps> = ({ id, size, isVertical, lock, onDragFinished }) => {
    //#region state
    const ref = useRef<HTMLDivElement>(null);
    const style = useMemo(
        () => ({
            width: isVertical ? '100%' : size,
            height: isVertical ? size : '100%',
            cursor: lock ? 'default' : isVertical ? 'n-resize' : 'e-resize',
        }),
        [isVertical, size, lock],
    );
    //#endregion

    //#region side effects
    useEffect(() => {
        const elem = ref.current;
        const onDragEnd = (e: DragEvent) => onDragFinished?.(id, e);

        elem?.addEventListener('dragend', onDragEnd);

        return () => {
            elem?.removeEventListener('dragend', onDragEnd);
        };
    }, [id, onDragFinished]);
    //#endregion

    //#region render
    return <div className='splitter' style={style} ref={ref} draggable={!lock}></div>;
    //#endregion
};
