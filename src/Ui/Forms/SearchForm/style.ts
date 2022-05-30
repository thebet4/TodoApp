import styled from 'styled-components/native';
import { Colors } from '../../Theme';

export const FormContainer = styled.View`
  width: 100%;
  min-height: 100px;
  background-color: ${Colors.Base.Light};
  border-radius: 32px;
  align-items: center;
  justify-content: center;
`;

export const HorizontalDivider = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${Colors.Primary.Normal}
`;

export const VerticalContainer = styled.View`
  width: 100%;
  height: 64px;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
`;

export const VerticalDivider = styled.View`
  width: 1px;
  height: 64px;
  background-color: ${Colors.Primary.Normal}
`;
