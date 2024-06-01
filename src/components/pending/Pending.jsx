/* eslint-disable react/prop-types */

import { useRef } from 'react'
import Card from '../card/Card'
import { Droppable, Draggable } from 'react-beautiful-dnd'

// Function to generate a unique ID (timestamp + random string)
let generateID = () => {
  let uid = Date.now().toString(36) + Math.random().toString(36).substr(2)
  return uid
}

function Pending({ droppableId, pendingTasks, setPendingTasks, handleStart }) {
  const title = useRef()
  const description = useRef()
  // Function to handle form submission
  function handleSubmit() {
    const enteredId = generateID()
    const enteredTitle = title.current.value
    const enteredDescription = description.current.value
    // Validate title (ensure it's not empty)
    if (enteredTitle == '') {
      alert('Please give some title to your task')
    } else {
      const newtask = {
        id: enteredId,
        title: enteredTitle,
        description: enteredDescription,
      }
      setPendingTasks((prev) => [...prev, newtask])
      title.current.value = ''
      description.current.value = ''
    }
  }

  return (
    <div className="sm:w-1/3 ">
      <h2 className="font-sans text-2xl mt-2">Pending Tasks</h2>
      {/* Droppable area for pending tasks */}
      <Droppable droppableId={droppableId}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <div className="flex flex-col  gap-4 ">
              <input
                className="h-12 m-4 p-2 rounded-sm bg-green-100"
                ref={title}
                placeholder="Title"
              />
              <input
                className="h-12 mr-4 ml-4  p-2 rounded-sm bg-green-100"
                ref={description}
                placeholder="Description"
              />
              <button
                className="h-12 mr-4 ml-4 mt-1 bg-slate-400 hover:bg-green-100 p-2 rounded-sm"
                onClick={handleSubmit}
              >
                + Create
              </button>
            </div>
            {pendingTasks.length === 0 ? (
              <h1 className="font-sans  mt-2">No task is pending</h1>
            ) : (
              pendingTasks.map((task, index) => (
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
                      {/* <Card task={task} /> */}
                      <Card
                        index={index}
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        description={task.description}
                        handleClick={handleStart}
                        type="pending"
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

export default Pending
