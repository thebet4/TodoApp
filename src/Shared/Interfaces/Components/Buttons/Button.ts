import { ElementType } from 'react';

export default interface IButtonProps {
  onPress?: () => void,
  Label?: string,
  CustomLeftIcon?: ElementType | ElementType<any> ;
  CustomRightIcon?: ElementType | ElementType<any> ;
};
