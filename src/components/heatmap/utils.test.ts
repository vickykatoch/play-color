import { getHeatMapGenerator } from './utils';
import { PositiveNegativeThreshold } from './PositiveNegativeThreshold';

describe('getHeatMapGenerator', () => {
    it('should return a function', () => {
        const heatMapGenerator = getHeatMapGenerator([], [], new PositiveNegativeThreshold());
        expect(typeof heatMapGenerator).toBe('function');
    });

    it('should return the correct color for positive values', () => {
        const positiveColors = ['#FF0000', '#FFFF00', '#00FF00'];
        const negativeColors = ['#0000FF', '#00FFFF', '#FF00FF'];
        const minMaxFinder = new PositiveNegativeThreshold();
        const heatMapGenerator = getHeatMapGenerator(positiveColors, negativeColors, minMaxFinder);

        expect(heatMapGenerator(0)).toBe('#FF0000');
        expect(heatMapGenerator(50)).toBe('#FFFF00');
        expect(heatMapGenerator(100)).toBe('#00FF00');
    });

    it('should return the correct color for negative values', () => {
        const positiveColors = ['#FF0000', '#FFFF00', '#00FF00'];
        const negativeColors = ['#0000FF', '#00FFFF', '#FF00FF'];
        const minMaxFinder = new PositiveNegativeThreshold();
        const heatMapGenerator = getHeatMapGenerator(positiveColors, negativeColors, minMaxFinder);

        expect(heatMapGenerator(-100)).toBe('#0000FF');
        expect(heatMapGenerator(-50)).toBe('#00FFFF');
        expect(heatMapGenerator(0)).toBe('#FF00FF');
    });
});
