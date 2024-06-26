import { GridColDef, GridRowsProp } from "@mui/x-data-grid";
import BaseDataGrid from "./base/baseDataGrid";
import BaseAppBar from "./base/baseAppBar";

export default function RecipeList() {

    // this data should come from somewhere else
    // and ingredients should be calculated from pantry list
    const rows: GridRowsProp = [
        { id: 1, name: 'Pancakes', type: 'Breakfast', ingredients: 'Yes' },
        { id: 2, name: 'Mojito', type: 'Drink', ingredients: 'No' },
        { id: 3, name: 'Bruschetta', type: 'Appetizer', ingredients: 'Yes' },
      ];

    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'type', headerName: 'Type', width: 150 },
        { field: 'ingredients', headerName: 'Ingredients', width: 150}
      ];

    return (
        <div>
            <BaseAppBar title="Recipe List"/>
            <BaseDataGrid rows={rows} columns={columns}/>
        </div>
    )
}