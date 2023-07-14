import React from 'react'

export default function Sidebar() {
  return (
    <div className="hidden relative top-0 flex-col gap-4 pt-4 w-72 h-screen text-lg lg:flex bg-mantle text-text z-90">
      <div className="flex flex-col gap-3 justify-center px-4">
        <h1 className="text-2xl font-bold text-center text-primary">
          Todo App
        </h1>
        <button className="px-4 py-1 w-full text-base capitalize rounded bg-secondary">
          add new task
        </button>
      </div>
      <div className="flex flex-col mt-8">
        <a href="">Important tasks</a>
        <a href="">Completed tasks</a>
        <a href="">Uncompleted tasks</a>
      </div>
      <div className="mt-10">Directories</div>
    </div>
  )
}
