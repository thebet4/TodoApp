import {
  Box, HStack, Text, Checkbox,
} from 'native-base';
import React from 'react';
import { FlatList } from 'react-native';
import { ITodoList } from '../../../Shared/Interfaces/Components/TodoList'
import {
  CalendarIcon, ClockIcon, CommentIcon, PriorityIcon, RepeatIcon,
} from '../../Sgvs';
import { Colors } from '../../Theme';
import { todoMutations } from '../../../Shared/Operations/Mutations'
import formatDateToDayAndMonth from '../../../Shared/Helpers/formatDateToDayAndMonth';

const { completeTodo } = todoMutations;

const TodoList = ({ todos }: ITodoList) => {
  const _handleUpdateATask = (id: number) => {
    completeTodo(id)
  }

  return (
    <Box
      mt={4}
    >
      <FlatList
        data={todos}
        renderItem={({
          item,
        }) => {
          return (
            <Box
              borderWidth="2"
              borderRadius={9}
              borderColor="coolGray.200"
              alignSelf="center"
              width="100%"
              padding={4}
              my={1.5}
            >
              <HStack
                space={3}
                justifyContent="space-between"
                alignItems="center"
              >
                <HStack alignItems="center">
                  {item.priority && (

                  <PriorityIcon
                    color={Colors.Modes.Done}
                    width={12}
                    height={16}
                    style={{ marginRight: 4 }}
                  />
                  )}
                  <Text
                    textDecorationLine={item.completed ? 'line-through' : ''}
                    fontSize="lg"
                    bold
                  >
                    {item.text}
                  </Text>
                </HStack>

                <Checkbox
                  value="test"
                  isDisabled={item.completed}
                  accessibilityLabel={item.text}
                  onChange={() => { return _handleUpdateATask(item.id) }}
                />

              </HStack>
              <HStack>
                {
                  item?.appointmentDate ? (
                    <HStack>
                      <HStack mr={4}>
                        <CalendarIcon width={21} height={21} color={Colors.gray[900]} />
                        <Text ml={2}>
                          {
                            formatDateToDayAndMonth(item.appointmentDate.split(' ')[0])
                          }
                        </Text>
                      </HStack>
                      <HStack mr={4} alignItems="center">
                        <ClockIcon width={16} height={16} color={Colors.gray[900]} />
                        <Text ml={2}>
                          {item.appointmentDate.split(' ')[1]}
                        </Text>
                      </HStack>
                    </HStack>
                  ) : null
                }
                {
                  item.comments?.length ? (
                    <HStack mr={4} alignItems="center">
                      <CommentIcon width={16} height={16} color={Colors.gray[900]} />
                      <Text ml={2}>
                        {item.comments?.length}
                      </Text>
                    </HStack>
                  ) : null
                }
                {
                  item.isRecurring ? (
                    <HStack mr={4} alignItems="center">
                      <RepeatIcon width={16} height={16} color={Colors.gray[900]} />
                    </HStack>
                  ) : null
                }
              </HStack>
              <FlatList
                data={item.categories}
                horizontal
                renderItem={(category) => {
                  return (
                    <Box
                      backgroundColor="amber.100"
                      ml={1}
                      mr={1}
                      mt={4}
                      pr={4}
                      pl={4}
                      py={1}
                      borderRadius={5}
                    >
                      <Text>
                        {category.item}
                      </Text>
                    </Box>
                  )
                }}
              />
            </Box>
          )
        }}
        keyExtractor={(item) => { return item.id as unknown as string }}
      />
    </Box>
  )
}

export default TodoList
