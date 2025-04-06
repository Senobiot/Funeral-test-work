import React from "react";
import { Box } from "@mui/material";
import { SubtitleText } from '../../components/shared/Text';
import CardCompanyDetails from '../../components/shared/Card';

const Contractors: React.FC = () => {
  const mockArray = new Array(Math.floor(Math.random() * 5)).fill(1)
  const mockDetails = [{ subtitle: 'Contractor Name', text: 'John Smith' }]

  return <Box>
    <SubtitleText text='Contractors will be here. Routing works...' />
    {mockArray.map((_, idx) => <CardCompanyDetails id={`${idx}`} title="Contractors Details" content={mockDetails} key={idx} />)}
  </Box>
}

export default Contractors;
