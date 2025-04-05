import React from "react";
import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Home, People, Business, Settings, PlayArrow, NotInterested, Search, BusinessCenter, Park } from "@mui/icons-material";
import { navTree } from '../../configs/navigationConfig';


const Sidebar: React.FC = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: 'row' }}>
      <CssBaseline />
      <Drawer
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box sx={{ textAlign: "center", backgroundColor: '#3B3B3B', color: 'white', height: '100vh', width: 48 }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Park />
                </ListItemIcon>
                <ListItemText primary="Tree Icon" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <BusinessCenter />
                </ListItemIcon>
                <ListItemText primary="Briefcase Icon" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Search />
                </ListItemIcon>
                <ListItemText primary="Magnifying Glass Icon" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <NotInterested />
                </ListItemIcon>
                <ListItemText primary="Circular Icon with Line" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary="Gear Icon" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PlayArrow />
                </ListItemIcon>
                <ListItemText primary="Play Icon" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
        <Box>
          <Box sx={{ textAlign: "center", mt: 2, width: 250 }}>
            <Typography variant="h6">Oak Tree Cemetery</Typography>
            <Typography variant="caption">Process Manager</Typography>
          </Box>
          <List>
            {navTree.map((button, index) =>
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Business />
                  </ListItemIcon>
                  <ListItemText primary={button.title} />
                </ListItemButton>
              </ListItem>)}
          </List>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ textAlign: "center", mb: 2 }}>
            <Typography variant="caption">All Funeral Services © 2015-2025</Typography>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
