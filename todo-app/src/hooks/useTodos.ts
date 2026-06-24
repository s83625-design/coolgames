import { useState, useEffect } from 'react';
import { Todo, FilterType } from '../types';
import { storageService } from '../services/storage';

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterType>('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedTodos = storageService.getTodos();
    setTodos(storedTodos);
  }, []);

  const addTodo = (text: string, priority?: 'low' | 'medium' | 'high', dueDate?: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: Date.now(),
      priority,
      dueDate,
    };
    const updated = storageService.addTodo(newTodo);
    setTodos(updated);
  };

  const toggleTodo = (id: string) => {
    const todo = todos.find(t => t.id === id);
    if (todo) {
      const updated = storageService.updateTodo(id, { completed: !todo.completed });
      setTodos(updated);
    }
  };

  const updateTodo = (id: string, text: string) => {
    const updated = storageService.updateTodo(id, { text });
    setTodos(updated);
  };

  const deleteTodo = (id: string) => {
    const updated = storageService.deleteTodo(id);
    setTodos(updated);
  };

  const clearCompleted = () => {
    const updated = storageService.clearCompleted();
    setTodos(updated);
  };

  const getFilteredTodos = () => {
    let filtered = todos;

    if (filter === 'active') {
      filtered = filtered.filter(todo => !todo.completed);
    } else if (filter === 'completed') {
      filtered = filtered.filter(todo => todo.completed);
    }

    if (searchTerm) {
      filtered = filtered.filter(todo =>
        todo.text.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  };

  const getStats = () => {
    const total = todos.length;
    const completed = todos.filter(t => t.completed).length;
    const active = total - completed;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

    return { total, completed, active, percentage };
  };

  return {
    todos,
    filter,
    setFilter,
    searchTerm,
    setSearchTerm,
    addTodo,
    toggleTodo,
    updateTodo,
    deleteTodo,
    clearCompleted,
    getFilteredTodos,
    getStats,
  };
};
