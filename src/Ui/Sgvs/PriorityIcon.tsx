import React from 'react';
import {
  Svg, Path,
} from 'react-native-svg';
import { IiconProps } from '../../Shared/Interfaces/Components/Icons';
import { Colors } from '../Theme';

const ProrityIcon = ({ color = Colors.gray[500], ...props }: IiconProps) => {
  return (
    <Svg fill="none" {...props}>
      <Path d="M10.9441 9.8504L6.14835 5.05887C6.06602 4.98038 5.93654 4.98038 5.85421 5.05887L1.0627 9.84612C1.06168 9.84712 1.06068 9.84812 1.05968 9.84914C0.978949 9.93155 0.980288 10.0638 1.0627 10.1445L5.85848 14.9361C5.89653 14.9756 5.94859 14.9985 6.00342 15C6.05903 15.0003 6.11258 14.9789 6.15263 14.9403L10.9442 10.1488C10.9452 10.1478 10.9462 10.1468 10.9472 10.1458C11.0279 10.0634 11.0265 9.93113 10.9441 9.8504Z" fill={color} />
    </Svg>

  );
};

export default ProrityIcon;
