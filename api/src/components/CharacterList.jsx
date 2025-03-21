import React, { useEffect, useState } from "react";
import { Grid2, CircularProgress, Typography } from "@mui/material"; 
import CharacterCard from "./CharacterCard";
import CharacterModal from "./CharacterModal";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setLoading(false);
      });
  }, []);

  const handleOpen = (character) => {
    setSelectedCharacter(character);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCharacter(null);
  };

  return (
    <>
      {loading ? (
        <CircularProgress/>
      ) : (
        <>
     
          <Grid2 container justifyContent="center" spacing={9}>
            {characters.map((char) => (
              <Grid2   key={char.id}>
                <CharacterCard character={char} onClick={handleOpen} />
              </Grid2>
            ))}
          </Grid2>
        </>
      )}
      <CharacterModal open={open} onClose={handleClose} character={selectedCharacter} />
    </>
  );
};

export default CharacterList;
