export interface ResizablePanelItem<T = any> {
  id: string;
  horizontalSize?: number;
  verticalSize?: number;
  currentSize?: number;
  dataItem: T;
}
