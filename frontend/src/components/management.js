import React, {useState} from 'react';
import {DndContext} from '@dnd-kit/core';
import {useDraggable} from '@dnd-kit/core';
import {useDroppable} from '@dnd-kit/core';
import Timer from './timer';

function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    color: isOver ? 'green' : undefined,
    border: '1px solid #ccc',
    top: '20px',
    padding: '20px',
    marginBottom: '50px',
    position: 'relative',
  };

  const tabStyle = {
    position: 'absolute',
    top: '-35px',
    left: '0px',
    backgroundColor: '#fff',
    padding: '5px 10px',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
    border: '1px solid #ccc',
    borderBottom: 'none',
  };

  return (
    <div ref={setNodeRef} style={style}>
      <div style={tabStyle}>Task {props.id}</div>
      <div style={{ paddingLeft: '20px' }}>{props.children}</div>
    </div>
  );
}

function Draggable(props) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: props.id,
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;
  
  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </button>
  );
}

export default function Management() {
  const containers = ['A', 'B', 'C'];
  const [parent, setParent] = useState(null);
  const draggableMarkup = (
    <Draggable id="draggable">
      <div class="max-w-md bg-white shadow-lg rounded-lg overflow-hidden md:flex">
        <div class="md:w-1/3">
          <img class="w-full h-auto object-cover" src="picture.jpg" alt="Employee"></img>
        </div>
        <div class="md:w-2/3 p-4">
          <div class="mb-4">
            <h2 class="font-bold text-xl mb-2">Pet</h2>
            <p class="text-gray-600 text-sm">Skillset</p>
          </div>
          <ul>
            <li class="flex items-center text-gray-700 text-sm mb-1">
              <span>Stat A</span>
            </li>
            <li class="flex items-center text-gray-700 text-sm mb-1">
              <span>Stat B</span>
            </li>
            <li class="flex items-center text-gray-700 text-sm">
              <span>Stat C</span>
            </li>
            <li class="flex items-center text-gray-700 text-sm">
              <span>Stat E</span>
            </li>
          </ul>
        </div>
      </div>
  </Draggable>
  );

  return (
    <DndContext onDragEnd={handleDragEnd}>
    <div className="flex justify-center">
      <div className="flex w-full max-w-screen-lg">
        {/* Left Side */}
        <div className="flex-1 p-4">
          {/* Your content for the left side */}
          <div className="bg-gray-200 p-4">
            {containers.map((id) => (
              // We updated the Droppable component so it would accept an `id`
              // prop and pass it to `useDroppable`
              <Droppable key={id} id={id}>
                {parent === id ? draggableMarkup : ''}
              </Droppable>
            ))}
          </div>
        </div>
        
        {/* Right Side */}
        <div className="flex-1 p-4">
          {/* Your content for the right side */}
          <div className="bg-gray-200 p-4">
              {parent === null ? draggableMarkup : null}
          </div>
        </div>
      </div>
    </div>
    <Timer duration={15} onComplete={() => console.log('Timer completed!')} />
    </DndContext>
  );

  function handleDragEnd(event) {
    const {over} = event;

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : null);
  }
};