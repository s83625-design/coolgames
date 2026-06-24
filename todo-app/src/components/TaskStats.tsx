import React from 'react';

interface TaskStatsProps {
  total: number;
  completed: number;
  active: number;
  percentage: number;
}

const TaskStats: React.FC<TaskStatsProps> = ({ total, completed, active, percentage }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <div className="bg-white rounded-lg p-4 border-2 border-gray-200">
        <p className="text-sm text-gray-600 mb-1">Total Tasks</p>
        <p className="text-3xl font-bold text-gray-800">{total}</p>
      </div>
      
      <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
        <p className="text-sm text-green-600 mb-1">Completed</p>
        <p className="text-3xl font-bold text-green-600">{completed}</p>
      </div>
      
      <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
        <p className="text-sm text-blue-600 mb-1">Active</p>
        <p className="text-3xl font-bold text-blue-600">{active}</p>
      </div>
      
      <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
        <p className="text-sm text-purple-600 mb-1">Progress</p>
        <p className="text-3xl font-bold text-purple-600">{percentage}%</p>
      </div>
    </div>
  );
};

export default TaskStats;
