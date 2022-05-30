import React from 'react';
import {
  ImageBackground, ScrollView, View, Image, FlatList, TouchableOpacity,
} from 'react-native';
import * as Linking from 'expo-linking';
import { IHomeSettings } from '../../Shared/Interfaces/Screens/settings/HomeSettings';
import SettingsService from '../../Shared/services/SettingsService';
import { Button } from '../../Ui/Buttons';
import { HotelCard, TeamCard } from '../../Ui/Cards';
import { ContentContainer } from '../../Ui/Containers';
import { SearchForm } from '../../Ui/Forms';
import {
  BlockChainIcon,
  HotelIcon, LogoIcon, LogoWithTextIcon, NFTIcon, SearchIcon,
} from '../../Ui/Svgs';
import { Colors } from '../../Ui/Theme';
import Body13 from '../../Ui/Typography/Body13';
import Body16 from '../../Ui/Typography/Body16';
import Caption from '../../Ui/Typography/Caption';
import Subtitle from '../../Ui/Typography/Subtitle';
import Title40 from '../../Ui/Typography/Title40';
import Title56 from '../../Ui/Typography/Title56';
import { RoadmapDateConteiner, RoadmapItemContainer, SearchFormContainer } from './style';

const HomeScreen = () => {
  const [infos, setInfos] = React.useState({} as IHomeSettings);

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
            <SearchForm />

            <Button
              Label="Pesquisar"
              CustomLeftIcon={SearchIcon}
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
        data={[1, 2, 3, 4, 5]}
        renderItem={() => {
          return <HotelCard imageUrl={infos?.value?.hotelDestaque?.image?.url} />;
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

        <Body16>
          {infos?.value?.hotelDestaque?.textNFT}
        </Body16>

        <HotelIcon
          width={127}
          height={207}
          color={Colors.Primary.Normal}
          style={{ marginTop: 120, marginBottom: 12 }}
        />

        <Body16>
          {infos?.value?.hotelDestaque?.textBuild}
        </Body16>

        <BlockChainIcon
          width={215}
          height={164}
          color={Colors.Primary.Normal}
          style={{ marginTop: 120, marginBottom: 12 }}
        />

        <Body16>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Body16>

        <FlatList
          style={{ marginTop: 128, marginBottom: 64 }}
          data={[1, 2, 3, 4]}
          renderItem={() => {
            return (
              <TeamCard />
            );
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </ContentContainer>

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
          <LogoWithTextIcon width={185} height={112} style={{ marginVertical: 24 }} />
          <LogoWithTextIcon width={185} height={112} style={{ marginVertical: 24 }} />
          <LogoWithTextIcon width={185} height={112} style={{ marginVertical: 24 }} />

        </View>

        <Subtitle style={{ color: Colors.Base.Light, marginVertical: 24, textAlign: 'center' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Subtitle>

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

    </ScrollView>
  );
};

export default HomeScreen;
