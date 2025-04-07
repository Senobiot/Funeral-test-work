import React from 'react'
import {
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
} from '@mui/material'

import { navTree } from '../../configs/navigationConfig'
import {
  MenuIconButton,
  RegularIconButton,
  OutlinedIconButton,
} from '../shared/buttons'
import { SubtitleText, TransparentText, RegularText } from '../shared/Text'
import { Link, useLocation } from 'react-router'

const Sidebar: React.FC = () => {
  const location = useLocation()
  const currentRoute = location.pathname
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <CssBaseline />
      <Drawer
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            flexDirection: 'row',
          },
        }}
        variant='permanent'
        anchor='left'
      >
        <Box
          sx={{
            backgroundColor: '#3B3B3B',
            color: 'white',
            height: '100vh',
            width: 48,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px 0',
          }}
        >
          <Box>
            <img src='/Logo.svg' alt='icon' />
            <List>
              <ListItem disablePadding>
                <MenuIconButton src='/Company.svg' />
              </ListItem>
              <ListItem disablePadding>
                <MenuIconButton src='/MagnifyingGlass.svg' />
              </ListItem>
            </List>
          </Box>
          <Box>
            <List>
              <ListItem disablePadding>
                <MenuIconButton src='/Settings.svg' />
              </ListItem>
              <ListItem disablePadding>
                <MenuIconButton src='/SignOut.svg' />
              </ListItem>
            </List>
          </Box>
        </Box>
        <Box sx={{ margin: 2.5 }}>
          <Box sx={{ width: 250 }}>
            <SubtitleText text='Oak Tree Cemetery' />
            <RegularText textFz='11px' text='Process Manager' />
            <Box mb={2.5}></Box>
            <Divider textAlign='left' />
          </Box>
          <List sx={{ textAlign: 'center', width: 250, mt: 2.5 }}>
            {navTree.map((button, index) => (
              <ListItem sx={{ mb: 1.5 }} key={index} disablePadding>
                {button.path === currentRoute ? (
                  <Link to={button.path}>
                    <RegularIconButton src={button.src} text={button.title} />
                  </Link>
                ) : (
                  <Link to={button.path}>
                    <OutlinedIconButton src={button.src} text={button.title} />
                  </Link>
                )}
              </ListItem>
            ))}
          </List>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <TransparentText text='All Funeral Services © 2015-2025' />
          </Box>
        </Box>
      </Drawer>
    </Box>
  )
}

export default Sidebar
