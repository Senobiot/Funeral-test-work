import React, { useState } from "react";
import { Box } from "@mui/material";
import { SubtitleText, LightText, RegularText, EditInput } from './Text';
import { OutlinedIconButton } from './buttons';
import { updateCompany } from '../../services/api-service';

export type CardCompanyDetailsProps = {
  title: string;
  id: string;
  content?: CardCompanyDetailsContentProps[],
  iconSrc?: string
};

type CardCompanyDetailsContentProps = {
  subtitle: string;
  text: string
}

const CardCompanyDetails: React.FC<CardCompanyDetailsProps> = ({
  title = 'Company Details',
  content = [],
  iconSrc = '/Edit.svg',
  id
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editableContent, setEditableContent] = useState(content);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (index: number, value: string) => {
    const updatedContent = [...editableContent];
    updatedContent[index].text = value;
    setEditableContent(updatedContent);
  };

  const handleSave = () => {
    setIsEditing(false);
    updateCompany(id, editableContent);
  };

  const handleCancel = () => {
    setEditableContent(content);
    setIsEditing(false);
  };

  return (
    <Box
      sx={{
        backgroundColor: '#f9f9f9',
        padding: '16px',
        borderRadius: '8px',
        boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.12)',
        width: '640px',
        margin: '0 auto 16px',
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" p={3} onClick={handleEditToggle}>
        <SubtitleText text={title} />
        {isEditing ? (
          <Box display="flex"
            justifyContent="flex-end"
            mt={2}
            gap={2}
          >
            <Box onClick={handleSave}>
              <OutlinedIconButton
                src='/Check.svg'
                text="Save changes"
                padding={1}
                iconMr={5}
                fz={11}
                fw={600}
                iconH={16}
                height={28}
                width='initial'

              />  </Box >
            <Box onClick={handleCancel}>
              <OutlinedIconButton
                src='/X.svg'
                text="Cancel"
                padding={1}
                iconMr={5}
                fz={11}
                fw={600}
                iconH={16}
                height={28}
                width='initial'
              />
            </Box >
          </Box>
        ) :
          <OutlinedIconButton
            src={iconSrc}
            text="Edit"
            width="71px"
            padding={1}
            iconMr={5}
            fz={11}
            fw={600}
            iconH={16}
            height={28}
          />}
      </Box>
      {editableContent.map((item, index) => (
        <Box key={index} display="flex" borderRadius="16px" alignItems="center" mb={2}>
          <Box flexBasis={160} height={32} mr={2}>
            <LightText text={item.subtitle} />
          </Box>
          {isEditing ?
            < EditInput text={item.text} onChange={(e) => handleInputChange(index, e.target.value)} />
            : (
              <RegularText text={item.text} />
            )}
        </Box>
      ))}
    </Box>
  );
};

export default CardCompanyDetails;
