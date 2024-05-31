import {useDraggable} from '@dnd-kit/core';
import {useDroppable} from '@dnd-kit/core';

export function Droppable(props) {
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
  
export function Draggable(props) {
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