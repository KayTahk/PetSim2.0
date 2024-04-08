import React, { useState, useEffect } from 'react';
import { DndContext } from '@dnd-kit/core';
import Timer from './timer';
import axios from 'axios';
import { Draggable, Droppable } from './drag_n_drop';

export default function Management() {
  const [helpers, setHelpers] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [parent, setParent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/employee/');
        setHelpers(response.data);
        const response2 = await axios.get('http://localhost:8000/api/task/');
        setTasks(response2.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  function handleDragEnd(event) {
    const { over, active } = event;

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to null
    setParent(over ? over.id : null);
  }

  const draggableMarkup = helpers.map((helper) => (
    <Draggable key={helper.employeeName} id={helper.employeeName}>
      <div className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden md:flex">
        <div className="md:w-1/3">
          <img className="w-full h-auto object-cover" src={helper.petBreed_image} alt={helper.employeeName} />
        </div>
        <div className="md:w-2/3 p-4">
          <div className="mb-4">
            <h2 className="font-bold text-xl mb-2">{helper.employeeName}</h2>
            <p className="text-gray-600 text-sm">{helper.petBreed}</p>
          </div>
          <ul>
            <li className="flex items-center text-gray-700 text-sm mb-1">
              <span>Strength: {helper.strength}</span>
            </li>
            <li className="flex items-center text-gray-700 text-sm mb-1">
              <span>Dexterity: {helper.dexterity}</span>
            </li>
            <li className="flex items-center text-gray-700 text-sm">
              <span>Intelligence: {helper.intelligence}</span>
            </li>
            <li className="flex items-center text-gray-700 text-sm">
              <span>Charisma: {helper.charisma}</span>
            </li>
          </ul>
        </div>
      </div>
    </Draggable>
  ));

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex justify-center">
        <div className="flex w-full max-w-screen-lg">
          {/* Left Side */}
          <div className="flex-1 p-4">
            <div className="bg-gray-200 p-4">
              {tasks.map((task) => (
                <Droppable key={task.name} id={task.name}>
                  {parent === task.name ? draggableMarkup : null}
                </Droppable>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 p-4">
            <div className="bg-gray-200 p-4">{parent === null ? draggableMarkup : null}</div>
          </div>
        </div>
        <Timer duration={15} onComplete={() => console.log('Timer completed!')} />
      </div>
    </DndContext>
  );
}
