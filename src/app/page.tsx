import { Box, Grid } from "@mui/material";
import BaseAppBar from "./components/base/baseAppBar";
import RecipeList from "./components/recipeList";
import PantryList from "./components/pantryList";

export default function Home() {
  return (
    <div>
      <BaseAppBar title="Welcome to Pantree!"/>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <RecipeList/>
          </Grid>
          <Grid item>
            <PantryList/>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
