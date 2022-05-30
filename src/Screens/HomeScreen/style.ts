import styled from 'styled-components/native';
import { Colors } from '../../Ui/Theme';

export const SearchFormContainer = styled.View`
  margin-top: 32px;
  margin-bottom: 24px;
`;

export const RoadmapItemContainer = styled.View`
  width: 100%;
  background-color: ${Colors.Primary.Normal};
  border-radius: 147px;
  min-height: 126px;
  padding-top: 24px;
  padding-bottom: 24px;
  flex-direction: row;
  align-items: center;
  padding-left: 40px;
  justify-content: space-around;
  margin-top: 19px;
`;

export const RoadmapDateConteiner = styled.View`
  width: 74px;
  height: 74px;
  background-color: ${Colors.Base.Light};
  border-radius: 74px;
  align-items: center;
  justify-content: center;
`;
