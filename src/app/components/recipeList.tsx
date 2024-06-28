"use client";

import { GridColDef, GridRowsProp } from "@mui/x-data-grid";
import BaseDataGrid from "./base/baseDataGrid";
import BaseAppBar from "./base/baseAppBar";
import { Grid } from "@mui/material";
import { RecipeTypeEnum } from "../interfaces/receipe";

interface RecipeListProps {
    rows: GridRowsProp
}

export default function RecipeList({rows}: RecipeListProps) {
    const newRow = {name: '', type: '', description: '', isNew: true}

    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Name', width: 150, editable: true },
        { field: 'type', headerName: 'Type', width: 150, editable: true, type: 'singleSelect',
        valueOptions: [RecipeTypeEnum.DESSERT, RecipeTypeEnum.APPETIZER, RecipeTypeEnum.MAIN, RecipeTypeEnum.SIDE, RecipeTypeEnum.DRINK, RecipeTypeEnum.BREAKFAST], },
        { field: 'description', headerName: 'Description', width: 300, editable: true}
      ];

    return (
        <Grid 
            container 
            spacing={3}
            direction="column"
            justifyContent="center">
                <Grid item>
                    <BaseAppBar title="Recipe List"/>
                </Grid>
                <Grid item>
                    <BaseDataGrid initialRows={rows} initialColumns={columns} newRow={newRow} hasDetails={true}/>
                </Grid>
        </Grid>
    )
}