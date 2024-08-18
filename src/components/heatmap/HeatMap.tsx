import { useState } from 'react';
import { Square } from './Square';
import { PosnegColorGenerator } from './PosNegColorGenerator';
import { PositiveNegativeThreshold } from './PositiveNegativeThreshold';
import HeatmapCell from './HeatmapCell';

const posNegThreshold = new PositiveNegativeThreshold();

const HeatMap: React.FC = () => {
    const [basePositiveColor, setBasePositiveColor] = useState<string>('#64c964');
    const [baseNegativeColor, setBaseNegativeColor] = useState<string>('#ec8383');
    const [positiveColors, setPositiveColors] = useState<string[]>([]);
    const [negativeColors, setNegativeColors] = useState<string[]>([]);

    const generate = () => {
        const colorGenerator = new PosnegColorGenerator(baseNegativeColor, basePositiveColor, 5);
        setPositiveColors(colorGenerator.positiveColors);
        setNegativeColors(colorGenerator.negativeColors);
    };

    return (
        <div className='d-flex flex-column flex-grow-1'>
            <h1 className='d-flex justify-content-center'>Heatmap</h1>
            <div className='mb-3 d-flex'>
                <input
                    placeholder='Base Positive Color'
                    type='color'
                    className='form-control form-control-sm '
                    value={basePositiveColor}
                    onChange={({ target }) => setBasePositiveColor(target.value)}
                />
                <input
                    placeholder='Base Negative Color'
                    type='color'
                    className='form-control form-control-sm '
                    value={baseNegativeColor}
                    onChange={({ target }) => setBaseNegativeColor(target.value)}
                />
                <button className='btn btn-sm btn-primary mx-2' onClick={generate}>
                    Generate
                </button>
            </div>
            <h3 className='d-flex'>Positive Colors</h3>
            <div className='d-flex flex-row flex-grow-1 flex-wrap'>
                {positiveColors.map((color, index) => (
                    <Square key={index} height={70} width={70} background={color} color='green' />
                ))}
            </div>
            <h3 className='d-flex'>Negative Colors</h3>
            <div className='d-flex flex-row flex-grow-1 flex-wrap'>
                {negativeColors.map((color, index) => (
                    <Square key={index} height={70} width={70} background={color} color='red' />
                ))}
            </div>
            <HeatmapCell
                minMaxFinder={posNegThreshold}
                positiveColors={positiveColors}
                negativeColors={negativeColors}
            />
        </div>
    );
};

export default HeatMap;
