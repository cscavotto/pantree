import { Ingredient } from "./ingredient";

export enum RecipeTypeEnum {
    DESSERT = "Dessert", 
    APPETIZER = "Appetizer",
    MAIN = "Main", 
    SIDE = "Side", 
    DRINK = "Drink",
    BREAKFAST = "Breakfast"
}

export interface Recipe {
    id: number;
    name: string;
    time: string;
    servings: number;
    description: string;
    type: RecipeTypeEnum;
    instructions: string;
    ingredients: Ingredient[];
}