import { GridColDef, GridRowsProp } from "@mui/x-data-grid";
import BaseDataGrid from "./base/baseDataGrid";
import BaseAppBar from "./base/baseAppBar";
import { Grid } from "@mui/material";
import { MeasurementTypeEnum } from "../interfaces/ingredient";

interface PantryListProps {
    rows: GridRowsProp
}

export default function PantryList({rows}: PantryListProps) {
    const newRow = {name: '', amount: '', measurement: ''}

    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Name', width: 150, editable: true },
        { field: 'amount', headerName: 'Amount', width: 150, editable: true, type: 'number' },
        { field: 'measurement', headerName: 'Measurement', width: 150, editable: true, type: 'singleSelect',
            valueOptions: [MeasurementTypeEnum.CUP, MeasurementTypeEnum.TBL, MeasurementTypeEnum.TSP, MeasurementTypeEnum.OZ, MeasurementTypeEnum.PINCH, MeasurementTypeEnum.GALLON, MeasurementTypeEnum.EACH]
        }
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
                <BaseDataGrid initialRows={rows} initialColumns={columns} newRow={newRow}/>
            </Grid>
        </Grid>
    )
}