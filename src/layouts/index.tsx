import { Box } from '@mui/material';
import React from 'react';
import Sidebar from '../components/layout-components/SideNavManu';
import AppViews from '../views';

const AppLayout: React.FC = () => (
  <Box>
    <Sidebar />
    <Box pl={40}
      width='100vw'
      display='flex'
      flexDirection='column'
      alignItems='center'
    >
      <AppViews />
    </Box>
  </Box>
);

export default AppLayout;
