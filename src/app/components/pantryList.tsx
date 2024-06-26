import { GridColDef, GridRowsProp } from "@mui/x-data-grid";
import BaseDataGrid from "./base/baseDataGrid";
import BaseAppBar from "./base/baseAppBar";

export default function PantryList() {

    // this data should come from somewhere else
    // and replace should be calculated from current amount
    const rows: GridRowsProp = [
        { id: 1, item: 'Milk', amount: '1 gallon', replace: 'No'},
        { id: 2, item: 'Tomatoes', amount: '4', replace: 'No'},
        { id: 3, item: 'Oregano', amount: '4 oz', replace: 'Yes'},
      ];

    const columns: GridColDef[] = [
        { field: 'item', headerName: 'Item', width: 150 },
        { field: 'amount', headerName: 'Amount', width: 150 },
        { field: 'replace', headerName: 'Replace', width: 150}
      ];

    return (
        <div>
            <BaseAppBar title="Pantry Items"/>
            <BaseDataGrid rows={rows} columns={columns}/>
        </div>
    )
}