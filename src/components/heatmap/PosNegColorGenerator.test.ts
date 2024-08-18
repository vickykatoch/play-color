import { PosnegColorGenerator } from './PosNegColorGenerator';

describe('PosnegColorGenerator', () => {
    let colorGenerator: PosnegColorGenerator;

    beforeEach(() => {
        colorGenerator = new PosnegColorGenerator('#FF0000', '#00FF00', 10, 10);
    });

    it('should generate positive colors', () => {
        const positiveColors = colorGenerator.positiveColors;
        expect(positiveColors).toHaveLength(10);
        expect(positiveColors).toEqual([
            '#ffffff',
            '#e6ffe6',
            '#ccffcc',
            '#b3ffb3',
            '#99ff99',
            '#80ff80',
            '#66ff66',
            '#4dff4d',
            '#33ff33',
            '#1aff1a',
        ]);
    });

    it('should generate negative colors', () => {
        const negativeColors = colorGenerator.negativeColors;
        expect(negativeColors).toHaveLength(10);
        expect(negativeColors).toEqual([
            '#ffffff',
            '#ffe6e6',
            '#ffcccc',
            '#ffb3b3',
            '#ff9999',
            '#ff8080',
            '#ff6666',
            '#ff4d4d',
            '#ff3333',
            '#ff1a1a',
        ]);
    });

    it('should check if a color is white', () => {
        expect(colorGenerator.isWhiteColor('#FFFFFF')).toBe(true);
        expect(colorGenerator.isWhiteColor('#ffffff')).toBe(true);
        expect(colorGenerator.isWhiteColor('#fff')).toBe(true);
        expect(colorGenerator.isWhiteColor('#000000')).toBe(false);
        expect(colorGenerator.isWhiteColor('#FF0000')).toBe(false);
    });

    it('should check if a color is black', () => {
        expect(colorGenerator.isBlackColor('#000000')).toBe(true);
        expect(colorGenerator.isBlackColor('#000')).toBe(true);
        expect(colorGenerator.isBlackColor('#FFFFFF')).toBe(false);
        expect(colorGenerator.isBlackColor('#00FF00')).toBe(false);
    });
});
