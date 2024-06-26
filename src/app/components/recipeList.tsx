"use client";

import { GridColDef, GridRowsProp } from "@mui/x-data-grid";
import BaseDataGrid from "./base/baseDataGrid";
import BaseAppBar from "./base/baseAppBar";
import { Button, Grid, Modal } from "@mui/material";
import { useState } from "react";
import RecipeForm from "./recipeForm";

export default function RecipeList() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
        <Grid 
            container 
            spacing={3}
            direction="column"
            justifyContent="center">
                <Grid item>
                    <BaseAppBar title="Recipe List"/>
                </Grid>
                <Grid item>
                    <Button variant="contained" onClick={handleOpen}>Add Recipe</Button>
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
                    <BaseDataGrid rows={rows} columns={columns}/>
                </Grid>
        </Grid>
    )
}