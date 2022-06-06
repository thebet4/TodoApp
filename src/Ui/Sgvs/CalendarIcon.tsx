import React from 'react';
import {
  Svg, Path, Defs, ClipPath, G, Rect,
} from 'react-native-svg';
import { IiconProps } from '../../Shared/Interfaces/Components/Icons';
import { Colors } from '../Theme';

const CalendarIcon = ({ color = Colors.gray[500], ...props }: IiconProps) => {
  return (
    <Svg fill="none" {...props}>
      <G clip-path="url(#clip0_1_7755)">
        <Path fill-rule="evenodd" clip-rule="evenodd" d="M5.14583 4.375C4.90433 4.375 4.70833 4.179 4.70833 3.9375V2.625H2.52084C1.79721 2.625 1.20834 3.21387 1.20834 3.9375V6.125H20.4583V3.9375C20.4583 3.21387 19.8695 2.625 19.1458 2.625H16.9583V3.9375C16.9583 4.179 16.7623 4.375 16.5208 4.375C16.2793 4.375 16.0833 4.179 16.0833 3.9375V2.625H5.58333V3.9375C5.58333 4.179 5.38733 4.375 5.14583 4.375ZM16.0833 1.75H5.58333V0.4375C5.58333 0.196 5.38733 0 5.14583 0C4.90433 0 4.70833 0.196 4.70833 0.4375V1.75H2.52084C1.31421 1.75 0.333336 2.73087 0.333336 3.9375V6.5625V18.8125C0.333336 20.0191 1.31421 21 2.52084 21H19.1458C20.3525 21 21.3333 20.0191 21.3333 18.8125V6.5625V3.9375C21.3333 2.73087 20.3525 1.75 19.1458 1.75H16.9583V0.4375C16.9583 0.196 16.7623 0 16.5208 0C16.2793 0 16.0833 0.196 16.0833 0.4375V1.75ZM1.20834 7H20.4583V18.8125C20.4583 19.5361 19.8695 20.125 19.1458 20.125H2.52084C1.79721 20.125 1.20834 19.5361 1.20834 18.8125V7Z" fill={color} />
        <Path d="M7.07083 13.5625C7.07083 11.6054 8.65742 10.0188 10.6146 10.0188C11.181 10.0188 11.7154 10.1514 12.1893 10.3869C12.3841 10.4837 12.6204 10.4043 12.7172 10.2095C12.814 10.0148 12.7345 9.77847 12.5398 9.68169C11.9594 9.39326 11.3053 9.23126 10.6146 9.23126C8.22249 9.23126 6.28333 11.1704 6.28333 13.5625C6.28333 15.9546 8.22249 17.8938 10.6146 17.8938C13.0067 17.8938 14.9458 15.9546 14.9458 13.5625C14.9458 13.4002 14.9369 13.2397 14.9194 13.0817C14.8955 12.8656 14.7009 12.7098 14.4848 12.7336C14.2686 12.7575 14.1128 12.9521 14.1367 13.1683C14.151 13.2976 14.1583 13.4291 14.1583 13.5625C14.1583 15.5197 12.5717 17.1063 10.6146 17.1063C8.65742 17.1063 7.07083 15.5197 7.07083 13.5625Z" fill={color} />
        <Path d="M14.8305 10.7784C14.9843 10.6247 14.9843 10.3754 14.8305 10.2216C14.6767 10.0678 14.4274 10.0678 14.2737 10.2216L10.6146 13.8807L9.5805 12.8466C9.42673 12.6928 9.17742 12.6928 9.02365 12.8466C8.86988 13.0004 8.86988 13.2497 9.02365 13.4034L10.3362 14.7159C10.41 14.7898 10.5101 14.8313 10.6146 14.8313C10.719 14.8313 10.8192 14.7898 10.893 14.7159L14.8305 10.7784Z" fill={color} />
      </G>
      <Defs>
        <ClipPath id="clip0_1_7755">
          <Rect width="21" height="21" fill="white" transform="translate(0.333336)" />
        </ClipPath>
      </Defs>

    </Svg>

  );
};

export default CalendarIcon;
