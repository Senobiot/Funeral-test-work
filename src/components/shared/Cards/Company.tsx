import React, { Dispatch, SetStateAction, useState } from 'react'
import { Box } from '@mui/material'
import {
  SubtitleText,
  EditorialInput,
  LightText,
  EditorialSelectInput,
  EditorialMultiSelectInput,
} from '../Text'
import { OutlinedCardActionButton } from '../buttons'
import { updateCompany } from '~/services/api-service'
import { EditableKeys, ENTITY_VARIANTS, FIELDNAMES } from '~/constants'
import { CompanyDto, formatDate, invertType, invertDate } from '~/utils'

type CompanyCardProps = {
  companyData: Record<string, any>
  title?: string
  setData: Dispatch<SetStateAction<Record<string, any>>>
}

type EditableContent = {
  [EditableKeys.ContractNo]: string
  [EditableKeys.ContractIssue]: string
  [EditableKeys.BusinessEntity]: string
  [EditableKeys.Type]: string[]
}

const CompanyCard: React.FC<CompanyCardProps> = ({
  companyData,
  title = '',
  setData,
}) => {
  const initialData = new CompanyDto(companyData)
  const initialState = {
    [EditableKeys.ContractNo]: initialData.contract.no,
    [EditableKeys.ContractIssue]: initialData.contract.issue_date,
    [EditableKeys.BusinessEntity]: initialData.businessEntity,
    [EditableKeys.Type]: initialData.type,
  }
  const [isEditing, setIsEditing] = useState(false)
  const [editableContent, setEditableContent] =
    useState<EditableContent>(initialState)

  const handleEditToggle = () => {
    setIsEditing(!isEditing)
  }

  const handleInputChange = (key: EditableKeys, value: string | string[]) => {
    setEditableContent((prev) => ({ ...prev, [key]: value }))
  }

  const handleSave = async () => {
    setIsEditing(false)
    const updatedData = {
      ...initialData,
      type: invertType(editableContent[EditableKeys.Type]),
      contract: {
        no: editableContent[EditableKeys.ContractNo],
        issue_date: editableContent[EditableKeys.ContractIssue],
      },
      businessEntity: editableContent[EditableKeys.BusinessEntity],
    }
    const response = await updateCompany(companyData.id, updatedData)

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
          <LightText text={FIELDNAMES.agreement} />
        </Box>
        <EditorialInput
          onChange={(e) =>
            handleInputChange(EditableKeys.ContractNo, e.target.value)
          }
          isEditing={isEditing}
          text={editableContent[EditableKeys.ContractNo]}
        />
        <span
          style={{
            fontSize: '14px',
            lineHeight: '24px',
            color: 'rgba(0, 0, 0, 0.3)',
          }}
        >
          {' '}
          {isEditing ? (
            <span>&nbsp;Date:&nbsp;</span>
          ) : (
            <span>&nbsp;/&nbsp;</span>
          )}
        </span>
        <EditorialInput
          onChange={(e) =>
            handleInputChange(
              EditableKeys.ContractIssue,
              invertDate(e.target.value)
            )
          }
          isEditing={isEditing}
          text={formatDate(editableContent[EditableKeys.ContractIssue])}
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
          <LightText text={FIELDNAMES.entity} />
        </Box>
        <EditorialSelectInput
          onChange={(e) =>
            handleInputChange(EditableKeys.BusinessEntity, e.target.value)
          }
          isEditing={isEditing}
          variants={[...ENTITY_VARIANTS]}
          currentVariant={editableContent[EditableKeys.BusinessEntity]}
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
          <LightText text={FIELDNAMES.type} />
        </Box>
        <EditorialMultiSelectInput
          onChange={(value) => handleInputChange(EditableKeys.Type, value)}
          isEditing={isEditing}
          variants={initialState[EditableKeys.Type]}
          currentVariant={editableContent[EditableKeys.Type]}
        />
      </Box>
    </Box>
  )
}

export default CompanyCard
