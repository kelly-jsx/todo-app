import React from 'react'
import Counter from './features/counter/Counter'

// components
import Header from './components/Header'
import SidebarMobile from './components/Sidebar/SidebarMobile'
import TaskModal from './components/TaskModal'
import Sidebar from './components/Sidebar/Sidebar'

function App(): JSX.Element {
  return (
    <div className="min-h-screen App bg-base text-text">
      <Header />
      <div className="flex">
        <Sidebar />
        <h1>test</h1>
      </div>
      <TaskModal />
    </div>
  )
}

export default App
