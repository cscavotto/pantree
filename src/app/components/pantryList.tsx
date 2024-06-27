import { GridColDef, GridRowsProp } from "@mui/x-data-grid";
import BaseDataGrid from "./base/baseDataGrid";
import BaseAppBar from "./base/baseAppBar";
import { Grid } from "@mui/material";

interface PantryListProps {
    rows: GridRowsProp
}

export default function PantryList({rows}: PantryListProps) {
    
    const columns: GridColDef[] = [
        { field: 'item', headerName: 'Item', width: 150 },
        { field: 'amount', headerName: 'Amount', width: 150 },
        { field: 'replace', headerName: 'Replace', width: 150}
      ];

    return (
        <Grid 
        container 
        spacing={3}
        direction="column"
        justifyContent="center">
            <Grid item>
                <BaseAppBar title="Pantry Items"/>
            </Grid>
            <Grid item>
                <BaseDataGrid rows={rows} columns={columns}/>
            </Grid>
        </Grid>
    )
}