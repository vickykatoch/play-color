import { PositiveNegativeThreshold } from './PositiveNegativeThreshold';

describe('PositiveNegativeThreshold', () => {
    let threshold: PositiveNegativeThreshold;

    beforeEach(() => {
        threshold = new PositiveNegativeThreshold();
    });

    it('should have default negative threshold of MIN_VALUE', () => {
        expect(threshold.negativeThreshold).toBe(Number.MIN_SAFE_INTEGER);
        expect(threshold.positiveThreshold).toBe(Number.MAX_SAFE_INTEGER);
    });

    it('should update negative and positive thresholds correctly', () => {
        threshold.updateThreshold(-10, 10);
        expect(threshold.negativeThreshold).toBe(-10);
        expect(threshold.positiveThreshold).toBe(10);

        threshold.updateThreshold(-100, 70);
        expect(threshold.negativeThreshold).toBe(-100);
        expect(threshold.positiveThreshold).toBe(70);
    });
});
