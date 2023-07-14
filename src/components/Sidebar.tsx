import React from 'react'

import { AiFillCloseCircle } from 'react-icons/ai'

export default function Sidebar(): JSX.Element {
  return (
    <div className="absolute top-0 w-screen h-screen bg-base/90 z-100">
      <div className="flex flex-col gap-4 pt-4 w-72 h-screen bg-mantle text-text">
        <div className="flex flex-col gap-3 px-4">
          <div className="flex justify-between items-center w-full">
            <h1 className="text-xl font-bold text-primary">Todo App</h1>
            <button className="text-2xl text-primary">
              <AiFillCloseCircle />
            </button>
          </div>
          <button className="px-3 py-1 w-full text-base capitalize rounded bg-secondary">
            add task
          </button>
        </div>
        <div className="flex mt-8 fle-col">
          <a href="">Important tasks</a>
          <a href="">Completed tasks</a>
          <a href="">Uncompleted tasks</a>
        </div>
        <div className="mt-10">Directories</div>
      </div>
    </div>
  )
}