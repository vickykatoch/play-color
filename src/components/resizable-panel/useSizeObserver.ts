import { useEffect, useState } from 'react';
import { ResizablePanelItem } from './types';
import { PanelSizeManager } from './SizeManager';

interface UseResizeObserverReturn {
    sizeAdjustedItems: ResizablePanelItem[];
    sizeManager: PanelSizeManager | null;
}

export function useSizeObserver(items: ResizablePanelItem[], isVertical: boolean, parentElem: HTMLElement | null) {
    const [state, setState] = useState<UseResizeObserverReturn>({ sizeAdjustedItems: [], sizeManager: null });

    useEffect(() => {
        const sizeManager = new PanelSizeManager(items, isVertical);
        // const sub = sizeManager.sizeChanged$.subscribe(items => setState({ sizeAdjustedItems: items, sizeManager }));
        const sub = sizeManager.sizeChanged$.subscribe(changedItems => {
            setState({ sizeAdjustedItems: changedItems, sizeManager });
        });
        sizeManager.resolveSize();

        return () => {
            sub.unsubscribe();
            sizeManager.dispose();
        };
    }, [items, isVertical]);

    useEffect(() => {
        if (parentElem) {
            state?.sizeManager?.observeParentSizeChange(parentElem);
        }
    }, [parentElem, state?.sizeManager]);

    return state;
}
