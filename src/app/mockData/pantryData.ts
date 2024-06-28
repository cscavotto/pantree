import { Ingredient, MeasurementTypeEnum } from "../interfaces/ingredient"

// all of this data should come from the backend; mocking out in frontend for the sake of time
export const milk: Ingredient = {id: 1, name: 'Milk', amount: 1, measurementType: MeasurementTypeEnum.GALLON}
export const tomatoes: Ingredient = {id: 2, name: 'Tomatoes', amount: 4, measurementType: MeasurementTypeEnum.EACH}
export const oregano: Ingredient = {id: 3, name: 'Oregano', amount: 4, measurementType: MeasurementTypeEnum.OZ}
export const flour: Ingredient = {id: 4, name: 'Flour', amount: 16, measurementType: MeasurementTypeEnum.CUP}
export const bread: Ingredient = {id: 5, name: 'Bread', amount: 1, measurementType: MeasurementTypeEnum.EACH}
export const sugar: Ingredient = {id: 6, name: 'Sugar', amount: 16, measurementType: MeasurementTypeEnum.CUP}
export const eggs: Ingredient = {id:7, name: 'Eggs', amount: 12, measurementType: MeasurementTypeEnum.EACH}
export const cheese: Ingredient = {id: 8, name: 'Cheese', amount: 16, measurementType: MeasurementTypeEnum.OZ}
export const mint: Ingredient = {id: 9, name: "Mint", amount: 1, measurementType: MeasurementTypeEnum.EACH}
export const rum: Ingredient = {id: 10, name: "Rum", amount: 20, measurementType: MeasurementTypeEnum.OZ}

export const pantryList: Ingredient[] = [
  milk,
  tomatoes,
  oregano,
  flour,
  bread,
  sugar, 
  eggs,
  cheese,
  mint
]