// src/components/TaskItem.jsx
import React from 'react';

const TaskItem = ({ task, onEdit, onDelete }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-300">
      <div>
        <h3 className="text-lg font-bold">{task.task}</h3>
        <p className={`text-sm ${task.priority === 'High' ? 'text-red-500' : task.priority === 'Medium' ? 'text-yellow-500' : 'text-green-500'}`}>
          Priority: {task.priority}
        </p>
      </div>
      <div className="flex items-center">
        <button onClick={onEdit} className="mr-2 text-blue-500">Edit</button>
        <button onClick={onDelete} className="text-red-500">Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
