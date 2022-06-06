import React from 'react';
import {
  Svg, Path, Defs, ClipPath, G, Rect,
} from 'react-native-svg';
import { IiconProps } from '../../Shared/Interfaces/Components/Icons';
import { Colors } from '../Theme';

const PersonalIcon = ({ color = Colors.gray[500], ...props }: IiconProps) => {
  return (
    <Svg fill="none" {...props}>
      <G clip-path="url(#clip0_1_7440)">
        <Path fill-rule="evenodd" clip-rule="evenodd" d="M14.0171 2.42966C14.052 2.42601 14.0869 2.4216 14.1217 2.41719C14.2057 2.40654 14.2898 2.3959 14.3751 2.3959C16.3566 2.3959 17.9688 4.00819 17.9688 5.98964C17.9688 7.97109 16.3566 9.58338 14.3751 9.58338C14.2901 9.58338 14.2063 9.57273 14.1224 9.56208L14.1224 9.56207L14.1224 9.56207C14.0873 9.55762 14.0523 9.55317 14.0172 9.54949C13.7122 10.01 13.3389 10.4147 12.9295 10.7826C13.3975 10.9268 13.8805 11.0209 14.3751 11.0209C17.149 11.0209 19.4064 8.76355 19.4064 5.9896C19.4064 3.21565 17.1491 0.958344 14.3751 0.958344C13.8805 0.958344 13.3974 1.05241 12.9294 1.19655C13.3388 1.56459 13.7121 1.96914 14.0171 2.42966ZM1.05003 14.4462C5.57457 11.8449 11.6755 11.8449 16.2 14.4462C16.8478 14.8189 17.25 15.5299 17.25 16.3027V20.3646C17.25 20.7619 16.9285 21.0834 16.5312 21.0834H0.718757C0.321464 21.0834 0 20.7619 0 20.3646V16.3034C0 15.5299 0.402175 14.8189 1.05003 14.4462ZM1.43755 19.6459H15.8125V16.3027C15.8125 16.043 15.6869 15.8093 15.484 15.6927C11.3934 13.3414 5.85672 13.3414 1.76603 15.6927C1.56321 15.8093 1.43755 16.043 1.43755 16.3034V19.6459ZM15.5384 12.5326C17.8169 12.702 20.0165 13.3345 21.95 14.4462C22.5972 14.8175 23.0001 15.5292 23 16.3034V20.3646C23 20.7619 22.6786 21.0834 22.2813 21.0834H18.6875V19.6459H21.5625V16.3034C21.5625 16.043 21.4368 15.8092 21.2347 15.6927C20.2698 15.1383 19.2285 14.7181 18.1455 14.4174C17.8425 13.9222 17.4305 13.4953 16.9166 13.1996C16.5135 12.9679 16.0875 12.7777 15.6617 12.5877L15.6616 12.5876L15.5384 12.5326ZM13.6563 5.98964C13.6563 8.76359 11.399 11.0209 8.62509 11.0209C5.85118 11.0209 3.59384 8.76359 3.59384 5.98964C3.59384 3.21569 5.85114 0.958387 8.62509 0.958387C11.399 0.958387 13.6563 3.21569 13.6563 5.98964ZM12.2188 5.98964C12.2188 4.00819 10.6066 2.3959 8.62509 2.3959C6.64364 2.3959 5.03135 4.00819 5.03135 5.98964C5.03135 7.9711 6.64364 9.58338 8.62509 9.58338C10.6065 9.58338 12.2188 7.9711 12.2188 5.98964Z" fill="white" />
      </G>
      <Defs>
        <ClipPath id="clip0_1_7440">
          <Rect width="23" height="23" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>

  );
};

export default PersonalIcon;