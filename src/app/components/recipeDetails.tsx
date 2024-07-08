import { Box, List, ListItem, ListItemText } from "@mui/material";
import { Recipe } from "../interfaces/receipe";

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

export default function RecipeDetails({recipe}: ReceipeProps) {
    // need to figure out how to style this like the rest of the system. Where is that coming from?
    // also the console is mad about the List items, something about them not having the key? look into that
    return (
     <Box sx={{ ...style, width: 800 }}>
        <h2 id="parent-modal-title">{recipe?.name}</h2>
        <p id="parent-modal-description">
        {recipe?.description}
        </p>
        <p id="parent-modal-description">
        Cook Time: {recipe?.time} Servings: {recipe?.servings}
        </p>
        <h3 id="parent-modal-title">Ingredients</h3>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {recipe?.ingredients?.map(i => {
                return (
                    <ListItem>
                        <ListItemText primary={`${i.amount} ${i.measurementType} ${i.name}`}  />
                    </ListItem>
                )
            }) }
        </List>
        <h3 id="parent-modal-title">Instructions</h3>
        <p id="parent-modal-description">
        {recipe?.instructions}
        </p>
    </Box>
    );
}