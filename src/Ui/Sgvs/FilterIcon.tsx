import React from 'react';
import {
  Svg, Path, Defs, ClipPath, G, Rect,
} from 'react-native-svg';
import { IiconProps } from '../../Shared/Interfaces/Components/Icons';
import { Colors } from '../Theme';

const FilterIcon = ({ color = Colors.gray[500], ...props }: IiconProps) => {
  return (
    <Svg fill="none" {...props}>
      <G clip-path="url(#clip0_1_7435)">
        <Path fill-rule="evenodd" clip-rule="evenodd" d="M9.99999 19.8205C10.1894 19.8205 10.371 19.7452 10.505 19.6113C10.6389 19.4774 10.7141 19.2957 10.7141 19.1063V5.87529C11.3541 5.70218 11.9094 5.3025 12.2768 4.75059C12.6442 4.19867 12.7986 3.53211 12.7113 2.87488C12.6239 2.21766 12.3009 1.61453 11.8021 1.17768C11.3034 0.740824 10.663 0.5 9.99999 0.5C9.337 0.5 8.69657 0.740824 8.19784 1.17768C7.69912 1.61453 7.37605 2.21766 7.28873 2.87488C7.20142 3.53211 7.35581 4.19867 7.72317 4.75059C8.09054 5.3025 8.64587 5.70218 9.28587 5.87529V19.1063C9.28587 19.2957 9.36111 19.4774 9.49503 19.6113C9.62896 19.7452 9.8106 19.8205 9.99999 19.8205ZM8.69315 3.25447C8.69174 2.9957 8.76718 2.74234 8.90991 2.52649C9.05265 2.31064 9.25625 2.14203 9.49492 2.04203C9.73358 1.94202 9.99657 1.91512 10.2505 1.96473C10.5045 2.01435 10.738 2.13825 10.9215 2.32072C11.105 2.5032 11.2302 2.73604 11.2812 2.98974C11.3322 3.24343 11.3067 3.50656 11.208 3.74577C11.1093 3.98498 10.9418 4.1895 10.7268 4.33342C10.5117 4.47734 10.2588 4.55416 9.99999 4.55417C9.65463 4.55417 9.32331 4.41747 9.07843 4.17393C8.83356 3.93039 8.69504 3.59982 8.69315 3.25447ZM17.2698 19.8205C17.4592 19.8205 17.6408 19.7452 17.7747 19.6113C17.9086 19.4774 17.9839 19.2957 17.9839 19.1063V16.8854C18.5623 16.7303 19.0734 16.3887 19.4379 15.9136C19.8024 15.4384 20 14.8563 20 14.2575C20 13.6586 19.8024 13.0765 19.4379 12.6013C19.0734 12.1262 18.5623 11.7846 17.9839 11.6295V1.23351C17.9839 1.04411 17.9086 0.862472 17.7747 0.728549C17.6408 0.594625 17.4592 0.519388 17.2698 0.519388C17.0804 0.519388 16.8987 0.594625 16.7648 0.728549C16.6309 0.862472 16.5556 1.04411 16.5556 1.23351V11.6366C15.9772 11.7917 15.4661 12.1333 15.1016 12.6085C14.7371 13.0836 14.5395 13.6657 14.5395 14.2646C14.5395 14.8635 14.7371 15.4456 15.1016 15.9207C15.4661 16.3959 15.9772 16.7375 16.5556 16.8926V19.1135C16.5575 19.3016 16.6336 19.4814 16.7673 19.6138C16.901 19.7462 17.0816 19.8205 17.2698 19.8205ZM15.9629 14.2575C15.9629 13.999 16.0396 13.7463 16.1832 13.5314C16.3268 13.3165 16.5309 13.149 16.7696 13.0501C17.0084 12.9512 17.2712 12.9253 17.5247 12.9757C17.7782 13.0262 18.0111 13.1506 18.1938 13.3334C18.3766 13.5162 18.5011 13.749 18.5515 14.0025C18.6019 14.256 18.576 14.5188 18.4771 14.7576C18.3782 14.9964 18.2107 15.2005 17.9958 15.3441C17.7809 15.4877 17.5282 15.5643 17.2698 15.5643C16.9232 15.5643 16.5908 15.4266 16.3457 15.1815C16.1006 14.9365 15.9629 14.6041 15.9629 14.2575ZM2.01613 19.1063V12.7979C1.43771 12.6428 0.926614 12.3012 0.562095 11.826C0.197577 11.3509 0 10.7688 0 10.1699C0 9.57107 0.197577 8.98894 0.562095 8.5138C0.926614 8.03866 1.43771 7.69706 2.01613 7.54196V1.23351C2.01613 1.04411 2.09137 0.862472 2.22529 0.728549C2.35922 0.594625 2.54086 0.519388 2.73025 0.519388C2.91965 0.519388 3.10129 0.594625 3.23521 0.728549C3.36914 0.862472 3.44437 1.04411 3.44437 1.23351V7.54196C4.0228 7.69706 4.53389 8.03866 4.89841 8.5138C5.26293 8.98894 5.46051 9.57107 5.46051 10.1699C5.46051 10.7688 5.26293 11.3509 4.89841 11.826C4.53389 12.3012 4.0228 12.6428 3.44437 12.7979V19.1063C3.44437 19.2957 3.36914 19.4774 3.23521 19.6113C3.10129 19.7452 2.91965 19.8205 2.73025 19.8205C2.54086 19.8205 2.35922 19.7452 2.22529 19.6113C2.09137 19.4774 2.01613 19.2957 2.01613 19.1063ZM3.45823 9.07985C3.24238 8.93711 2.98902 8.86167 2.73025 8.86308C2.3849 8.86497 2.05433 9.00349 1.81079 9.24836C1.56725 9.49324 1.43055 9.82456 1.43055 10.1699C1.43056 10.4287 1.50739 10.6816 1.6513 10.8967C1.79522 11.1118 1.99974 11.2793 2.23895 11.378C2.47816 11.4767 2.74129 11.5021 2.99498 11.4511C3.24868 11.4001 3.48152 11.2749 3.664 11.0914C3.84648 10.908 3.97037 10.6744 4.01999 10.4205C4.0696 10.1665 4.0427 9.90352 3.9427 9.66485C3.84269 9.42618 3.67408 9.22258 3.45823 9.07985Z" fill="white" />
      </G>
      <Defs>
        <ClipPath id="clip0_1_7435">
          <Rect width="20" height="20" fill="white" transform="translate(0 0.5)" />
        </ClipPath>
      </Defs>
    </Svg>

  );
};

export default FilterIcon;