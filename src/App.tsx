import React from 'react'
import Counter from './features/counter/Counter'
import Header from './components/Header'

function App(): JSX.Element {
  return (
    <div className="App bg-base">
      <Header />
      <h1>Hello World</h1>
      {/* <Counter /> */}
    </div>
  )
}

export default App
