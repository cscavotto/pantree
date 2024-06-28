"use client";

import { GridColDef, GridRowsProp } from "@mui/x-data-grid";
import BaseDataGrid from "./base/baseDataGrid";
import BaseAppBar from "./base/baseAppBar";
import { Button, Grid, Modal } from "@mui/material";
import { useState } from "react";
import RecipeForm from "./recipeForm";
import { RecipeTypeEnum } from "../interfaces/receipe";

interface RecipeListProps {
    rows: GridRowsProp
}

export default function RecipeList({rows}: RecipeListProps) {
    const newRow = {name: '', type: '', description: '', isNew: true}

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                    <Button variant="contained" onClick={handleOpen}>Parse Recipe</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <RecipeForm/>
                    </Modal>
                </Grid>
                <Grid item>
                    <BaseDataGrid initialRows={rows} initialColumns={columns} newRow={newRow}/>
                </Grid>
        </Grid>
    )
}