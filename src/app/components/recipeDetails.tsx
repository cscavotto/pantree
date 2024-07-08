import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Recipe } from "../interfaces/receipe";
import CircleIcon from '@mui/icons-material/Circle';

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
    return (
     <Box sx={{ ...style, width: 800 }}>
        <Typography variant="h4" color="inherit">
            <Box sx={{ fontWeight: 'bold', m: 1 }}>{recipe?.name}</Box>
        </Typography>
        <Typography variant="subtitle1" color="inherit">
            <Box sx={{ fontStyle: 'italic', m: 1 }}>{recipe?.description}</Box>
            <Box sx={{ fontStyle: 'italic', m: 1 }}>Cook Time: {recipe?.time}</Box>
            <Box sx={{ fontStyle: 'italic', m: 1 }}>Servings: {recipe?.servings}</Box>
        </Typography>
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
        <Typography variant="body1" color="inherit">
            {recipe?.instructions}
        </Typography>
    </Box>
    );
}