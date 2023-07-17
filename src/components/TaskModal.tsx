import React from 'react'

import { AiFillCloseCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { toggleModal, ModalState } from '../features/modalSlice'

export default function TaskModal() {
  const modal = useSelector((state: ModalState) => state.modal)
  const dispatch = useDispatch()

  return (
    <>
      {modal.showModal ? (
        <div className="flex absolute top-0 justify-center items-center w-screen h-screen bg-base/90 z-100 text-text">
          <div className="p-6 w-96 rounded-lg drop-shadow-lg lg:w-1/3 lg:p-8 bg-mantle">
            <div className="flex justify-between items-center mb-4 w-full">
              <h1 className="text-xl font-bold">Add a task</h1>
              <button
                className="text-2xl text-primary"
                onClick={() => dispatch(toggleModal())}
              >
                <AiFillCloseCircle />
              </button>
            </div>
            <form className="flex flex-col gap-4">
              <label className="flex flex-col">
                Name
                <input
                  type="text"
                  placeholder="e.g, study for the test"
                  className="p-1 rounded bg-base focus:outline-none"
                  required
                />
              </label>
              <label className="flex flex-col">
                Date
                <input
                  type="date"
                  className="p-1 rounded bg-base focus:outline-none"
                  required
                />
              </label>
              <label className="flex flex-col">
                Description (optional)
                <textarea
                  placeholder="e.g, study for the test"
                  className="p-1 rounded bg-base focus:outline-none"
                ></textarea>
              </label>
              <label className="flex flex-col">
                Directory
                <select className="p-1 rounded bg-base focus:outline-none">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </label>
              <button
                type="submit"
                className="px-4 py-1 mt-5 w-full text-base capitalize rounded transition bg-primary hover:bg-secondary"
              >
                add new task
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  )
}
