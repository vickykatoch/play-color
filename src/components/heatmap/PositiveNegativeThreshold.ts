export class PositiveNegativeThreshold {
    private _negativeThresholdValue = Number.MIN_SAFE_INTEGER;
    private _positiveThresholdValue = Number.MAX_SAFE_INTEGER;

    get negativeThreshold(): number {
        return this._negativeThresholdValue;
    }
    get positiveThreshold(): number {
        return this._positiveThresholdValue;
    }

    //Temp
    updateThreshold(negativeThreshold: number, positiveThreshold: number): void {
        this._negativeThresholdValue = negativeThreshold;
        this._positiveThresholdValue = positiveThreshold;
    }
}
