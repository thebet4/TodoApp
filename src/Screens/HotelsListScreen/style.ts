import styled from 'styled-components/native';
import { Colors } from '../../Ui/Theme';
import Subtitle from '../../Ui/Typography/Subtitle';

interface ICategoryButton {
  isSelected: boolean
}

export const HeaderContainer = styled.View`
  width: 100%;
  min-height: 200px;
  padding-top: 37px;
  padding-bottom: 37px;
  align-items: center;
`;

export const CategoryButton = styled.TouchableOpacity<ICategoryButton>`
  margin-right: 17.5px;
  margin-left: 17.5px;
  border-bottom-width: ${(props) => { return (props.isSelected ? 8 : 0); }}px;
  border-bottom-color: ${Colors.Primary.Light};
`;

export const CategoryButtonText = styled(Subtitle)`
  color: ${Colors.Base.Gray}
`;
