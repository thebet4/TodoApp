import React from 'react';
import { Image, View } from 'react-native';
import ITeamCardProps from '../../../Shared/Interfaces/Components/Cards/TeamCard';
import { Colors } from '../../Theme';
import Body16 from '../../Typography/Body16';
import Subtitle from '../../Typography/Subtitle';

const TeamCard = ({ name, imageUrl, role } : ITeamCardProps) => {
  return (
    <View>
      <Image
        style={{
          marginLeft: 14,
          marginRight: 14,

          width: 312,
          height: 354,
        }}
        source={imageUrl}
      />
      <Subtitle style={{ color: Colors.Primary.Normal, textAlign: 'center' }}>
        {name}
      </Subtitle>
      <Body16 style={{ color: Colors.Base.Gray, textAlign: 'center' }}>
        {role}
      </Body16>
    </View>
  );
};

export default TeamCard;
