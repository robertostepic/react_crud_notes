/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// src/components/AddTask.jsx
import React, { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('');

  const handleAdd = () => {
    if (task && priority) {
      onAdd({ task, priority });
      setTask('');
      setPriority('');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Add Task</h2>
        <input
          type="text"
          placeholder="Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <div className="mb-4">
          <span className="mr-4">Priority:</span>
          <button
            className={`px-4 py-2 rounded mr-2 ${priority === 'High' ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setPriority('High')}
          >
            High
          </button>
          <button
            className={`px-4 py-2 rounded mr-2 ${priority === 'Medium' ? 'bg-yellow-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setPriority('Medium')}
          >
            Medium
          </button>
          <button
            className={`px-4 py-2 rounded ${priority === 'Low' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setPriority('Low')}
          >
            Low
          </button>
        </div>
        <button
          onClick={handleAdd}
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTask;
