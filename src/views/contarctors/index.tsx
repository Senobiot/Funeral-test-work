import React from 'react'
import { Box } from '@mui/material'
import { SubtitleText } from '~/components/shared/Text'

const Contractors: React.FC = () => {
  return (
    <Box>
      <SubtitleText text='Contractors will be here. Routing works...' />
      {/* {mockArray.map((_, idx) => <CardCompanyDetails title="Contractors Details" content={mockDetails} key={idx} />)} */}
    </Box>
  )
}

export default Contractors
