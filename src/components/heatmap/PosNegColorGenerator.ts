export class PosnegColorGenerator {
  private readonly _positiveColors: Array<string>;
  private readonly _negativeColors: Array<string>;

  constructor(
    baseNegativeColor: string,
    basePositiveColor: string,
    incrementStep: number,
    colorCount: number = 20
  ) {
    const posColors: string[] = [];
    const negColors: string[] = [];
    for (let i = 1; i <= colorCount; i++) {
      posColors.push(
        this.generateColors(basePositiveColor, i * incrementStep * 0.01)
      );
      negColors.push(
        this.generateColors(baseNegativeColor, i * incrementStep * 0.01)
      );
    }
    this._positiveColors = [...posColors.reverse()];
    this._negativeColors = [...negColors.reverse()];
  }

  get positiveColors(): string[] {
    return this._positiveColors;
  }
  get negativeColors(): string[] {
    return this._negativeColors;
  }

  isWhiteColor(color: string): boolean {
    return color.toLowerCase() === "#ffffff";
  }

  isBlackColor(color: string): boolean {
    return color === "#000000";
  }

  private generateColors(hexColor: string, percentage: number): string {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);

    const tintR = Math.round(Math.min(255, r + (255 - r) * percentage));
    const tintG = Math.round(Math.min(255, g + (255 - g) * percentage));
    const tintB = Math.round(Math.min(255, b + (255 - b) * percentage));
    return `#${[tintR, tintG, tintB]
      .map((x) => x.toString(16).padStart(2, "0"))
      .join("")}`;
  }
}
