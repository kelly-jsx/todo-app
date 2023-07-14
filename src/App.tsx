import React from 'react'
import Counter from './features/counter/Counter'

// components
import Header from './components/Header'
import Sidebar from './components/Sidebar/Sidebar'
import TaskModal from './components/TaskModal'

function App(): JSX.Element {
  return (
    <div className="min-h-screen App bg-base">
      <Header />
      <Sidebar />
      <TaskModal />
    </div>
  )
}

export default App
