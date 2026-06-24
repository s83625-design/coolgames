import React from 'react';
import { useTodos } from './hooks/useTodos';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TaskStats from './components/TaskStats';
import FilterTabs from './components/FilterTabs';
import './App.css';

function App() {
  const {
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
  } = useTodos();

  const filteredTodos = getFilteredTodos();
  const stats = getStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-lg">
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">✓</span>
            <h1 className="text-4xl font-bold text-gray-900">My Tasks</h1>
          </div>
          <p className="text-gray-600">Stay organized and track your daily tasks</p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8">
        <TaskStats
          total={stats.total}
          completed={stats.completed}
          active={stats.active}
          percentage={stats.percentage}
        />

        <TodoForm onAdd={addTodo} />

        <FilterTabs
          activeFilter={filter}
          onFilterChange={setFilter}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onClearCompleted={clearCompleted}
        />

        <TodoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          onUpdate={updateTodo}
          onDelete={deleteTodo}
        />
      </main>

      <footer className="text-center py-8 text-gray-600">
        <p className="text-sm">💾 Tasks are automatically saved to your browser's local storage</p>
      </footer>
    </div>
  );
}

export default App;
