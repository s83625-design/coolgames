export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
  dueDate?: string;
  priority?: 'low' | 'medium' | 'high';
}

export type FilterType = 'all' | 'active' | 'completed';
