import React from 'react';
import { View } from 'react-native'
import { Box, Container, Text } from 'native-base'
import { IiconProps } from '../../../Shared/Interfaces/Components/Icons';
import { Colors } from '../../Theme';

interface ITabBarProps {
  Icon: React.ElementType<IiconProps>
  label: string
  focused: boolean
}

const TabBarItem = ({ Icon, label, focused }: ITabBarProps) => {
  return (
    <Box
      alignItems="center"
      flex={1}
    >
      <Container
        height={1}
        width={100}
        marginBottom={3}
        backgroundColor={focused ? 'primary.500' : 'white.500'}
      />
      <Container
        alignItems="center"
        flex={1}
        justifyContent="space-between"
        marginBottom={3}

      >
        {Icon && focused
          && (
            <>
              <Icon width={24} height={24} color={Colors.primary[500]} />
              <Text color="primary.500">{label}</Text>
            </>
          )}
        {Icon && !focused
          && (
            <>
              <Icon width={24} height={24} />
              <Text color="gray.500">{label}</Text>
            </>
          )}
      </Container>
    </Box>
  )
}

export default TabBarItem
