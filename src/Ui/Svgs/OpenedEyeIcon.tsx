import React from 'react';
import {
  Svg, Path,
} from 'react-native-svg';
import { IiconProps } from '../../Shared/Interfaces/Icons';

const OpenedEyeIcon = ({ color = '#FFFFFF', ...props }: IiconProps) => {
  return (
    <Svg viewBox="0 0 32 32" fill="none" {...props}>
      <Path d="M1.33334 16C1.33334 16 6.66668 5.33333 16 5.33333C25.3333 5.33333 30.6667 16 30.6667 16C30.6667 16 25.3333 26.6667 16 26.6667C6.66668 26.6667 1.33334 16 1.33334 16Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <Path d="M16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>

  );
};

export default OpenedEyeIcon;
