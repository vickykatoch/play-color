import { ResizablePanelItem } from './types';
import { Subject } from 'rxjs';

export class PanelSizeManager {
    private _parentSizeObserver?: ResizeObserver;
    private _parentPanelSize?: DOMRectReadOnly;
    private _sizeChangeNotifier = new Subject<ResizablePanelItem[]>();

    constructor(private items: ResizablePanelItem[], private vertical: boolean) {
        //
    }
    get sizeChanged$() {
        return this._sizeChangeNotifier.asObservable();
    }

    resolveSize() {
        const equalSize = 100 / this.items.length;
        this.items = this.items.map(item => {
            const size = (this.vertical ? item.verticalSize : item.horizontalSize) || equalSize;
            return {
                ...item,
                verticalSize: item.verticalSize || equalSize,
                horizontalSize: item.horizontalSize || equalSize,
            };
        });
        this._sizeChangeNotifier.next(this.items);
    }
    updateSize(id: string, size: number) {
        if (this._parentPanelSize) {
            const { height, width } = this._parentPanelSize;
            const totalSize = this.vertical ? height : width;
            const changePrcnt = (size / totalSize) * 100;
            const index = this.items.findIndex(item => item.id === id);
            if (this.vertical) {
                this.items[index].verticalSize! += changePrcnt;
                this.items[index + 1].verticalSize! -= changePrcnt;
            } else {
                this.items[index].horizontalSize! += changePrcnt;
                this.items[index + 1].horizontalSize! -= changePrcnt;
            }
            this.items = this.items.map(item => ({ ...item }));
            this._sizeChangeNotifier.next(this.items);
        }
    }

    dispose() {
        this._parentSizeObserver?.disconnect();
        this._sizeChangeNotifier.unsubscribe();
    }

    public observeParentSizeChange(parentElem: HTMLElement) {
        const observer = new ResizeObserver(entries => {
            this._parentPanelSize = entries[0].contentRect;
            console.log('parent size changed : ', entries[0]);
        });
        observer.observe(parentElem);
        this._parentSizeObserver = observer;
    }
}
