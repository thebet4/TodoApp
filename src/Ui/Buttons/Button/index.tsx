import React from 'react';
import IButtonProps from '../../../Shared/Interfaces/Components/Buttons/Button';
import { ButtonContainer, ButtonText } from './style';

const Button = ({
  onPress, Label, CustomLeftIcon, CustomRightIcon,
}: IButtonProps) => {
  return (
    <ButtonContainer onPress={onPress}>
      {
         CustomLeftIcon && <CustomLeftIcon style={{ marginRight: 12 }} width={24} height={24} />
        }
      <ButtonText>
        {Label}
      </ButtonText>
      {
         CustomRightIcon && <CustomRightIcon style={{ marginLeft: 12 }} width={24} height={24} />
        }
    </ButtonContainer>
  );
};

export default Button;
