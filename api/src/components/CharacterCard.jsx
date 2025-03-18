import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const CharacterCard = ({ character, onClick }) => {
  const getStatusColor = (status) => {
    if (status === "Alive") return "#4CAF50";
    if (status === "Dead") return "#F44336";
    return "#9E9E9E";
  };

  return (
    <Card
      onClick={() => onClick(character)}
      sx={{ width: 200, cursor: "pointer", boxShadow: 3, borderRadius: 2 }}
    >
      <img
        src={character.image}
        alt={character.name}
        style={{ width: "100%" }}
      />

      <CardContent
        sx={{ backgroundColor: "white", textAlign: "center" }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: getStatusColor(character.status),
              marginRight: 1,
            }}
          />
          <Typography sx={{ fontWeight: "bold", color: "#673AB7" }}>
            {character.name}
          </Typography>
        </Box>

        <Typography>
          <span style={{ color: "#9C27B0" }}>
            {character.status} - {character.species}
          </span>
        </Typography>
        
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
