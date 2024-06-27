import { Recipe, RecipeTypeEnum } from "../interfaces/receipe";
import { bread, cheese, eggs, flour, milk, mint, oregano, rum, sugar, tomatoes } from "./pantryData";

// all of this data should come from the backend; mocking out in front now
// for the sake of time
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