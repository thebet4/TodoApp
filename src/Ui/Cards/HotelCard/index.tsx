import React from 'react';
import { Image } from 'react-native';
import IHotelCardProps from '../../../Shared/Interfaces/Components/Cards/HotelCard';
import { Colors } from '../../Theme';
import Body16 from '../../Typography/Body16';
import Subtitle from '../../Typography/Subtitle';
import { CardContainer, CardContentContainer } from './style';

const HotelCard = ({ imageUrl }: IHotelCardProps) => {
  return (
    <CardContainer>
      <Image source={{ uri: imageUrl }} style={{ width: '100%' }} />
      <CardContentContainer>
        <Subtitle style={{ color: Colors.Base.Gray }}>
          Lorem Ipsum
        </Subtitle>
        <Body16 style={{ color: Colors.Primary.Normal, marginVertical: 12 }}>
          6 diárias
          {' '}
          {'\n'}
          Quarto
          {'\n'}
          Passagem Aérea
          {'\n'}
        </Body16>
        <Subtitle style={{ color: Colors.Base.Gray }}>
          R$ 2.999,00
        </Subtitle>
      </CardContentContainer>
    </CardContainer>
  );
};

export default HotelCard;
