import React, { useState } from 'react';
import { Box, Modal, TextField } from '@mui/material';
import { OutlinedIconButton, RegularIconButton } from '../../buttons';
import { SubtitleText } from '../../Text';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  initialName: string;
  onSave: (newName: string) => void;
}

const EditModal: React.FC<ModalProps> = ({ open, onClose, initialName, onSave }) => {
  const [organizationName, setOrganizationName] = useState(initialName);
  const handleSave = () => {
    onSave(organizationName);
    onClose();
  }

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 360,
          height: 200,
          bgcolor: 'background.paper',
          boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.12)',
          p: 3,
          textAlign: 'center',
          borderRadius: '8px',
        }}
      >
        <SubtitleText text="Specify the Organization's name" textFz='16px' textWt={700} />
        <TextField
          fullWidth
          value={organizationName}
          onChange={(e) => setOrganizationName(e.target.value)}
          variant="outlined"
          sx={{
            marginTop: 1,
            '& fieldset': {
              border: '1px solid rgba(0, 0, 0, 0.2);',
            },
            '&:hover fieldset': {
              border: '1px solid rgba(0, 0, 0, 0.5)',
            },
            '&.Mui-focused fieldset': {
              border: 'border: 2px solid #35CDFD;',
            },
          }}
        />
        <Box mt={2} display="flex" justifyContent="space-between">
          <Box onClick={onClose}>
            <OutlinedIconButton text='Cancel' noIcon={true} width='148px' />
          </Box>
          <Box onClick={handleSave}>
            <RegularIconButton text='Save changes' noIcon={true} width='148px' pL={1} pR={1} height={40} />
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditModal;
