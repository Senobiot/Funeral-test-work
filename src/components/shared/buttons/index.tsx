import React from "react";
import Button from "@mui/material/Button";
import { Box } from '@mui/material';

type IconButtonProps = {
  src?: string,
  text?: string,
  iconW?: number,
  iconH?: number,
  btnSize?: number,
  bg?: string,
}

export const MenuIconButton: React.FC<IconButtonProps> = ({ src = '', text, iconW = 20, iconH, btnSize = 36, bg = "rgba(255, 255, 255, 0.2)" }) => {
  return (
    <Button
      variant="contained"
      sx={{
        background: 0,
        border: 0,
        boxShadow: 0,
        padding: 0,
        margin: '20px 0 0',
        width: btnSize,
        height: btnSize,
        minWidth: 0,
        borderRadius: '8px',

        "&:hover": {
          backgroundColor: bg,
          boxShadow: "none",
        },

        "& .MuiButton-startIcon": {
          margin: 0,
        },
      }}
      startIcon={<img src={src} alt="icon" width={iconW} height={iconH} />}>
      {text}
    </Button>
  );
};

type RegularIconButtonProps = {
  src?: string,
  text?: string,
  iconW?: number,
  iconH?: number,
  height?: number,
  width?: string
  padding?: number,
  iconMr?: number,
  handleFileChange?: React.ChangeEventHandler<HTMLInputElement>,
}

export const RegularIconButton: React.FC<RegularIconButtonProps> = ({
  src = '',
  text,
  iconW = 20,
  iconH,
  height = 40,
  width = 210,
  padding = 3,
}) => {
  return (
    <Button
      variant='contained'
      sx={{
        background: 0,
        backgroundColor: "#3b3b3b",
        border: 0,
        boxShadow: 0,
        padding: padding,
        margin: 0,
        height: height,
        width: width,
        minWidth: 0,
        borderRadius: '8px',
        color: 'white',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',

        "&:hover": {
          backgroundColor: "#626262",
          filter: 'drop-shadow(0px 3px 8px rgba(0, 0, 0, 0.12))',
          boxShadow: "none",
        },

        "&:active": {
          backgroundColor: "#757575",
          filter: 'drop-shadow(0px 3px 8px rgba(0, 0, 0, 0.12))',
          boxShadow: "none",
        },

        "& .MuiButton-startIcon": {
          margin: 0,
        },
      }}
      startIcon={<img src={src} alt="icon" width={iconW} height={iconH} />}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}>
        {text}
      </Box>
    </Button>
  );
};

export const OutlinedIconButton: React.FC<RegularIconButtonProps> = ({
  src = '',
  text,
  iconW = 20,
  iconH,
  height = 40,
  width = 210,
  padding = 3,
  iconMr = 0,
}) => {
  return (
    <Button
      variant='outlined'
      sx={{
        background: 0,
        backgroundColor: 0,
        border: '1px solid rgba(0, 0, 0, 0.2)',
        boxShadow: 0,
        padding: padding,
        margin: 0,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: height,
        width: width,
        borderRadius: '8px',
        color: 'black',

        "&:hover": {
          backgroundColor: 0,
          boxShadow: "none",
          border: '1px solid rgba(0, 0, 0, 0.4)',
          color: '#6243E6',
        },

        "&:active": {
          backgroundColor: 0,
          boxShadow: "none",
          border: '#6243E6',
          color: '#6243E6',
        },

        "&:focus": {
          backgroundColor: 0,
          boxShadow: "none",
          outline: 'none'
        },

        "& .MuiButton-startIcon": {
          margin: 0,
        },
      }}
      startIcon={<img src={src} alt="icon" width={iconW} height={iconH} style={{
        marginRight: iconMr,
        filter: "invert(0%) brightness(0%)",
      }} />}>
      <Box sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        {text}
      </Box>
    </Button>
  );
};

