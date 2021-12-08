//import React from "react";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

import HeaderView from "../header/header";

export default function LayoutView(props) {
  const { content } = props;

  return (
    // <div>
    <div className="root">
      {/* Begin Hero Bg */}
      <div id="parallax"></div>
      <HeaderView />
      {/* <Box sx={{ flexGrow: 1 }}> */}
      {/* <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> /}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sybyl Smart Attendance
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar> */}
    {/* </Box> */}
      {content}
    </div>
  );
}
