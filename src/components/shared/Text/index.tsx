import React from 'react'
import {
  Box,
  Checkbox,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material'
import { formatPhoneNumber, inversePhoneNumber } from '~/utils'

type TextProps = {
  text?: string
  textFz?: string
  textWt?: number
  textColor?: string
  textLs?: string
  textLh?: string
  padding?: string
}

export const SubtitleText: React.FC<TextProps> = ({
  text,
  textFz = '14px',
  textWt = 700,
  padding,
}) => (
  <Typography
    color='rgba(0, 0, 0, 0.8)'
    fontSize={textFz}
    fontWeight={textWt}
    padding={padding}
  >
    {text}
  </Typography>
)

export const RegularText: React.FC<TextProps> = ({
  text,
  textFz = '14px',
  textWt = 400,
  textLs = '0.3px',
  textLh = '24px',
  padding = 'initial',
}) => (
  <Typography
    padding={padding}
    color='rgba(0, 0, 0, 0.8)'
    fontSize={textFz}
    fontWeight={textWt}
    letterSpacing={textLs}
    lineHeight={textLh}
  >
    {text}
  </Typography>
)

export const LightText: React.FC<TextProps> = ({
  text,
  textFz = '13px',
  textWt = 400,
  textLs = '0.25px',
  textLh = '20px',
}) => (
  <Typography
    color='rgba(0, 0, 0, 0.5)'
    fontSize={textFz}
    fontWeight={textWt}
    letterSpacing={textLs}
    lineHeight={textLh}
  >
    {text}
  </Typography>
)

export const TransparentText: React.FC<TextProps> = ({
  text,
  textFz = '11px',
  textWt = 400,
  textLs = '0.24px',
  textLh = '16px',
}) => (
  <Typography
    color='rgba(0, 0, 0, 0.3)'
    fontSize={textFz}
    fontWeight={textWt}
    letterSpacing={textLs}
    lineHeight={textLh}
  >
    {text}
  </Typography>
)

export const ButtonText: React.FC<TextProps> = ({
  text,
  textFz = '13px',
  textWt = 600,
  textLs = '0.48px',
  textLh = '20px',
}) => (
  <Typography
    color='#3B3B3B'
    fontSize={textFz}
    fontWeight={textWt}
    letterSpacing={textLs}
    lineHeight={textLh}
  >
    {text}
  </Typography>
)

type InputProps = {
  text?: string
  textFz?: string
  textWt?: number
  textColor?: string
  textLs?: string
  textLh?: string
  padding?: string
  isEditing: boolean
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  maxDigits?: number
}

const editorialStyles = {
  display: 'flex',
  flexGrow: 0,

  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    '& input': {
      outline: 'none',
      border: 'none',
      padding: '10px 12px',
      borderRadius: '8px',
      fontSize: '14px',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(0, 0, 0, 0.5)',
      borderRadius: '8px',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#35CDFD',
      borderRadius: '8px',
      borderWidth: '2px',
    },
  },
}

export const EditorialInput: React.FC<InputProps> = ({
  text,
  isEditing,
  onChange,
  ...props
}) =>
  !isEditing ? (
    <RegularText text={text} />
  ) : (
    <TextField
      {...props}
      value={text}
      onChange={onChange}
      fullWidth
      variant='outlined'
      size='small'
      sx={editorialStyles}
    />
  )

type EditorialNumberInputProps = {
  text?: string
  textFz?: string
  textWt?: number
  textColor?: string
  textLs?: string
  textLh?: string
  padding?: string
  isEditing: boolean
  onChange?: (formattedInput: string) => void
  maxDigits?: number
}

export const EditorialNumberInput: React.FC<EditorialNumberInputProps> = ({
  text,
  isEditing,
  onChange,
  maxDigits = 11,
  ...props
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value
    const rawInput = inversePhoneNumber(input)
    if (onChange && rawInput.length <= 11) {
      onChange(formatPhoneNumber(input))
    }
  }

  return !isEditing ? (
    <RegularText text={formatPhoneNumber(text || '')} />
  ) : (
    <TextField
      {...props}
      value={formatPhoneNumber(text || '')}
      onChange={handleChange}
      fullWidth
      variant='outlined'
      size='small'
      sx={editorialStyles}
    />
  )
}

interface EditorialSelectInputProps {
  onChange: (event: SelectChangeEvent<string>) => void
  variants?: string[]
  isEditing: boolean
  currentVariant?: string
  title?: string
}

const editorialSelectStyles = {
  display: 'flex',
  flexGrow: 1,
  overflow: 'hidden',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '8px',
  height: 40,
  '& .MuiOutlinedInput-notchedOutline': {
    border: '1px solid rgba(0, 0, 0, 0.2)',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: '1px solid rgba(0, 0, 0, 0.2)',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    border: '1px solid rgba(0, 0, 0, 0.2)',
  },
}

const menuItemStyles = {
  '&.Mui-selected': {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
    },
  },
  '&.MuiMenuItem-gutters': {
    paddingLeft: '16px',
    paddingRight: '16px',
  },
}
export const EditorialSelectInput: React.FC<EditorialSelectInputProps> = ({
  onChange,
  currentVariant = '',
  variants = [],
  isEditing,
}) =>
  isEditing ? (
    <Select
      sx={editorialSelectStyles}
      value={currentVariant}
      onChange={onChange}
      input={<OutlinedInput label='Business Entity' />}
    >
      {variants.map((entity) => (
        <MenuItem sx={menuItemStyles} key={entity} value={entity}>
          {entity}
        </MenuItem>
      ))}
    </Select>
  ) : (
    plainCardFieldText(currentVariant)
  )

export const plainCardFieldText = (text: string) => (
  <Box display='flex' borderRadius='16px' alignItems='center'>
    <RegularText text={text} />
  </Box>
)

interface EditorialMultiSelectInputProps {
  onChange: (value: string[]) => void
  variants?: string[]
  isEditing: boolean
  currentVariant?: string[]
  title?: string
}

export const EditorialMultiSelectInput: React.FC<
  EditorialMultiSelectInputProps
> = ({ onChange, currentVariant = [], variants = [], isEditing }) => {
  const [selected, setSelected] = React.useState<string[]>(currentVariant)
  const handleChange = (event: any) => {
    const value = event.target.value as string[]
    setSelected(value)
    onChange(value)
  }

  React.useEffect(() => {
    setSelected(currentVariant)
  }, [currentVariant])

  return isEditing ? (
    <Select
      sx={editorialSelectStyles}
      multiple
      value={selected}
      onChange={handleChange}
      renderValue={(selected) => selected.join(', ')}
    >
      {variants.map((option) => (
        <MenuItem key={option} value={option}>
          <Checkbox
            checked={selected.includes(option)}
            sx={{
              mr: 1,
              border: '2px solid rgba(0, 0, 0, 0.25)',
              borderRadius: '4px',
              color: 'white',
              padding: '0px',
              '& .MuiSvgIcon-root': {
                color: '#fff',
                fontSize: '20px',
              },
              '&.Mui-checked': {
                mr: 1,
                backgroundColor: 'rgba(0, 0, 0, 0.25)',
                borderWidth: '1px',
                color: 'rgba(0, 0, 0, 0.25)',
                padding: '0px',
                border: 'none',
                '& .MuiSvgIcon-root': {
                  color: '#fff',
                  fontSize: '24px',
                },
              },
            }}
          />
          <ListItemText primary={option} />
        </MenuItem>
      ))}
    </Select>
  ) : (
    plainCardFieldText(currentVariant.join(', '))
  )
}
