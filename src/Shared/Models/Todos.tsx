export interface Todo {
  text: string;
  completed: boolean;
  id: number;
  priority?: boolean;
  appointmentDate?: string;
  categories?: string[];
  comments?: string[];
  isRecurring?: boolean;
}

export type Todos = Todo[];
