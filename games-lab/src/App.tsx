import React from "react";
import { Button, ButtonGroup, GridItem, Grid, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";

const App = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav" bg="">
          <NavBar />
          Nav
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="gold">
            Aside
          </GridItem>
        </Show>
        <GridItem area="main" bg="dodgerBlue">
          Main
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
