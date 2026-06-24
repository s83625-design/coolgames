import React, { useState } from 'react';
import { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onUpdate: (id: string, text: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editText.trim() && editText !== todo.text) {
      onUpdate(todo.id, editText);
    } else {
      setEditText(todo.text);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleEdit();
    } else if (e.key === 'Escape') {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  const priorityColors = {
    low: 'bg-blue-100 text-blue-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800',
  };

  return (
    <div
      className={`flex items-center gap-3 p-4 rounded-lg border-2 ${
        todo.completed ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-200'
      }`}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="w-5 h-5 rounded cursor-pointer"
      />

      <div className="flex-1 min-w-0">
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleEdit}
            onKeyDown={handleKeyDown}
            autoFocus
            className="w-full px-2 py-1 border-2 border-blue-500 rounded"
          />
        ) : (
          <p
            onClick={() => setIsEditing(true)}
            className={`cursor-pointer truncate ${
              todo.completed
                ? 'line-through text-gray-400'
                : 'text-gray-800'
            }`}
          >
            {todo.text}
          </p>
        )}
      </div>

      {todo.priority && (
        <span className={`text-xs font-semibold px-2 py-1 rounded ${priorityColors[todo.priority]}`}>
          {todo.priority.charAt(0).toUpperCase() + todo.priority.slice(1)}
        </span>
      )}

      {todo.dueDate && (
        <span className="text-xs text-gray-500">
          {new Date(todo.dueDate).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
          })}
        </span>
      )}

      <button
        onClick={() => onDelete(todo.id)}
        className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
