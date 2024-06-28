import { Ingredient, MeasurementTypeEnum } from "../interfaces/ingredient";
import { Recipe, RecipeTypeEnum } from "../interfaces/receipe";

// all of this data should come from the backend; mocking out in front now
// for the sake of time

export const milk: Ingredient = {id: 1, name: 'Milk', amount: 1, measurementType: MeasurementTypeEnum.CUP}
export const tomatoes: Ingredient = {id: 2, name: 'Tomatoes', amount: 2, measurementType: MeasurementTypeEnum.EACH}
export const oregano: Ingredient = {id: 3, name: 'Oregano', amount: 2, measurementType: MeasurementTypeEnum.TSP}
export const flour: Ingredient = {id: 4, name: 'Flour', amount: 2, measurementType: MeasurementTypeEnum.CUP}
export const bread: Ingredient = {id: 5, name: 'Bread', amount: 1, measurementType: MeasurementTypeEnum.EACH}
export const sugar: Ingredient = {id: 6, name: 'Sugar', amount: .5, measurementType: MeasurementTypeEnum.CUP}
export const eggs: Ingredient = {id:7, name: 'Eggs', amount: 1, measurementType: MeasurementTypeEnum.EACH}
export const cheese: Ingredient = {id: 8, name: 'Cheese', amount: .25, measurementType: MeasurementTypeEnum.CUP}
export const mint: Ingredient = {id: 9, name: "Mint", amount: 1, measurementType: MeasurementTypeEnum.EACH}
export const rum: Ingredient = {id: 10, name: "Rum", amount: 2, measurementType: MeasurementTypeEnum.OZ}

export const recipeList: Recipe[] = [
        {
                id: 1, 
                name: 'Pancakes',
                time: '20 minutes',
                servings: 4, 
                description: 'A delicious sweet breakfast',
                type: RecipeTypeEnum.BREAKFAST,
                instructions: "make batter and fry on medium heat",
                ingredients: [milk, flour, sugar, eggs]
        },
        {
                id: 2, 
                name: 'Mojito',
                time: '5 minutes',
                servings: 4, 
                description: 'A drink best consumed with a fancy hat',
                type: RecipeTypeEnum.DRINK,
                instructions: "pour in a glass with ice",
                ingredients: [mint, rum]
        },
        {
                id: 3, 
                name: 'Bruschetta',
                time: '30 minutes',
                servings: 4, 
                description: 'A juicy, crunchy, tomatoey Italian treat',
                type: RecipeTypeEnum.APPETIZER,
                instructions: "mix together tomatoes and oregano, put on bread, sprinkle with cheese, bake",
                ingredients: [tomatoes, oregano, bread, cheese]
        }
]