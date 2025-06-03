import React from "react";
import { styled, Box, Typography, Button } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AddIcon from "@mui/icons-material/Add";

const LibraryHead: React.FC = () => {
  return (
    <Box
      sx={{
        padding: 2,
        backgroundColor: "background.paper",
        display: "flex",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <BookmarkIcon />
      <Typography variant="h2" fontWeight={700}>
        Your Library
      </Typography>
      <Button>
        <AddIcon sx={{ color: "#1DB954" }} />
      </Button>
    </Box>
  );
};

export default LibraryHead;
