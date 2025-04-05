import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { SubtitleText } from '../shared/Text';

type ActionMenuProps = {
  title: string;
};

const ActionMenu: React.FC<ActionMenuProps> = ({ title }) => {
  return (
    <Box
      position='fixed'
      top={0}
      left='50%'
      width={640}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        padding: "16px", borderRadius: "8px", transform: 'translateX(calc(-50% + 170px))' // нет времени
      }}
    >
      <IconButton>
        <img src="/Icon.svg" alt="edit" style={{
          position: 'absolute',
          left: -38
        }} />
      </IconButton>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        <SubtitleText text={title} textFz='28px' textWt={500} textColor='rgba(0, 0, 0, 0.8)' />
      </Typography>
      <Box>
        <IconButton >
          <img src="/Edit.svg" alt="edit" style={{
            filter: "invert(0%) brightness(0%)",
          }} />
        </IconButton>
        <IconButton>
          <img src="/Trash.svg" alt="delete" style={{
            filter: "brightness(0) saturate(100%) invert(20%) sepia(83%) saturate(5741%) hue-rotate(0deg) brightness(100%) contrast(106%)",
          }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ActionMenu;
