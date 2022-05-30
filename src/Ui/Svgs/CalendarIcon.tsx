import React from 'react';
import {
  Svg, Path,
} from 'react-native-svg';
import { IiconProps } from '../../Shared/Interfaces/Icons';

const CalendarIcon = ({ color = '#FFFFFF', ...props }: IiconProps) => {
  return (
    <Svg fill="none" {...props}>
      <Path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <Path d="M16 2V6" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <Path d="M8 2V6" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <Path d="M3 10H21" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>

  );
};

export default CalendarIcon;
