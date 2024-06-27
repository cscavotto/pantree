export enum MeasurementTypeEnum {
    CUP = "cup",
    TBL = "tablespoon",
    TSP = "teaspoon",
    OZ = "ounce",
    PINCH = "pinch",
    GALLON = "gallon", 
    EACH = "each"
}

export interface Ingredient {
    id: number;
    name: string;
    amount: number;
    measurementType: MeasurementTypeEnum;
}