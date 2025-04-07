import { createTheme } from '@mui/material'

export const customTheme = createTheme({
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          margin: 0,
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          width: 'auto',
          height: 48,
          margin: 0,
          '&:hover': {
            background: 'none',
          },
          '&.Mui-selected': {
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            '&:hover': {
              background: 'rgba(0, 0, 0, 0.05)',
            },
          },
          '&.MuiMenuItem-gutters': {
            padding: '0 12px',
          },
        },
      },
    },
  },
})
