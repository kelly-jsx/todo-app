import React from 'react'
import Counter from './features/counter/Counter'

// components
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App(): JSX.Element {
  return (
    <div className="min-h-screen App bg-base">
      <Header />
      <Sidebar />
    </div>
  )
}

export default App
