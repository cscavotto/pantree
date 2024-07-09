import { GridRowId, GridRowsProp } from "@mui/x-data-grid";
import { recipeList } from "../mockData/recipeData";
import { pantryList } from "../mockData/pantryData";
import { Recipe } from "../interfaces/receipe";
import { Ingredient } from "../interfaces/ingredient";

// this will handle the API call with a Promise. All logic in this function should be in the backend
export function getRecipeData(): GridRowsProp {
    const pantryItemNames: string[] = getPantryItemNames();

    // this will call an API to get the data
    let recipeRows: any[] = []; // this is an any because GridRowsProp is readonly. Need to look into that

    recipeList.forEach(r => {
        // TODO: need to calculate if enough of the ingredient is available for the recipe.
        const allIngredients: boolean | undefined = r.ingredients?.reduce((exists, i) => pantryItemNames.includes(i.name) ? exists && true : false, true)

        recipeRows.push({id: r.id, name: r.name, type: r.type, description: r.description, allIngredients: allIngredients ? 'Yes' : 'No'})
    })

    return recipeRows;
}

// this will use the data stored on the frontend if it exists; else it'll 
// use a call to the backend
export function getRecipeDetails(id: GridRowId): Recipe {
    const recipe = recipeList.filter(r => r.id === id);
    // there will always be a 1:1 match
    return recipe[0];
}

export function updateRecipeRow(row: any) {
    const index = recipeList.findIndex(r => r.id === row.id);

    if (index != -1) {
        const r: Recipe = {
            id: row.id,
            name: row.name, 
            description: row.description,
            type: row.type,
            time: recipeList[index].time, 
            servings: recipeList[index].servings,
            instructions: recipeList[index].instructions,
            ingredients: recipeList[index].ingredients
        }

        recipeList[index] = r;
    }
    else {
        // add a new one
        const r: Recipe = {
            id: row.id,
            name: row.name, 
            description: row.description,
            type: row.type
        }
        recipeList.push(r);
    }
    // need to figure out how to run the All Ingredients check on this one recipe
}

export function updateRecipeDetails(recipe: Recipe) {
    const index = recipeList.findIndex(r => r.id === recipe.id);
    recipeList[index] = recipe;
    // need to do a refresh on the table rows? how does that work? Does that go in Recipe Details?
}

// this will handle the API call with a Promise. All logic in this function should be in the backend
export function getPantryData(): GridRowsProp {
    // this will call an API to get the data
   let pantryRows: any[] = []; // same problem with GridRowsProp here

    pantryList.forEach(p => {
        pantryRows.push({id: p.id, name: p.name, amount: p.amount, measurement: p.measurementType})
    })    

   return pantryRows;
}

function getPantryItemNames(): string[] {
    return pantryList.map(p => p.name);
}

export function updatePantryItem(row: any) {
    const i: Ingredient = {
        id: row.id,
        name: row.name, 
        amount: row.amount,
        measurementType: row.measurement
    }

    const index = pantryList.findIndex(r => r.id === row.id);
    if (index != -1) {
        pantryList[index] = i;
    }
    else {
        pantryList.push(i);
    }
    // need to figure out how to re-run the All Ingredients check on all recipes
}