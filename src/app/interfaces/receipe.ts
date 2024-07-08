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
    description: string;
    type: RecipeTypeEnum;
    time?: string;
    servings?: number;
    instructions?: string;
    ingredients?: Ingredient[];
}