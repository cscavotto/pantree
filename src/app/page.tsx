import { Grid } from "@mui/material";
import BaseAppBar from "./components/base/baseAppBar";
import RecipeList from "./components/recipeList";
import PantryList from "./components/pantryList";
import { getPantryData, getRecipeData } from "./services/service";

export default function Home() {
  // these calls will be async to handle the recipe data
  const recipeData = getRecipeData(); 
  const pantryData = getPantryData();

  return (
    <Grid container spacing={3} justifyContent="center" alignItems="stretch">
      <Grid item xs={12}>
        <BaseAppBar title="Welcome to Pantree!"/>
      </Grid>
      <Grid item xs={8}>
        <RecipeList rows={recipeData}/>
      </Grid>
      <Grid item>
        <PantryList rows={pantryData}/>
      </Grid>
    </Grid>
  );
}
