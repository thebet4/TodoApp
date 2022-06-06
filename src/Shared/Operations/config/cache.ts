import { InMemoryCache, ReactiveVar, makeVar } from '@apollo/client';
import { Todos } from '../../Models/Todos';

const todosInitialValue: Todos = [
  {
    id: 0,
    completed: false,
    text: 'Call carpenter to fix kitchen pipe',
    priority: true,
    appointmentDate: '2022-06-07 14:30',
    categories: [],
    comments: [],
    isRecurring: true,

  }, {
    id: 1,
    completed: false,
    text: 'Mow the lawn',
    priority: false,
    appointmentDate: '',
    categories: [],
    comments: ['No test comments here'],
    isRecurring: false,

  }, {
    id: 2,
    completed: false,
    text: 'Pick Melanie from football game',
    priority: false,
    appointmentDate: '',
    categories: ['Home', 'Celebration', 'Chores'],
    comments: ['This is a test comment', 'The second test comment'],
    isRecurring: false,

  },

]

export const todosVar: ReactiveVar<Todos> = makeVar<Todos>(
  todosInitialValue,
);

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        todos: {
          read() {
            return todosVar();
          },
        },
      },
    },
  },
});
