import { Todos } from '../src/Shared/Models/Todos';
import { createMockReactiveVar } from './createMockReactiveVars';

export const mockTodosVar = createMockReactiveVar<Todos>([]);
