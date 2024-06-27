import { GridRowsProp } from "@mui/x-data-grid";
import { recipeList } from "../mockData/recipeData";
import { pantryList } from "../mockData/pantryData";

// this will handle the API call with a Promise. All logic in this function should be in the backend
export function getRecipeData(): GridRowsProp {
    // this will call an API to get the data
    let recipeRows: any[] = []; // this is an any because GridRowsProp is readonly. Need to look into that
    
    recipeList.forEach(r => {
        // need to calculate if all the ingredients are present or not
        recipeRows.push({id: r.id, name: r.name, type: r.type, description: r.description})
    })

    return recipeRows;
}

// this will handle the API call with a Promise. All logic in this function should be in the backend
export function getPantryData(): GridRowsProp {
    // this will call an API to get the data
   let pantryRows: any[] = []; // same problem with GridRowsProp here

    pantryList.forEach(p => {
        pantryRows.push({id: p.id, name: p.name, amount: `${p.amount} ${p.measurementType}`})
    })    

   return pantryRows;
}