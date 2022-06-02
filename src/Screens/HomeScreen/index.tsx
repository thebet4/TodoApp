import React from 'react';
import {
  ImageBackground, ScrollView, View, Image, FlatList,
} from 'react-native';
import * as Linking from 'expo-linking';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { IHomeSettings } from '../../Shared/Interfaces/Screens/settings/HomeSettings';
import SettingsService from '../../Shared/services/SettingsService';
import { Button } from '../../Ui/Buttons';
import { HotelCard, TeamCard } from '../../Ui/Cards';
import { ContentContainer } from '../../Ui/Containers';
import { SearchForm } from '../../Ui/Forms';
import {
  BlockChainIcon,
  HotelIcon, LogoIcon, NFTIcon, SearchIcon,
} from '../../Ui/Svgs';
import { Colors } from '../../Ui/Theme';
import Body13 from '../../Ui/Typography/Body13';
import Body16 from '../../Ui/Typography/Body16';
import Subtitle from '../../Ui/Typography/Subtitle';
import Title40 from '../../Ui/Typography/Title40';
import Title56 from '../../Ui/Typography/Title56';
import { RoadmapDateConteiner, RoadmapItemContainer, SearchFormContainer } from './style';
import { MainStackParamsList } from '../../Routing/types';
import Footer from '../../Ui/Footer';
import IHotelCardProps from '../../Shared/Interfaces/Components/Cards/HotelCard';

