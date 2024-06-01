/* eslint-disable react/prop-types */
import { Droppable, Draggable } from 'react-beautiful-dnd'

import Card from '../card/Card'
function Completed({ completedTask, droppableId }) {
  // Return JSX to render the "Completed Tasks" section
  return (
    <div className="sm:w-1/3 ">
      {' '}
      {/* Container div with styling for responsive layout */}
      <h2 className="font-sans text-2xl mt-2">Completed Tasks</h2>
      {/* Droppable area for completed tasks */}
      <Droppable droppableId={droppableId}>
        {/*  */}
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {completedTask.length === 0 ? (
              <h1 className="font-sans  mt-2">No task completed</h1>
            ) : (
              completedTask.map((task, index) => (
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
                        timeStamp={task.timeStamp}
                        type="completed"
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

export default Completed
