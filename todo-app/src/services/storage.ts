import { Todo } from '../types';

const STORAGE_KEY = 'todos';

export const storageService = {
  getTodos: (): Todo[] => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return [];
    }
  },

  saveTodos: (todos: Todo[]): void => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  },

  addTodo: (todo: Todo): Todo[] => {
    const todos = storageService.getTodos();
    const updatedTodos = [...todos, todo];
    storageService.saveTodos(updatedTodos);
    return updatedTodos;
  },

  updateTodo: (id: string, updates: Partial<Todo>): Todo[] => {
    const todos = storageService.getTodos();
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, ...updates } : todo
    );
    storageService.saveTodos(updatedTodos);
    return updatedTodos;
  },

  deleteTodo: (id: string): Todo[] => {
    const todos = storageService.getTodos();
    const updatedTodos = todos.filter(todo => todo.id !== id);
    storageService.saveTodos(updatedTodos);
    return updatedTodos;
  },

  clearCompleted: (): Todo[] => {
    const todos = storageService.getTodos();
    const updatedTodos = todos.filter(todo => !todo.completed);
    storageService.saveTodos(updatedTodos);
    return updatedTodos;
  },
};
