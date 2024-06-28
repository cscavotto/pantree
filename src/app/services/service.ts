import { GridRowId, GridRowsProp } from "@mui/x-data-grid";
import { recipeList } from "../mockData/recipeData";
import { pantryList } from "../mockData/pantryData";
import { Recipe } from "../interfaces/receipe";

// this will handle the API call with a Promise. All logic in this function should be in the backend
export function getRecipeData(): GridRowsProp {
    const pantryItemNames: string[] = getPantryItemNames();

    // this will call an API to get the data
    let recipeRows: any[] = []; // this is an any because GridRowsProp is readonly. Need to look into that

    recipeList.forEach(r => {
        // TODO: need to calculate if enough of the ingredient is available for the recipe.
        const allIngredients: boolean = r.ingredients.reduce((exists, i) => pantryItemNames.includes(i.name) ? exists && true : false, true)

        recipeRows.push({id: r.id, name: r.name, type: r.type, description: r.description, allIngredients: allIngredients ? 'Yes' : 'No'})
    })

    return recipeRows;
}

// this will use the data stored on the frontend if it exists; else it'll 
// use a call to the backend
export function getRecipeDetails(id: GridRowId): Recipe | null {
    const recipe = recipeList.filter(r => r.id === id);
    if (recipe.length > 0) {
        return recipe[0]
    }

    return null;
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