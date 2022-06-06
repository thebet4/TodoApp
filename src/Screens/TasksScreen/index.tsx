import { Box, Text } from 'native-base';
import React from 'react';
import { useQuery } from '@apollo/client';
import { ActivityIndicator } from 'react-native';
import { Header } from '../../Ui/Components';

import {
  GET_ALL_TODOS,
} from '../../Shared/Operations/Queries/getAllTodos'
import { Colors } from '../../Ui/Theme';
import TodoList from '../../Ui/Components/TodoList';

const TasksScreen = () => {
  const { loading, data, error } = useQuery(
    GET_ALL_TODOS,
  )
  const todos = data?.todos;

  if (loading) return <ActivityIndicator color={Colors.primary[500]} />
  if (error) {
    return <Text>An Error occurred</Text>
  }
  if (!todos) {
    return <Text>No data!</Text>
  }

  return (
    <Box flex={1} backgroundColor="primary.500">
      <Header title="Tasks" />
      <Box
        backgroundColor="white.500"
        flex={1}
        borderTopLeftRadius={22}
        borderTopRightRadius={22}
        pr={5}
        pl={5}
      >
        <TodoList todos={todos} />
      </Box>
    </Box>
  )
}

export default TasksScreen
