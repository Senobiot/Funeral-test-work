import React from "react";
import { Typography } from '@mui/material';

type TextProps = {
  text?: string,
  textFz?: string,
  textWt?: number,
  textColor?: string,
  textLs?: string,
  textLh?: string
}

export const SubtitleText: React.FC<TextProps> = ({ text, textFz = '14px', textWt = 700 }) =>
  <Typography
    color='rgba(0, 0, 0, 0.8)'
    fontSize={textFz}
    fontWeight={textWt}
  >
    {text}
  </Typography>

export const RegularText: React.FC<TextProps> = ({
  text,
  textFz = '14px',
  textWt = 400,
  textLs = '0.3px',
  textLh = '24px'
}) =>
  <Typography
    color='rgba(0, 0, 0, 0.8)'
    fontSize={textFz}
    fontWeight={textWt}
    letterSpacing={textLs}
    lineHeight={textLh}
  >
    {text}
  </Typography>

export const LightText: React.FC<TextProps> = ({
  text,
  textFz = '13px',
  textWt = 400,
  textLs = '0.25px',
  textLh = '20px'
}) =>
  <Typography
    color='rgba(0, 0, 0, 0.5)'
    fontSize={textFz}
    fontWeight={textWt}
    letterSpacing={textLs}
    lineHeight={textLh}
  >
    {text}
  </Typography>


export const TransparentText: React.FC<TextProps> = ({
  text,
  textFz = '11px',
  textWt = 400,
  textLs = '0.24px',
  textLh = '16px'
}) =>
  <Typography
    color='rgba(0, 0, 0, 0.3)'
    fontSize={textFz}
    fontWeight={textWt}
    letterSpacing={textLs}
    lineHeight={textLh}
  >
    {text}
  </Typography>

export const ButtonText: React.FC<TextProps> = ({
  text,
  textFz = '13px',
  textWt = 600,
  textLs = '0.48px',
  textLh = '20px'
}) =>
  <Typography
    color='#3B3B3B'
    fontSize={textFz}
    fontWeight={textWt}
    letterSpacing={textLs}
    lineHeight={textLh}
  >
    {text}
  </Typography>

