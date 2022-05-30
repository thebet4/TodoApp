import React from 'react';
import { View } from 'react-native';
import { CalendarIcon, OpenedEyeIcon } from '../../Svgs';
import { Colors } from '../../Theme';
import Caption from '../../Typography/Caption';
import {
  FormContainer, HorizontalDivider, VerticalContainer, VerticalDivider,
} from './style';

const SearchForm = () => {
  return (
    <FormContainer>
      <VerticalContainer>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
        >
          <OpenedEyeIcon
            color={Colors.Primary.Normal}
            width={32}
            height={32}
            style={{ marginRight: 12 }}
          />
          <Caption style={{ color: Colors.Base.Gray }}>
            Para onde quer ir?
          </Caption>
        </View>
      </VerticalContainer>
      <HorizontalDivider />
      <VerticalContainer>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
        >
          <CalendarIcon
            color={Colors.Primary.Normal}
            width={24}
            height={24}
            style={{ marginRight: 12 }}
          />
          <Caption style={{ color: Colors.Base.Gray }}>Entrada</Caption>
        </View>

        <VerticalDivider />
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
        >
          <CalendarIcon
            color={Colors.Primary.Normal}
            width={24}
            height={24}
            style={{ marginRight: 12 }}
          />
          <Caption style={{ color: Colors.Base.Gray }}>Saida</Caption>
        </View>
      </VerticalContainer>
    </FormContainer>
  );
};

export default SearchForm;
