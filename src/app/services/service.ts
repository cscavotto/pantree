import { GridRowsProp } from "@mui/x-data-grid";
import { recipeData } from "../mockData/recipeData";
import { pantryData } from "../mockData/pantryData";

// this will handle the API call with a Promise
export function getRecipeData(): GridRowsProp {
    // this will call an API to get the data
    return recipeData;
}

// this will handle the API call with a Promise
export function getPantryData(): GridRowsProp {
    // this will call an API to get the data
    return pantryData;
}