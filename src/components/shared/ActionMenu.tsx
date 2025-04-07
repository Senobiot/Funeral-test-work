import React, { useState } from 'react'
import { Box, Typography, IconButton } from '@mui/material'
import { SubtitleText } from '../shared/Text'
import RemoveModal from './Modals/Delete'
import EditModal from './Modals/Edit'
import { deleteCompany, updateCompany } from '../../services/api-service'
import { CompanyDto } from '~/utils'

type ActionMenuProps = {
  companyData: Record<string, any>
}

const ActionMenu: React.FC<ActionMenuProps> = ({ companyData }) => {
  const id = companyData.id || ''
  const [companyTitle, setCompanyTitle] = useState(() => companyData.name || '')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  const handleSave = async (newTitle: string) => {
    setCompanyTitle(newTitle)
    const dto = new CompanyDto(companyData)
    try {
      await updateCompany(id, { ...dto, name: newTitle })
    } catch (error) { }
  }

  const handleDelete = async () => {
    try {
      await deleteCompany(id)
      setCompanyTitle('Delete success')
    } catch (error) {
      console.log(error)
    }
  }

  const activeBtsStyles = {
    '&:focus': {
      outline: 'none',
    },
    '&:hover': {
      backgroundColor: 'rgba(59,59,59,0.05)',
    },
    '&:active': {
      backgroundColor: 'rgba(153,129,255,0.2)',
    },
  }

  return (
    <Box
      display='flex'
      mb={4}
      justifyContent='space-between'
      sx={{
        padding: '16px',
        borderRadius: '8px',
        transform: 'translateX(calc(-50% + 170px))', // нет времени
      }}
    >
      <IconButton
        sx={{
          position: 'absolute',
          left: -38,
          width: 32,
          height: 32,
          ...activeBtsStyles,
        }}
      >
        <img src='/Icon.svg' alt='edit' style={{}} />
      </IconButton>
      <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
        <SubtitleText
          text={companyTitle}
          textFz='28px'
          textWt={500}
          textColor='rgba(0, 0, 0, 0.8)'
        />
      </Typography>
      <Box display='flex'>
        <Box>
          <IconButton sx={activeBtsStyles} onClick={() => setIsEditing(true)}>
            <img
              src='/Edit.svg'
              alt='edit'
              style={{
                filter: 'invert(0%) brightness(0%)',
              }}
            />
          </IconButton>
        </Box>
        <Box onClick={() => setIsDeleting(true)}>
          <IconButton sx={activeBtsStyles}>
            <img
              src='/Trash.svg'
              alt='delete'
              style={{
                filter: `brightness(0) 
              saturate(100%) 
              invert(20%) 
              sepia(83%)
              saturate(5741%) 
              hue-rotate(0deg)
              brightness(100%)
              contrast(106%)`,
              }}
            />
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
        onSave={(newTitle) => handleSave(newTitle)}
        initialName={companyTitle}
      />
    </Box>
  )
}

export default ActionMenu
