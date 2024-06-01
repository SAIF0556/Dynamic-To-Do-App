import { DragDropContext } from 'react-beautiful-dnd'

import './App.css'
import Header from './components/header/Header'
import Pending from './components/pending/Pending'
import Inprogress from './components/inProgress/Inprogress'
import Completed from './components/completed/Completed'
import { useState } from 'react'

// Function to generate a timestamp
let generateTimeStamp = () => {
  let timestamp = new Date().getTime()
  timestamp = new Date(timestamp).toLocaleString()
  return timestamp
}

function App() {
  // State variables for tasks in each list (pending, in progress, completed)
  const [pendingTasks, setPendingTasks] = useState([])
  const [inProgressTasks, setInProgressTasks] = useState([])
  const [completedTasks, setCompletedTask] = useState([])
  // Function to handle starting a task (moving from pending to in-progress)

  function handleStart(id) {
    const newTasks = pendingTasks.find((task) => task.id === id)
    setInProgressTasks((prev) => [...prev, newTasks])
    const newPendingTasks = pendingTasks.filter((task) => task.id !== id)
    setPendingTasks(newPendingTasks)
  }
  // Function to handle marking a task as completed (moving from in-progress to completed)

  function handlePending(id) {
    const newTask = inProgressTasks.find((task) => task.id === id)
    const timestamp = generateTimeStamp()
    newTask.timeStamp = timestamp
    setCompletedTask((prev) => [...prev, newTask])
    const newInprogressTask = inProgressTasks.filter((task) => task.id !== id)
    setInProgressTasks(newInprogressTask)
  }
  // Function to handle the result of a drag-and-drop operation

  const handleDragEnd = (result) => {
    if (!result.destination) {
      console.log('saif')

      return
    }

    const { source, destination } = result

    const sourceTasks = getTaskListByDroppableId(source.droppableId)
    const destTasks = getTaskListByDroppableId(destination.droppableId)

    const [movedTask] = sourceTasks.splice(source.index, 1)
    destTasks.splice(destination.index, 0, movedTask)

    setTaskListByDroppableId(source.droppableId, sourceTasks)
    setTaskListByDroppableId(destination.droppableId, destTasks)

    // Handle status update based on destination
    if (
      source.droppableId === 'pending' &&
      destination.droppableId === 'inProgress'
    ) {
      handleStart(movedTask.id)
    } else if (
      source.droppableId === 'inProgress' &&
      destination.droppableId === 'completed'
    ) {
      handlePending(movedTask.id)
    }
  }
  // Function to get the task list based on the droppable ID
  const getTaskListByDroppableId = (droppableId) => {
    if (droppableId === 'pending') return pendingTasks
    if (droppableId === 'inProgress') return inProgressTasks
    if (droppableId === 'completed') return completedTasks
  }
  // Function to set the task list based on the droppable ID
  const setTaskListByDroppableId = (droppableId, tasks) => {
    if (droppableId === 'pending') setPendingTasks(tasks)
    if (droppableId === 'inProgress') setInProgressTasks(tasks)
    if (droppableId === 'completed') setCompletedTask(tasks)
  }

  return (
    <main className="p-0 m-0 bg-slate-300 w-full font-serif ">
      <Header />
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="flex flex-col  bg-[#7469B6] h-screen gap-4 p-4 sm:flex-row ">
          <Pending
            droppableId="pending"
            pendingTasks={pendingTasks}
            setPendingTasks={setPendingTasks}
            handleStart={handleStart}
          />
          <Inprogress
            droppableId="inProgress"
            inProgressTasks={inProgressTasks}
            handlePending={handlePending}
          />
          <Completed droppableId="completed" completedTask={completedTasks} />
        </div>
      </DragDropContext>
    </main>
  )
}

export default App
