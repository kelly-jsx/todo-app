import React from 'react'
import DarkMode from './DarkMode'
import { useDispatch, useSelector } from 'react-redux'
import { ModalState, toggleModal } from '../../features/modalSlice'

export default function Sidebar() {
  const modal = useSelector((state: ModalState) => state.modal)
  const dispatch = useDispatch()

  return (
    <div className="flex flex-col w-max drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="p-4 w-80 h-full menu bg-mantle text-base-content">
          <div className="flex flex-col gap-2 mb-4">
            <button
              className="btn btn-primary"
              onClick={() => window.my_modal_1.showModal()}
            >
              Add New Task
            </button>
            <DarkMode />
          </div>
          <ul className="mb-8">
            <li>
              <a>Important tasks</a>
            </li>
            <li>
              <a>Completed tasks</a>
            </li>
            <li>
              <a>Uncompleted tasks</a>
            </li>
          </ul>
          <ul>
            <li className="text-xl">
              <a href="">Directories</a>
            </li>
            <li>
              <a href="">Main</a>
            </li>
            <li>
              <a href="" className="btn-primary">
                + New
              </a>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  )
}
