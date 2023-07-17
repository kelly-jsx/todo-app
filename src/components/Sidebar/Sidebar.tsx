import React from 'react'
import DarkMode from './DarkMode'
import { useDispatch, useSelector } from 'react-redux'
import { ModalState, toggleModal } from '../../features/modalSlice'

export default function Sidebar() {
  const modal = useSelector((state: ModalState) => state.modal)
  const dispatch = useDispatch()

  return (
    <div className="hidden relative top-0 flex-col gap-4 pt-4 w-72 h-screen text-lg lg:flex bg-mantle text-text z-90">
      <div className="flex flex-col gap-3 justify-center px-4">
        <h1 className="text-2xl font-bold text-center text-primary">
          Todo App
        </h1>
        <p>{modal.showModal.toString()}</p>
        {/* TODO dark mode */}
        <button
          className="px-4 py-1 w-full text-base capitalize rounded bg-secondary"
          onClick={() => dispatch(toggleModal())}
        >
          add new task
        </button>
        <DarkMode />
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
