import { render, screen } from '@testing-library/react';
import { PanelItem } from './PanelItem';
import { ResizablePanelItem } from './types';

describe('PanelItem', () => {
    const mockItem: ResizablePanelItem = {
        id: '1',
        dataItem: { name: 'Test Item', title: 'Test Item' },
        horizontalSize: 50,
        verticalSize: 50,
    };

    it('renders the header and children correctly', () => {
        render(
            <PanelItem item={mockItem} header={<h2>Header</h2>} vertical={false}>
                <p>Content</p>
            </PanelItem>,
        );

        expect(screen.getByText('Header')).toBeInTheDocument();
        expect(screen.getByText('Content')).toBeInTheDocument();
    });
});
