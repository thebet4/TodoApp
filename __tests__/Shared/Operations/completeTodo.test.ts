import createCompleteTodo from '../../../src/Shared/Operations/Mutations/completeTodo/completeTodo'
import { mockTodosVar } from '../../../Mocks/mockTodosVar';

const completeTodo = createCompleteTodo(mockTodosVar);

describe('completeTodo hook', () => {
  beforeEach(() => { return mockTodosVar([]) });

  it('should mark a todo as completed', () => {
    mockTodosVar([{ id: 0, text: 'First todo', completed: false }])
    completeTodo(0);

    expect(
      mockTodosVar()[0].completed,
    ).toBeTruthy()
  })
})
