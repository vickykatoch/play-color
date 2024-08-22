import { useState } from 'react';
import { ResizablePanels } from '../resizable-panel';
import { dataItems, TempChild, TempChildHeader } from './temp-child';

const PanelTestComponent: React.FC = () => {
  const [orientation, setOrientation] = useState<'horizontal' | 'vertical'>('horizontal');
  return (
    <div className="d-flex flex-grow-1 flex-column bdr">
      <div className="d-flex justify-content-end px-3 bdr">
        <button
          className="btn btn-primary btn-sm"
          onClick={() => setOrientation(orientation === 'vertical' ? 'horizontal' : 'vertical')}
        >
          Toggle orientation
        </button>
      </div>

      <ResizablePanels
        items={dataItems}
        itemHeader={(item) => <TempChildHeader {...item} />}
        itemBody={(item: any) => <TempChild {...item} />}
        orientation={orientation}
      />
    </div>
  );
};
export default PanelTestComponent;
