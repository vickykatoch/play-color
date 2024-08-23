import { useCallback, useState } from 'react';
import { ResizablePanelItem, ResizablePanels } from '../resizable-panel';
import { dataItems, TempChild, TempChildHeader } from './temp-child';
import { PanelTestComponentItem } from './types';

const PanelTestComponent: React.FC = () => {
    const [panels, setPanels] = useState<ResizablePanelItem<PanelTestComponentItem>[]>(dataItems);
    const [orientation, setOrientation] = useState<'horizontal' | 'vertical'>('horizontal');
    const onSizeChanged = useCallback((items: ResizablePanelItem<PanelTestComponentItem>[]) => {
        // setPanels(items);
    }, []);

    return (
        <div className='d-flex flex-grow-1 flex-column bdr'>
            <div className='d-flex justify-content-end px-3 bdr'>
                <button
                    className='btn btn-primary btn-sm mx-1'
                    onClick={() => setOrientation(orientation === 'vertical' ? 'horizontal' : 'vertical')}
                >
                    Add Panel
                </button>
                <button
                    className='btn btn-primary btn-sm mx-1'
                    onClick={() => setOrientation(orientation === 'vertical' ? 'horizontal' : 'vertical')}
                >
                    Toggle orientation
                </button>
            </div>

            <ResizablePanels
                items={panels}
                itemHeader={item => <TempChildHeader {...item} />}
                itemBody={(item: any) => <TempChild id={item.id} dataItem={item.dataItem} />}
                orientation={orientation}
                onSizeChanged={onSizeChanged}
            />
        </div>
    );
};
export default PanelTestComponent;
