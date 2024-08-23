export interface ResizablePanelItem<T = any> {
    id: string;
    horizontalSize?: number;
    verticalSize?: number;
    dataItem: T;
}

export type Orientation = 'horizontal' | 'vertical';
