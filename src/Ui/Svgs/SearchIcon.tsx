import React from 'react';
import {
  Svg, Path,
} from 'react-native-svg';
import { IiconProps } from '../../Shared/Interfaces/Icons';

const SearchIcon = ({ color = '#FFFFFF', ...props }: IiconProps) => {
  return (
    <Svg fill="none" {...props}>
      <Path d="M12.4166 23.0833C18.3077 23.0833 23.0833 18.3077 23.0833 12.4167C23.0833 6.52563 18.3077 1.75 12.4166 1.75C6.52562 1.75 1.75 6.52563 1.75 12.4167C1.75 18.3077 6.52562 23.0833 12.4166 23.0833Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <Path d="M25.75 25.75L19.95 19.95" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>

  );
};

export default SearchIcon;
