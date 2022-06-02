import React from 'react';
import { View } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import MapView, { Marker } from 'react-native-maps';
import IHotelCardProps from '../../Shared/Interfaces/Components/Cards/HotelCard';
import { Button } from '../../Ui/Buttons';
import { HotelCard } from '../../Ui/Cards';
import { ContentContainer } from '../../Ui/Containers';
import Footer from '../../Ui/Footer';
import { SearchForm } from '../../Ui/Forms';
import { LogoIcon, SearchIcon } from '../../Ui/Svgs';
import { Colors } from '../../Ui/Theme';
import { CategoryButton, HeaderContainer, CategoryButtonText } from './style';

interface ICategoryProps {
  label: string,
  id: number,
}

const HotelsListScreen = () => {
  // eslint-disable-next-line no-unused-vars

  const [categories] = React.useState<ICategoryProps[]>([
    {
      label: 'Hotéis',
      id: 0,
    },
    {
      label: 'Pacotes',
      id: 1,
    },
    {
      label: 'Atividades',
      id: 2,
    },
  ]);

  const [selectedCategoryId, setSelectedCategotyId] = React.useState(0);

  const [mapIsVisible, setMapIsVisible] = React.useState(false);
  // eslint-disable-next-line no-unused-vars

  const [hotels] = React.useState<IHotelCardProps[]>([
    {
      category: 0,
      name: 'Lorem Ipsum',
      description: '6 diárias \n Quarto \n Passagem Aérea',
      value: '2.999,00',
      location: {
        lat: -21.7826654,
        lng: -48.1995018,
      },
      imageUrl: '',
    },
    {
      category: 0,
      name: 'Lorem Ipsum 2',
      description: '6 diárias \n Quarto \n Passagem Aérea',
      value: '2.999,00',
      location: {
        lat: -21.7892489,
        lng: -48.1849411,
      },
      imageUrl: '',
    },
    {
      category: 1,
      name: 'Lorem Ipsum 3',
      description: '6 diárias \n Quarto \n Passagem Aérea',
      value: '2.999,00',
      location: {
        lat: -21.7694771,
        lng: -48.184801,
      },
      imageUrl: '',
    },
    {
      category: 2,
      name: 'Lorem Ipsum 4',
      description: '6 diárias \n Quarto \n Passagem Aérea',
      value: '2.999,00',
      location: {
        lat: -21.7742755,
        lng: -48.1769498,
      },
      imageUrl: '',
    },
  ]);

  const _handleSelectCategory = (category: ICategoryProps) => {
    setSelectedCategotyId(category.id);
  };

  const _handleShowMapButtonPress = () => {
    setMapIsVisible(!mapIsVisible);
  };

  return (
    <ScrollView>
      <ContentContainer style={{ backgroundColor: Colors.Base.Light }}>
        <HeaderContainer>
          <LogoIcon
            width={64}
            height={33}
            style={{ marginBottom: 24 }}
            color={Colors.Primary.Normal}
          />
          <SearchForm style={{ borderWidth: 1, borderColor: Colors.Primary.Normal }} />

          <Button
            Label="Pesquisar"
            CustomLeftIcon={SearchIcon}
          />
        </HeaderContainer>

        <View style={{ height: 50 }}>

          <FlatList
            data={categories}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <CategoryButton
                  isSelected={item.id === selectedCategoryId}
                  key={item.id}
                  onPress={() => { return _handleSelectCategory(item); }}
                >
                  <CategoryButtonText>
                    {item.label}
                  </CategoryButtonText>
                </CategoryButton>
              );
            }}
          />
        </View>

        <Button
          Label={mapIsVisible ? 'Ver Lista' : 'Ver Mapa'}
          onPress={_handleShowMapButtonPress}
        />

        {
          mapIsVisible ? (
            <View style={{
              flex: 1,
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            >
              <MapView
                style={{
                  width: '100%',
                  height: 400,
                }}

              >
                {
                  hotels.map((hotel) => {
                    return (
                      <Marker
                        coordinate={{
                          latitude: hotel.location?.lat, longitude: hotel.location?.lng,
                        }}
                        pinColor={Colors.Primary.Normal}

                      />
                    );
                  })
                }
              </MapView>
            </View>
          )
            : hotels.map((hotel) => {
              return (
                <HotelCard
                  imageUrl=""
                  category={hotel.category}
                  name={hotel.name}
                  description={hotel.description}
                  value={hotel.value}
                />
              );
            })
      }

      </ContentContainer>
      <Footer />
    </ScrollView>
  );
};

export default HotelsListScreen;
