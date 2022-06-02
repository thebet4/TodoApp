import React from 'react';
import {
  ImageBackground, View, TouchableOpacity, Image,
} from 'react-native';
import { Colors } from '../Theme';
import Caption from '../Typography/Caption';
import Title40 from '../Typography/Title40';

const Footer = () => {
  return (

    <ImageBackground
      source={require('./Assets/HomeFooterBg.png')}
      style={{ paddingBottom: 64 }}
    >
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 92,
      }}
      >
        <View style={{
          width: '30%',
          backgroundColor: Colors.Base.Light,
          height: 1,
        }}
        />
        <Title40 style={{
          color: Colors.Base.Light,
          marginHorizontal: 12,
        }}
        >
          Partners
        </Title40>
        <View style={{
          width: '30%',
          backgroundColor: Colors.Base.Light,
          height: 1,
        }}
        />
      </View>

      <View style={{
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
      >
        <Image source={require('./Assets/partner1.png')} resizeMode="center" />
        <Image source={require('./Assets/partner2.png')} resizeMode="center" />
        <Image source={require('./Assets/partner4.png')} resizeMode="center" />
        <Image source={require('./Assets/partner5.png')} resizeMode="center" />
        <Image source={require('./Assets/partner6.png')} resizeMode="center" />
        <Image source={require('./Assets/partner7.png')} resizeMode="center" />

      </View>

      <View style={{ width: '70%', alignSelf: 'center' }}>

        <TouchableOpacity style={{
          height: 44,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 2,
          borderColor: Colors.Base.Light,
          borderRadius: 51,
          marginBottom: 17,
        }}
        >
          <Caption style={{ color: Colors.Base.Light, fontSize: 18 }}>
            Acessar
          </Caption>
        </TouchableOpacity>
        <TouchableOpacity style={{
          height: 44,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 51,
          backgroundColor: Colors.Base.Light,
        }}
        >
          <Caption style={{ color: Colors.Primary.Normal, fontSize: 18 }}>
            Abrir Conta
          </Caption>
        </TouchableOpacity>
      </View>
    </ImageBackground>

  );
};

export default Footer;
