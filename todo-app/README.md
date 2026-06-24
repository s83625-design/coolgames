# To-Do List Application

A modern, fully-featured to-do list application built with React, TypeScript, and Tailwind CSS. Features include task management, local storage persistence, and a clean, intuitive UI.

## Features

✅ **Task Management**
- Create new tasks
- Mark tasks as complete/incomplete
- Delete tasks
- Edit existing tasks
- Clear all completed tasks

💾 **Local Storage**
- Automatically saves all tasks to browser local storage
- Tasks persist across browser sessions
- No backend required

🎨 **User Interface**
- Clean, modern design with Tailwind CSS
- Responsive layout (mobile, tablet, desktop)
- Visual feedback for task completion
- Smooth animations and transitions
- Task counter and stats

📊 **Task Statistics**
- Total tasks count
- Completed tasks count
- Remaining tasks count
- Completion percentage

🔍 **Additional Features**
- Filter tasks (All, Active, Completed)
- Search/filter functionality
- Priority levels for tasks (Low, Medium, High)
- Due dates for tasks
- Task categories

## Tech Stack

- **React 18+** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Local Storage API** - Data persistence
- **React Hooks** - State management

## Installation

```bash
cd todo-app
npm install
```

## Development

```bash
npm start
```

The application will open at `http://localhost:3000`

## Build for Production

```bash
npm run build
```

## Usage

1. **Add a Task**: Type in the input field, select priority, optionally set a due date, and press Enter or click Add
2. **Complete a Task**: Click the checkbox next to a task
3. **Edit a Task**: Click the task text to edit it
4. **Delete a Task**: Click the delete button (trash icon)
5. **Filter Tasks**: Use the filter tabs to view All, Active, or Completed tasks
6. **Clear Completed**: Click "Clear Completed" to remove all done tasks

## Data Persistence

All tasks are automatically saved to the browser's local storage.
