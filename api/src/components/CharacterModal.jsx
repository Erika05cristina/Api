import React from "react";
import { Modal, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CharacterModal = ({ open, onClose, character }) => {
  if (!character) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 320,
          bgcolor: "#F3E5F5",
          p: 3,
          borderRadius: 2,
          textAlign: "center",
          boxShadow: 24,
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>

        <img
          src={character.image}
          alt={character.name}
          style={{ width: "200px", borderRadius: "10%", marginBottom: "10px" }}
        />

        <Typography
          sx={{ fontWeight: "bold", color: "#673AB7" }}
          variant="h5"
          gutterBottom
        >
          {character.name}
        </Typography>

        <Typography>
          <span style={{ fontWeight: "bold", color: "#7B1FA2" }}> Estado:</span>
          <span style={{ color: "#9C27B0" }}> {character.status} </span>
        </Typography>

        <Typography>
          <span style={{ fontWeight: "bold", color: "#7B1FA2" }}>Especie:</span>
          <span style={{ color: "#9C27B0" }}> {character.species}</span>
        </Typography>

        <Typography>
          <span style={{ fontWeight: "bold", color: "#7B1FA2" }}>Tipo:</span>
          <span style={{ color: "#9C27B0" }}> {character.type || "n/a"}</span>
        </Typography>

        <Typography>
          <span style={{ fontWeight: "bold", color: "#7B1FA2" }}>Género:</span>
          <span style={{ color: "#9C27B0" }}> {character.gender}</span>
        </Typography>

        <Typography>
          <span style={{ fontWeight: "bold", color: "#7B1FA2" }}>Origen:</span>
          <span style={{ color: "#9C27B0" }}> {character.origin.name}</span>
        </Typography>

        <Typography>
          <span style={{ fontWeight: "bold", color: "#7B1FA2" }}>
            Ubicación:
          </span>
          <span style={{ color: "#9C27B0" }}> {character.location.name}</span>
        </Typography>
      </Box>
    </Modal>
  );
};

export default CharacterModal;
