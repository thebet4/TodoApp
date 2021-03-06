import React from 'react';
import {
  Svg, Path,
} from 'react-native-svg';
import { IiconProps } from '../../Shared/Interfaces/Components/Icons';
import { Colors } from '../Theme';

const SearchIcon = ({ color = Colors.gray[500], ...props }: IiconProps) => {
  return (
    <Svg fill="none" {...props}>
      <Path d="M18.884 17.7646L13.3647 12.2452C14.4115 10.9528 15.0417 9.30976 15.0417 7.52086C15.0417 3.37388 11.6678 0 7.52083 0C3.37385 0 0 3.37388 0 7.52086C0 11.6678 3.37388 15.0417 7.52087 15.0417C9.30977 15.0417 10.9528 14.4115 12.2452 13.3647L17.7646 18.8841C17.9192 19.0386 18.1698 19.0386 18.3244 18.8841L18.8841 18.3244C19.0386 18.1698 19.0386 17.9192 18.884 17.7646ZM7.52087 13.4584C4.24673 13.4584 1.58335 10.795 1.58335 7.52086C1.58335 4.24673 4.24673 1.58335 7.52087 1.58335C10.795 1.58335 13.4584 4.24673 13.4584 7.52086C13.4584 10.795 10.795 13.4584 7.52087 13.4584Z" fill={color} />
    </Svg>

  );
};

export default SearchIcon;
