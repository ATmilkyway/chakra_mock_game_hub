import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/ui/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "side main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <GridItem area={"side"} hideBelow={"lg"} paddingX={5}>
        <GenreList />
      </GridItem>
      <GridItem area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
