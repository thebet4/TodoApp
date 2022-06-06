import React from 'react';
import {
  Svg, Path, Defs, ClipPath, G, Rect,
} from 'react-native-svg';
import { IiconProps } from '../../Shared/Interfaces/Components/Icons';
import { Colors } from '../Theme';

const TaskIcon = ({
  color = Colors.white[500],
  stroke = Colors.gray[500],
  ...props
}: IiconProps) => {
  return (
    <Svg fill="none" {...props}>
      <G clip-path="url(#clip0_1_7795)">
        <Path fill-rule="evenodd" clip-rule="evenodd" d="M10.9308 20.9658C16.5996 20.9658 21.195 16.3704 21.195 10.7017C21.195 8.56879 20.5444 6.58788 19.4309 4.9465L21.427 2.95044C21.5551 2.8223 21.5551 2.61454 21.427 2.4864C21.2989 2.35826 21.0911 2.35826 20.963 2.4864L19.0404 4.40898C17.1625 1.9924 14.2282 0.4375 10.9308 0.4375C5.26209 0.4375 0.666672 5.03292 0.666672 10.7017C0.666672 16.3704 5.26209 20.9658 10.9308 20.9658ZM19.0404 4.40898L10.9308 12.5185L7.74146 9.32917C7.61332 9.20103 7.40557 9.20103 7.27743 9.32917C7.14929 9.45731 7.14929 9.66507 7.27743 9.79321L10.6988 13.2146C10.7603 13.2761 10.8438 13.3107 10.9308 13.3107C11.0179 13.3107 11.1013 13.2761 11.1628 13.2146L19.4309 4.9465C19.3065 4.763 19.1762 4.58374 19.0404 4.40898Z" fill={color} stroke={stroke} />
      </G>
      <Defs>
        <ClipPath id="clip0_1_7795">
          <Rect width="21" height="21" fill="white" transform="translate(0.666672)" />
        </ClipPath>
      </Defs>
    </Svg>

  );
};

export default TaskIcon;
