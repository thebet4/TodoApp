import createCompleteTodo from '../../../src/Shared/Operations/Mutations/completeTodo/completeTodo'
import { mockTodosVar } from '../../../Mocks/mockTodosVar';

const completeTodo = createCompleteTodo(mockTodosVar);

describe('completeTodo hook', () => {
  beforeEach(() => { return mockTodosVar([]) });

  it('should mark a todo as completed', () => {
    mockTodosVar([{
      text: 'string',
      completed: false,
      id: 0,
      priority: true,
      appointmentDate: '',
      categories: [],
      comments: [],
      isRecurring: true,
    }])
    completeTodo(0)

    expect(
      mockTodosVar()[0].completed,
    ).toBeTruthy()
  })
})
