import { PositiveNegativeThreshold } from './PositiveNegativeThreshold';

export type HeatMapStyleFunc = (value: number) => string;

export function getHeatMapGenerator(
    positiveColors: string[],
    negativeColors: string[],
    minMaxFinder: PositiveNegativeThreshold,
): HeatMapStyleFunc {
    const findColorIndex = (value: number, maxValue: number, colorCount: number): number => {
        const percentage = (value * 100) / maxValue;
        const index = Math.floor((colorCount * percentage) / 100);
        return index || index - 1;
    };

    return (value: number): string => {
        if (value < 0) {
            const index =
                value <= minMaxFinder.negativeThreshold
                    ? negativeColors.length - 1
                    : findColorIndex(value, minMaxFinder.negativeThreshold, negativeColors.length);
            return negativeColors[index];
        } else {
            const index =
                value >= minMaxFinder.positiveThreshold
                    ? positiveColors.length - 1
                    : findColorIndex(value, minMaxFinder.positiveThreshold, positiveColors.length);
            return positiveColors[index];
        }
    };
}
