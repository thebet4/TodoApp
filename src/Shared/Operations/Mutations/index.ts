import { todosVar } from '../config/cache';
import createCompleteTodo from './completeTodo/completeTodo';

export const todoMutations = {
  completeTodo: createCompleteTodo(todosVar),
}
