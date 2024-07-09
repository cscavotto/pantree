"use client"

import { Box, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Recipe } from "../interfaces/receipe";
import CircleIcon from '@mui/icons-material/Circle';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react";
import SaveIcon from '@mui/icons-material/Save';
import { updateRecipeDetails } from "../services/service";

// pull this out to a css file
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

interface ReceipeProps {
    recipe: Recipe | null
}

// getting an app-index.js:33 Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
// error when opening this model. Need to look into that.
export default function RecipeDetails({recipe}: ReceipeProps) {
    const [editable, setEditable] = useState(false);
    const [name, setName] = useState(recipe?.name);
    const [description, setDescription] = useState(recipe?.description);
    const [time, setTime] = useState(recipe?.time);
    const [servings, setServings] = useState(recipe?.servings);
    const [instructions, setInstructions] = useState(recipe?.instructions);

    const handleEditClick = () => () => {
        setEditable(true);
    }

    const handleSaveClick = () => () => {
        setEditable(false);

        if (recipe) {
            const r: Recipe = {
                id: recipe?.id,
                type: recipe?.type, // need to add in type and make it editable via a dropdown
                name: name ? name : "", 
                description: description ? description : "",
                time: time ? time : "",
                servings: servings,
                ingredients: recipe?.ingredients,
                instructions: instructions
            }
            updateRecipeDetails(r);
        }
    }

    // editing the ingredients will be interesting ... cause all the values will need to be separated
    return (
     <Box sx={{ ...style, width: 800 }}>
        <Grid container columnSpacing={3} rowSpacing={1} justifyContent="space-between" alignItems="flex-start">
            <Grid item xs={8}>
                <Typography variant="h4" color="inherit" suppressContentEditableWarning={true} contentEditable={editable} onMouseOut={e => setName(e.currentTarget.innerText)}>
                    <Box sx={{ fontWeight: 'bold', m: 1 }}>{name}</Box>
                </Typography>
            </Grid>
            <Grid item>
                {!editable ? 
                    <IconButton aria-label="edit" onClick={handleEditClick()}>
                        <EditIcon />
                     </IconButton>
                :   <IconButton aria-label="edit" onClick={handleSaveClick()}>
                        <SaveIcon />
                    </IconButton>
                } 
            </Grid>
            <Grid item xs={12}>
                <Typography variant="subtitle1" color="inherit" suppressContentEditableWarning={true} contentEditable={editable} onMouseOut={e => setDescription(e.currentTarget.innerText)}>
                    <Box sx={{ fontStyle: 'italic', m: 1 }}>{description}</Box>
            </Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography variant="subtitle1" color="inherit">
                    <Box sx={{ fontStyle: 'italic', m: 1 }}>Cook Time: </Box>
                </Typography>
            </Grid>
            <Grid item xs={10}>
                <Typography variant="subtitle1" color="inherit" suppressContentEditableWarning={true} contentEditable={editable} onMouseOut={e => setTime(e.currentTarget.innerText)}>
                    <Box sx={{ fontStyle: 'italic', m: 1 }}>{time}</Box>
                </Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography variant="subtitle1" color="inherit">
                    <Box sx={{ fontStyle: 'italic', m: 1 }}>Servings: </Box>
                </Typography>
            </Grid>
            <Grid item xs={10}>
                <Typography variant="subtitle1" color="inherit" suppressContentEditableWarning={true} contentEditable={editable} onMouseOut={e => setServings(parseInt(e.currentTarget.innerText))}>
                    <Box sx={{ fontStyle: 'italic', m: 1 }}>{servings}</Box>
                </Typography>
            </Grid>
        </Grid>
        <Typography variant="h6" color="inherit">
            <Box sx={{ fontWeight: 'bold', m: 1 }}>Ingredients</Box>
        </Typography>
        <List>
            {recipe?.ingredients?.map(i => {
                return (
                    <ListItem key={i.id}>
                        <ListItemIcon> < CircleIcon fontSize="small"/> </ListItemIcon>
                        <ListItemText primary={`${i.amount} ${i.measurementType} ${i.name}`}  />
                    </ListItem>
                )
            }) }
        </List>
        <Typography variant="h6" color="inherit">
            <Box sx={{ fontWeight: 'bold', m: 1 }}>Instructions</Box>
        </Typography>
        <Typography variant="body1" color="inherit" suppressContentEditableWarning={true} contentEditable={editable} onMouseOut={e => setInstructions(e.currentTarget.innerText)}>
            {instructions}
        </Typography>
    </Box>
    );
}
