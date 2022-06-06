import React from 'react';
import {
  Svg, Path,
} from 'react-native-svg';
import { IiconProps } from '../../Shared/Interfaces/Components/Icons';
import { Colors } from '../Theme';

const ClockIcon = ({ color = Colors.gray[500], ...props }: IiconProps) => {
  return (
    <Svg fill="none" {...props}>
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 12.4107 12.4107 16 8 16C3.58934 16 0 12.4107 0 8C0 3.58934 3.5893 0 8 0C12.4107 0 16 3.58934 16 8ZM14.9333 8C14.9333 4.17597 11.824 1.06665 8 1.06665C4.17602 1.06665 1.06665 4.17597 1.06665 8C1.06665 11.824 4.17597 14.9333 8 14.9333C11.824 14.9333 14.9333 11.824 14.9333 8ZM10.6667 10.6667C10.5493 10.6667 10.432 10.6294 10.3333 10.5494L7.66667 8.41603C7.54136 8.31472 7.46667 8.16273 7.46667 8.00005V3.73337C7.46667 3.44003 7.70666 3.20004 8 3.20004C8.29334 3.20004 8.53332 3.44003 8.53332 3.73337V7.74403L11 9.71737C11.2293 9.90138 11.2667 10.2374 11.0826 10.4667C10.9787 10.5974 10.824 10.6667 10.6667 10.6667Z" fill={color} />
    </Svg>

  );
};

export default ClockIcon;
