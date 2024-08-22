import { ResizablePanelItem } from './types';

export class PanelSizeManager {
  private _parentSizeObserver?: ResizeObserver;
  private _parentPanelSize?: DOMRectReadOnly;

  constructor(private items: ResizablePanelItem[], vertical: boolean) {
    //
  }
  resolveSize(items?: ResizablePanelItem[]) {
    return items || this.items;
  }
  updateSize(id: string, size: number) {}

  dispose() {
    this._parentSizeObserver?.disconnect();
  }

  public observeParentSizeChange(parentElem: HTMLElement) {
    const observer = new ResizeObserver((entries) => {
      this._parentPanelSize = entries[0].contentRect;
      console.log('parent size changed : ', entries[0]);
    });
    observer.observe(parentElem);
    this._parentSizeObserver = observer;
  }
}
