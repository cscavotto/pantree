import { GridRowsProp } from "@mui/x-data-grid";

// this whole area should be constructed from the backend data model
// ingredients should be calculated
export const recipeData: GridRowsProp = [
        { id: 1, name: 'Pancakes', type: 'Breakfast', ingredients: 'Yes' },
        { id: 2, name: 'Mojito', type: 'Drink', ingredients: 'No' },
        { id: 3, name: 'Bruschetta', type: 'Appetizer', ingredients: 'Yes' },
]