import styled from 'styled-components/native';
import { Colors } from '../../Theme';

export const ButtonContainer = styled.TouchableOpacity`
  height: 48px;
  background-color: ${Colors.Primary.Normal};
  width: 100%;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top:12px;
  margin-bottom: 12px;
`;

export const ButtonText = styled.Text`
  color: ${Colors.Base.Light};
  font-size: 18px;
  line-height: 21.7px;
  font-weight: bold;
`;
