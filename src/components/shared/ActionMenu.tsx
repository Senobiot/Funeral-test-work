import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { SubtitleText } from '../shared/Text';
import RemoveModal from './Modals/Delete';
import EditModal from './Modals/Edit';
import { deleteCompany, updateCompany } from '../../services/api-service';

type ActionMenuProps = {
  title: string;
  id: string,
};

const ActionMenu: React.FC<ActionMenuProps> = ({ title, id }) => {
  const [companyTitle, setCompanyTitle] = useState(() => title);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditSave = async (newTitle: string) => {
    setCompanyTitle(newTitle)
    await updateCompany(id, { title: newTitle }); // тут вроде надо прокидывать весь объект но не работает APIнет возможности глянуть
  }

  const handleDelete = async () => {
    await deleteCompany(id);
  }

  const activeBtsStyles = {
    '&:focus': {
      outline: 'none',
    },
    '&:hover': {
      backgroundColor: "rgba(59,59,59,0.05)",
    },
    "&:active": {
      backgroundColor: "rgba(153,129,255,0.2)",
    },
  }

  return (
    <Box
      position='fixed'
      top={40}
      left='50%'
      width={640}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        padding: "16px", borderRadius: "8px", transform: 'translateX(calc(-50% + 170px))' // нет времени
      }}
    >
      <IconButton sx={{
        position: 'absolute',
        left: -38,
        width: 32,
        height: 32,
        ...activeBtsStyles
      }}>
        <img src="/Icon.svg" alt="edit" style={{
        }} />
      </IconButton>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        <SubtitleText text={companyTitle} textFz='28px' textWt={500} textColor='rgba(0, 0, 0, 0.8)' />
      </Typography>
      <Box display='flex'>
        <Box>
          <IconButton
            sx={activeBtsStyles}
            onClick={() => setIsEditing(true)}>
            <img src="/Edit.svg" alt="edit" style={{
              filter: "invert(0%) brightness(0%)",
            }} />
          </IconButton>
        </Box>
        <Box onClick={() => setIsDeleting(true)}>
          <IconButton
            sx={activeBtsStyles}
          >
            <img src="/Trash.svg" alt="delete" style={{
              filter: "brightness(0) saturate(100%) invert(20%) sepia(83%) saturate(5741%) hue-rotate(0deg) brightness(100%) contrast(106%)",
            }} />
          </IconButton>
        </Box>
      </Box>
      <RemoveModal
        open={isDeleting}
        onClose={() => setIsDeleting(false)}
        onConfirm={handleDelete}
      />
      <EditModal
        open={isEditing}
        onClose={() => setIsEditing(false)}
        onSave={(newTitle) => handleEditSave(newTitle)}
        initialName={companyTitle}
      />
    </Box>
  );
};

export default ActionMenu;
