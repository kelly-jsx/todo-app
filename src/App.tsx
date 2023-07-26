import React from 'react'
import Counter from './features/counter/Counter'

// components
import Header from './components/Header'
import TaskModal from './components/TaskModal'
import Sidebar from './components/Sidebar/Sidebar'
import DirModal from './components/DirModal'
import TasksGrid from './components/TasksGrid'

function App(): JSX.Element {
  return (
    <div className="min-h-screen App bg-base text-text">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="p-4">
          <TasksGrid />
        </div>
        {/* modals */}
        <TaskModal />
        <DirModal />
      </div>
    </div>
  )
}

export default App
