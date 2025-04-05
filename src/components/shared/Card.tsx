import React from "react";
import { Box } from "@mui/material";
import { SubtitleText, LightText, RegularText } from './Text';
import { OutlinedIconButton } from './buttons';

export type CardCompanyDetailsProps = {
  title: string;
  content?: CardCompanyDetailsContentProps[],
  iconSrc?: string
};

type CardCompanyDetailsContentProps = {
  subtitle: string;
  text: string
}

const CardCompanyDetails: React.FC<CardCompanyDetailsProps> = ({
  title = ' Company Details',
  content = [],
  iconSrc = '/Edit.svg'
}) => {
  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        padding: "16px",
        borderRadius: "8px",
        boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.12)",
        width: "640px",
        margin: "0 auto",
      }}
    >
      <Box display='flex' width='100%' justifyContent='space-between' p={3}>
        <SubtitleText text={title} />
        <OutlinedIconButton src={iconSrc} text='Edit' width='71px' padding={1} iconMr={5} />
      </Box>
      {content.map((e, index) =>
        <Box
          display='flex'
          key={index}
          borderRadius='16px'
        >
          <Box flexBasis={160} height={32} mr={2}><LightText text={e.subtitle} /></Box>
          <RegularText text={e.text} />
        </Box>
      )}
    </Box>
  );
};

export default CardCompanyDetails;
