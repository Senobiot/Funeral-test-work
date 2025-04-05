import React from 'react';
import { Box, Modal } from '@mui/material';
import { OutlinedIconButton, RegularIconButton } from '../../buttons';
import { SubtitleText, RegularText } from '../../Text';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const RemoveModal: React.FC<ModalProps> = ({ open, onClose, onConfirm }) => {
  const handleDelete = () => {
    onConfirm();
    onClose();
  }

  return (
    <Modal open={open}
      onClose={onClose}
    >
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
        <SubtitleText text='Remove the Organization?' textFz='16px' textWt={700} />
        <RegularText text='Are you sure you want to remove this Organozation?' />
        <Box mt={2} display="flex" justifyContent="space-between">
          <Box onClick={onClose}>
            <OutlinedIconButton text='No' noIcon={true} width='148px' />
          </Box>
          <Box onClick={handleDelete}>
            <RegularIconButton text='Yes, remove' noIcon={true} width='148px' />
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default RemoveModal;
