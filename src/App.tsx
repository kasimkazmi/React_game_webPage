import { Grid, Show, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import GameGrid from "./components/GameGrid";
const App = () => {
  return (
    <>
      <div>
        <Grid
          templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`,
          }}
        >
          <GridItem area="nav">
            <Navbar />
          </GridItem>
          <Show above="lg">
            <GridItem area="aside" border={1} bg={"red"}>
              <Main />
            </GridItem>
          </Show>
          <GridItem area="main" bg={"darkblue"} color={"white"}>
        <GameGrid/>
          </GridItem>
        </Grid>
      </div>
    </>
  );
};

export default App;
