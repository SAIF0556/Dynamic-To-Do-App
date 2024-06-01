/* eslint-disable react/prop-types */
import { Droppable, Draggable } from 'react-beautiful-dnd'

import Card from '../card/Card'
function Inprogress({ inProgressTasks, handlePending, droppableId }) {
  // Return JSX to render the "In Progress" tasks section

  return (
    <div className="sm:w-1/3 bg-green-100 rounded-md p-4">
      {' '}
      {/* Section heading */}
      <h2 className="font-sans text-2xl mt-2">In Progress Tasks</h2>{' '}
      {/* Droppable area for in-progress tasks */}
      <Droppable droppableId={droppableId}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {inProgressTasks.length === 0 ? (
              <h1 className="font-sans  mt-2">No tasks in progress</h1>
            ) : (
              inProgressTasks.map((task, index) => (
                <Draggable
                  key={task.id}
                  draggableId={task.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="task-item"
                    >
                      <Card
                        index={index}
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        description={task.description}
                        handleClick={handlePending}
                        type="inProgress"
                      />
                    </div>
                  )}
                </Draggable>
              ))
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}

export default Inprogress
