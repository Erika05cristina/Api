import React from "react";
import { Container, Typography } from "@mui/material";
import CharacterList from "./components/CharacterList";

const App = () => {
  return (
    <Container
      sx={{
        backgroundColor: "#F8BBD0",
      }}
    >
      <Typography variant="h2" align="center" gutterBottom color="#F50057">
        Rick & Morty Api
      </Typography>
      <CharacterList />
    </Container>
  );
};

export default App;