const HomeScreen = ({
  navigation,
}: NativeStackScreenProps<MainStackParamsList, 'HomeScreen'>) => {
  const [infos, setInfos] = React.useState({} as IHomeSettings);

  const [hotels] = React.useState<IHotelCardProps[]>([
    {
      category: 0,
      name: 'One World',
      description: '6 diárias \nQuarto \nPassagem Aérea',
      valueInBrl: '2.999,00',
      valueInInn: '299',
      icon: require('./Assets/OneWorldLogo.png'),
      location: {
        lat: -21.7826654,
        lng: -48.1995018,
      },
      imageUrl: require('./Assets/OneWorld.jpg'),
    },
    {
      category: 0,
      name: 'The Mutiny',
      description: '6 diárias \nQuarto \nPassagem Aérea',
      valueInBrl: '2.999,00',
      valueInInn: '299',
      icon: '',
      location: {
        lat: -21.7892489,
        lng: -48.1849411,
      },
      imageUrl: require('./Assets/TheMutiny.jpg'),
    },
    {
      category: 0,
      name: 'EAST Miami',
      description: '6 diárias \nQuarto \nPassagem Aérea',
      valueInBrl: '2.999,00',
      valueInInn: '299',
      icon: '',
      location: {
        lat: -21.7694771,
        lng: -48.184801,
      },
      imageUrl: require('./Assets/EastMiami.jpg'),

    },
    {
      category: 0,
      name: 'São Paulo Higienópolis Affiliated by Meliá',
      description: '6 diárias \nQuarto \nPassagem Aérea',
      valueInBrl: '2.999,00',
      valueInInn: '299',
      icon: '',
      location: {
        lat: -21.7742755,
        lng: -48.1769498,
      },
      imageUrl: require('./Assets/SpHigienopolis.jpg'),

    },
    {
      category: 0,
      name: 'Comfort Suites Alphaville',
      description: '6 diárias \nQuarto \nPassagem Aérea',
      valueInBrl: '2.999,00',
      valueInInn: '299',
      icon: '',
      location: {
        lat: -21.7742755,
        lng: -48.1769498,
      },
      imageUrl: require('./Assets/Alphaville.jpg'),

    }, {
      category: 0,
      name: 'Regency Way Montevideo Hotel',
      description: '6 diárias \nQuarto \nPassagem Aérea',
      valueInBrl: '2.999,00',
      valueInInn: '299',
      icon: '',
      location: {
        lat: -21.7742755,
        lng: -48.1769498,
      },
      imageUrl: require('./Assets/Regency.jpg'),

    },
  ]);

  React.useLayoutEffect(() => {
    (
      async () => {
        const settings = await SettingsService.getHomeSettings();
        setInfos(settings);
      }
    )();
  }, []);

  const _handleWhitePaperDownloadPress = () => {
    Linking.openURL(infos?.value?.whitepaper?.whitepaperFile);
  };

  const _handleSearchButtonPress = () => {
    navigation.navigate('HotelsListScreen');
  };

  return (
    <ScrollView>
      <ImageBackground
        source={{
          uri: infos?.value?.principal?.image?.url,
        }}
      >
        <ContentContainer>
          <LogoIcon width={64} height={33} />
          <Title56
            style={{ color: Colors.Base.Light, marginTop: 48 }}
          >
            {
              infos.value?.principal?.title
            }
          </Title56>
          <Body16 style={{ color: Colors.Base.Light, marginTop: 24 }}>
            {
              infos.value?.principal?.description
            }
          </Body16>
          <Button
            Label={
                infos.value?.principal?.calltoaction
              }

          />
          <SearchFormContainer>
            <TouchableWithoutFeedback
              onPress={_handleSearchButtonPress}
            >

              <SearchForm />
            </TouchableWithoutFeedback>

            <Button
              Label="Pesquisar"
              CustomLeftIcon={SearchIcon}
              onPress={_handleSearchButtonPress}
            />
          </SearchFormContainer>

          <View style={{
            marginTop: 26,
            alignItems: 'center',
          }}
          >
            <Body16 style={{ color: Colors.Base.Light, marginBottom: 24, textAlign: 'center' }}>
              {
                infos.value?.principal?.text2
              }
            </Body16>

            <LogoIcon width={179} height={92} color={Colors.Primary.Normal} />
            <Subtitle style={{ color: Colors.Base.Light, marginTop: 24, textAlign: 'center' }}>
              {
                infos.value?.principal?.text3
              }
            </Subtitle>
          </View>
        </ContentContainer>
      </ImageBackground>
      <Image
        style={{
          width: '90%',
          height: 300,
          borderTopRightRadius: 148,
          borderBottomRightRadius: 148,
          marginTop: 36,
        }}
        source={require('./Assets/HomeSectionImage.png')}
        resizeMode="cover"
      />

      <ContentContainer>
        <Title40 style={{ color: Colors.Base.Gray }}>
          With (out) wall?
          You choose.
        </Title40>
        <LogoIcon width={84} height={44} color={Colors.Primary.Normal} />
      </ContentContainer>

      <Image
        style={{
          height: 120,
          width: '100%',
        }}
        source={require('./Assets/HomeSectionImage2.png')}
        resizeMode="cover"
      />

      <ContentContainer>

        <Subtitle style={{ color: Colors.Base.Gray, marginTop: 24 }}>
          Hotéis em destaque
        </Subtitle>
      </ContentContainer>

      <FlatList
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
        data={hotels}
        renderItem={({ item }) => {
          return (
            <HotelCard
              imageUrl={item.imageUrl}
              name={item.name}
              description={item.description}
              valueInBrl={item.valueInBrl}
              valueInInn={item.valueInInn}
              icon=""
            />
          );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <ContentContainer style={{ alignItems: 'center' }}>

        <Body16 style={{ color: Colors.Base.Gray, textAlign: 'center' }}>
          {
            infos?.value?.hotelDestaque?.textTaxa
          }
        </Body16>

        <Subtitle style={{ color: Colors.Base.Gray, marginTop: 28, textAlign: 'center' }}>
          {
            infos?.value?.hotelDestaque?.textTaxa2
          }
        </Subtitle>
        <NFTIcon
          width={142}
          height={160}
          color={Colors.Primary.Normal}
          style={{ marginTop: 120, marginBottom: 12 }}
        />
        <Body16 style={{ textAlign: 'center' }}>

          {infos?.value?.hotelDestaque?.textNFT}
        </Body16>

        <HotelIcon
          width={127}
          height={207}
          color={Colors.Primary.Normal}
          style={{ marginTop: 120, marginBottom: 12 }}
        />
        <Body16 style={{ textAlign: 'center' }}>

          {infos?.value?.hotelDestaque?.textBuild}
        </Body16>

        <BlockChainIcon
          width={215}
          height={164}
          color={Colors.Primary.Normal}
          style={{ marginTop: 120, marginBottom: 12 }}
        />

        <Body16 style={{ textAlign: 'center' }}>
          {infos?.value?.hotelDestaque?.textBlock}
        </Body16>
      </ContentContainer>

      <ImageBackground
        style={{
          minHeight: 300,
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 82,
        }}
        source={require('./Assets/HomeSectionImage3.png')}
      >
        <View style={{
          borderColor: Colors.Primary.Normal,
          borderWidth: 8,
          borderRadius: 87,
          width: '85%',
          alignItems: 'center',
          justifyContent: 'center',
          height: 104,
        }}
        >

          <Title56 style={{ color: Colors.Base.Light }}>
            White Paper
          </Title56>
        </View>

        <ContentContainer>

          <Body16 style={{
            color: Colors.Base.Light,
            textAlign: 'center',

          }}
          >
            {infos?.value?.whitepaper?.text}
          </Body16>

        </ContentContainer>

        <View style={{ width: '80%' }}>

          <Button
            onPress={_handleWhitePaperDownloadPress}
            Label="Download"
          />
        </View>
      </ImageBackground>

      <ContentContainer>
        <Title40
          style={{
            color: Colors.Base.Gray,
            marginVertical: 48,
            textAlign: 'center',
          }}
        >
          Roadmap
        </Title40>

        {
          infos?.value?.roadmap?.listRoadmap.map((roadMapItem) => {
            return (
              <RoadmapItemContainer>
                <Body13 style={{ color: Colors.Base.Light }}>
                  {roadMapItem?.meta}
                </Body13>

                <RoadmapDateConteiner>
                  <Body16
                    style={{
                      color: Colors.Primary.Normal,
                      textAlign: 'center',
                      fontWeight: '700',
                      lineHeight: 17.92,
                      fontSize: 16,
                    }}
                  >
                    Q
                    {roadMapItem?.trimestre}
                    {' '}
                    {'\n'}
                    20
                    {roadMapItem?.ano}

                  </Body16>
                </RoadmapDateConteiner>
              </RoadmapItemContainer>
            );
          })
}

      </ContentContainer>

      <ContentContainer style={{ backgroundColor: Colors.Background.Lightest }}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        >
          <View style={{
            width: '30%',
            backgroundColor: Colors.Primary.Normal,
            height: 2,
          }}
          />
          <Title40 style={{
            color: Colors.Base.Gray,
            marginHorizontal: 12,
          }}
          >
            Team
          </Title40>
          <View style={{
            width: '30%',
            backgroundColor: Colors.Primary.Normal,
            height: 2,
          }}
          />
        </View>

        <Body16 style={{
          color: Colors.Base.Gray,
          textAlign: 'center',
        }}
        >
          O Time da Innverso pode ser considerado um dream team. Engajados,
          dedicados e especialistas nas funções que atuam
        </Body16>

        <FlatList
          style={{ marginTop: 128, marginBottom: 64 }}
          data={[
            {
              name: 'Carlo Montova',
              role: 'Economista',
              imageUrl: require('./Assets/003.png'),
            },
            {
              name: 'YtiSato Hamashi',
              role: 'Desenvolvedora',
              imageUrl: require('./Assets/002.png'),
            },
            {
              name: 'Antônio CA',
              role: 'CEO',
              imageUrl: require('./Assets/001.png'),
            },
          ]}
          renderItem={({ item }) => {
            return (
              <TeamCard name={item.name} role={item.role} imageUrl={item.imageUrl} />
            );
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </ContentContainer>

      <Footer />
    </ScrollView>
  );
};

export default HomeScreen;
