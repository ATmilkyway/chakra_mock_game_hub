import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/ui/NavBar";
import GameGrid from "./components/GameGrid";

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
      <GridItem area={"side"} bg={"blue.100"} hideBelow={"lg"}>
        Side
      </GridItem>
      <GridItem area={"main"} bg={"orange.100"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
