import React, { Dispatch, SetStateAction, useState } from 'react'
import { Box } from '@mui/material'
import {
  SubtitleText,
  EditorialInput,
  LightText,
  EditorialNumberInput,
} from '../Text'
import { OutlinedCardActionButton } from '../buttons'
import { updateContact } from '~/services/api-service'
import { EditableKeys, FIELDNAMES } from '~/constants'
import { ContactDto, inversePhoneNumber } from '~/utils'

type ContactCardProps = {
  contactData: Record<string, any>
  title?: string
  setData: Dispatch<SetStateAction<Record<string, any>>>
}

type EditableContent = {
  [EditableKeys.Name]: string
  [EditableKeys.Phone]: string
  [EditableKeys.Email]: string
}

const ContactCard: React.FC<ContactCardProps> = ({
  contactData,
  title,
  setData,
}) => {
  const initialData = new ContactDto(contactData)
  const initialState = {
    [EditableKeys.Name]: `${initialData.firstname} ${initialData.lastname}`,
    [EditableKeys.Phone]: initialData.phone,
    [EditableKeys.Email]: initialData.email,
  }
  const [isEditing, setIsEditing] = useState(false)
  const [editableContent, setEditableContent] =
    useState<EditableContent>(initialState)

  const handleEditToggle = () => {
    setIsEditing(!isEditing)
  }

  const handleInputChange = (key: EditableKeys, value: string | string[]) => {
    console.log(value)
    setEditableContent((prev) => ({ ...prev, [key]: value }))
  }

  const handleSave = async () => {
    setIsEditing(false)
    const updatedData = {
      ...initialData,
      lastname: editableContent[EditableKeys.Name].split(' ')[1],
      firstname: editableContent[EditableKeys.Name].split(' ')[0],
      phone: inversePhoneNumber(editableContent[EditableKeys.Phone]),
      email: editableContent[EditableKeys.Email],
    }

    const response = await updateContact(contactData.id, updatedData)
    setData(response)
  }

  const handleCancel = () => {
    setEditableContent(initialState)
    setIsEditing(false)
  }

  return (
    <Box
      p={3}
      sx={{
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.12)',
        width: '640px',
        margin: '0 auto 16px',
      }}
    >
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        p={0}
        mb={2}
        onClick={handleEditToggle}
      >
        <SubtitleText text={title} />
        {isEditing ? (
          <Box display='flex' justifyContent='flex-end' mt={2} gap={2}>
            <Box onClick={handleSave}>
              <OutlinedCardActionButton
                image='/Check.svg'
                text='Save changes'
              />
            </Box>
            <Box onClick={handleCancel}>
              <OutlinedCardActionButton image='/X.svg' text='Cancel' />
            </Box>
          </Box>
        ) : (
          <Box>
            <OutlinedCardActionButton image='/Edit.svg' text='Edit' />
          </Box>
        )}
      </Box>
      <Box
        display='flex'
        borderRadius='16px'
        mb={2}
        fontSize={14}
        alignItems='center'
      >
        <Box
          flexBasis={160}
          height={32}
          mr={2}
          alignContent='center'
          minWidth={160}
        >
          <LightText text={FIELDNAMES.person} />
        </Box>
        <EditorialInput
          onChange={(e) => handleInputChange(EditableKeys.Name, e.target.value)}
          isEditing={isEditing}
          text={editableContent[EditableKeys.Name]}
        />
      </Box>
      <Box
        display='flex'
        borderRadius='16px'
        mb={2}
        fontSize={14}
        alignItems='center'
      >
        <Box
          flexBasis={160}
          height={32}
          mr={2}
          alignContent='center'
          minWidth={160}
        >
          <LightText text={FIELDNAMES.phone} />
        </Box>
        <EditorialNumberInput
          onChange={(value) => handleInputChange(EditableKeys.Phone, value)}
          isEditing={isEditing}
          text={editableContent[EditableKeys.Phone]}
        />
      </Box>
      <Box
        display='flex'
        borderRadius='16px'
        mb={2}
        fontSize={14}
        alignItems='center'
      >
        <Box
          flexBasis={160}
          height={32}
          mr={2}
          alignContent='center'
          minWidth={160}
        >
          <LightText text={FIELDNAMES.email} />
        </Box>
        <EditorialInput
          onChange={(e) =>
            handleInputChange(EditableKeys.Email, e.target.value)
          }
          isEditing={isEditing}
          text={editableContent[EditableKeys.Email]}
        />
      </Box>
    </Box>
  )
}

export default ContactCard
