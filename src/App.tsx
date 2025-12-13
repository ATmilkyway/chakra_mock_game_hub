import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/ui/NavBar";

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
      <GridItem area={"nav"} bg={"blackAlpha.100"}>
        <NavBar />
      </GridItem>
      <GridItem area={"side"} bg={"blue.100"} hideBelow={"lg"}>
        Side
      </GridItem>
      <GridItem area={"main"} bg={"orange.100"}>
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
