/* eslint-disable no-unused-vars */
// src/pages/Home.jsx
import React, { useState } from 'react';
import AddTask from '../components/AddTask';
import EditTask from '../components/EditTask';
import TaskList from '../components/TaskList';
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: uuidv4() }]);
    setIsAdding(false);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
    setIsEditing(false);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const startEditing = (task) => {
    setCurrentTask(task);
    setIsEditing(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">Task List</h1>
          <button
            onClick={() => setIsAdding(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            + Add Task
          </button>
        </div>
        <TaskList tasks={tasks} onEdit={startEditing} onDelete={deleteTask} />
        {isAdding && <AddTask onAdd={addTask} />}
        {isEditing && <EditTask task={currentTask} onUpdate={updateTask} />}
      </div>
    </div>
  );
};

export default Home;
