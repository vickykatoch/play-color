import { FC, useEffect, useMemo, useRef } from 'react';
interface SplitterBarProps {
  id: string;
  size: number;
  isVertical: boolean;
  hide?: boolean;
  lock?: boolean;
  onDragging?: (e: DragEvent) => void;
  onDragFinished?: (id: string, start: DragEvent, end: DragEvent) => void;
}

export const SplitterBar: FC<SplitterBarProps> = ({
  id,
  size,
  isVertical,
  hide = false,
  lock,
  onDragging,
  onDragFinished,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const style = useMemo(
    () => ({
      width: isVertical ? '100%' : size,
      height: isVertical ? size : '100%',
      background: '#f0f0f0',
      cursor: lock ? 'default' : isVertical ? 'n-resize' : 'e-resize',
    }),
    [isVertical, size, lock],
  );
  useEffect(() => {
    const refInstance = ref.current;
    let start: DragEvent | null = null;
    const onDragStart = (e: DragEvent) => {
      start = e;
      onDragging?.(e);
    };
    const onDragEnd = (e: DragEvent) => {
      onDragFinished?.(id, start!, e);
    };
    refInstance?.addEventListener('dragstart', onDragStart);
    refInstance?.addEventListener('dragend', onDragEnd);

    return () => {
      refInstance?.removeEventListener('dragstart', onDragStart);
      refInstance?.removeEventListener('dragend', onDragEnd);
    };
  }, [id, onDragFinished, onDragging]);

  return <div style={style} ref={ref} draggable={!lock}></div>;
};
