import React, { useEffect, useRef, useState } from 'react';
import { PositiveNegativeThreshold } from './PositiveNegativeThreshold';
import { getHeatMapGenerator, HeatMapStyleFunc } from './utils';
import { Square } from './Square';

interface HeatmapCellProps {
    minMaxFinder: PositiveNegativeThreshold;
    positiveColors: string[];
    negativeColors: string[];
}

const HeatmapCell: React.FC<HeatmapCellProps> = ({ minMaxFinder, positiveColors, negativeColors }) => {
    const [negThreshold, setNegThreshold] = useState<number>(-50);
    const [posThreshold, setPosThreshold] = useState<number>(50);
    const [value, setValue] = useState<number>(0);
    const [heatMap, setHeatmap] = useState<string>('');
    const hmRef = useRef<HeatMapStyleFunc>();

    useEffect(() => {
        hmRef.current = getHeatMapGenerator(positiveColors, negativeColors, minMaxFinder);
    }, [positiveColors, negativeColors, minMaxFinder]);

    useEffect(() => {
        minMaxFinder.updateThreshold(negThreshold, posThreshold);
        setHeatmap(hmRef.current?.(value) || '');
    }, [value, posThreshold, negThreshold, minMaxFinder]);

    return (
        <div className='d-flex flex-column flex-grow-1'>
            <div className='d-flex mb-2'>
                <input
                    placeholder='Negative Threshold'
                    type='number'
                    className='form-control form-control-sm'
                    value={negThreshold}
                    onChange={({ target }) => setNegThreshold(+target.value)}
                />
                <input
                    placeholder='Positive Threshold'
                    type='number'
                    className='form-control form-control-sm'
                    value={posThreshold}
                    onChange={({ target }) => setPosThreshold(+target.value)}
                />
            </div>
            <div className='d-flex mb-3'>
                <input
                    placeholder='Positive Threshold'
                    type='number'
                    className='form-control form-control-sm'
                    value={value}
                    onChange={({ target }) => setValue(+target.value)}
                />
            </div>
            <Square height={100} width={100} background={heatMap} color='black' />
        </div>
    );
};

export default HeatmapCell;
