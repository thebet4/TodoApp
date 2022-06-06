import React from 'react';
import {
  AddIcon, Box, Container, Text,
} from 'native-base'
import { FilterIcon, PersonalIcon, SearchIcon } from '../../Sgvs';
import { Colors } from '../../Theme';

interface IHeaderProps {
  title: string
}

const Header = ({ title }: IHeaderProps) => {
  return (
    <Box
      backgroundColor="primary.500"
      padding="4"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Text
        fontFamily="heading"
        fontWeight={800}
        fontSize="2xl"
        color="white.500"
        bold
        underline
      >
        {title || ''}
      </Text>

      <Container flexDirection="row" width="135" justifyContent="space-between">
        <SearchIcon color={Colors.white[500]} width={19} height={19} />
        <FilterIcon color={Colors.white[500]} width={19} height={19} />
        <PersonalIcon color={Colors.white[500]} width={19} height={19} />
        <AddIcon color={Colors.white[500]} width={19} height={19} />
      </Container>
    </Box>
  )
}

export default Header
