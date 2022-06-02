import React from 'react';
import { Image } from 'react-native';
import IHotelCardProps from '../../../Shared/Interfaces/Components/Cards/HotelCard';
import { Colors } from '../../Theme';
import Body16 from '../../Typography/Body16';
import Subtitle from '../../Typography/Subtitle';
import { CardContainer, CardContentContainer } from './style';

const HotelCard = ({
  imageUrl, description, name, valueInBrl, valueInInn,
}: IHotelCardProps) => {
  return (
    <CardContainer>
      <Image
        source={imageUrl || require('./Assets/HotelImage.png')}
        style={{ width: '100%', maxHeight: 240 }}
        resizeMode="cover"
      />
      <CardContentContainer>
        <Subtitle style={{ color: Colors.Base.Gray }}>
          {name}
          {' '}
        </Subtitle>
        <Body16 style={{ color: Colors.Primary.Normal, marginVertical: 12 }}>
          {description}
        </Body16>
        <Subtitle style={{ color: Colors.Base.Gray }}>
          INN
          {' '}
          {valueInInn}
        </Subtitle>
        <Body16 style={{ color: Colors.Base.Gray }}>
          R$
          {' '}
          {valueInBrl}
        </Body16>
      </CardContentContainer>
    </CardContainer>
  );
};

export default HotelCard;
