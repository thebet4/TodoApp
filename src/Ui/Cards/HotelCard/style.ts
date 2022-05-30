import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from '../../Theme';

const CartWidth = Dimensions.get('window').width * 0.8;

export const CardContainer = styled.View`
  height: 494px;
  width: ${CartWidth}px;
  margin-top: 71px;
  margin-bottom: 71px;
  margin-left: 20px;
  margin-right: 20px;
  background-color: ${Colors.Background.Lightest};
  border-bottom-left-radius: 70px;
  border-bottom-right-radius: 70px;

`;

export const CardContentContainer = styled.View`
  padding-left: 36px;
  padding-top: 36px;
`;
