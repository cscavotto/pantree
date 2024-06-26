import { Grid } from "@mui/material";
import BaseAppBar from "./components/base/baseAppBar";
import RecipeList from "./components/recipeList";
import PantryList from "./components/pantryList";

export default function Home() {
  return (
    <Grid container spacing={3} justifyContent="center" alignItems="stretch">
      <Grid item xs={12}>
        <BaseAppBar title="Welcome to Pantree!"/>
      </Grid>
      <Grid item xs={8}>
        <RecipeList/>
      </Grid>
      <Grid item>
        <PantryList/>
      </Grid>
    </Grid>
  );
}
