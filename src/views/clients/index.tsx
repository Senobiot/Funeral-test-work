import React from 'react'
import { Box } from '@mui/material'
import { SubtitleText } from '../../components/shared/Text'

const Clients: React.FC = () => {
  // const mockArray = new Array(Math.floor(Math.random() * 4)).fill(1)
  // const mockDetails = [{ subtitle: 'Clients Name', text: 'John Smith Jr.' }]

  return (
    <Box>
      <SubtitleText text='Clients will be here. Routing works...' />
      {/* {mockArray.map((_, idx) => <CardCompanyDetails id={`${idx}`} title="Clients Details" content={mockDetails} key={idx} />)} */}
    </Box>
  )
}

export default Clients
