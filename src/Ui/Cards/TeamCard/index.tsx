import React from 'react';
import { Image, View } from 'react-native';
import { Colors } from '../../Theme';
import Body16 from '../../Typography/Body16';
import Subtitle from '../../Typography/Subtitle';

const TeamCard = () => {
  return (
    <View>
      <Image
        style={{
          marginLeft: 14,
          marginRight: 14,

          width: 312,
          height: 354,
        }}
        source={require('./Assets/TeamMember.png')}
      />
      <Subtitle style={{ color: Colors.Primary.Normal, textAlign: 'center' }}>
        Lorem Ipsum
      </Subtitle>
      <Body16 style={{ color: Colors.Base.Gray, textAlign: 'center' }}>
        Lorem Ipsum
      </Body16>
    </View>
  );
};

export default TeamCard;
