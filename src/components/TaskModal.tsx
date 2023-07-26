import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { toggleModal, ModalState } from '../features/modalSlice'

export default function TaskModal() {
  const modal = useSelector((state: ModalState) => state.modal)
  const dispatch = useDispatch()

  return (
    <>
      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box bg-mantle">
          <h3 className="text-lg font-bold">Add new task</h3>
          <form action="" className="w-full">
            <div className="w-full form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                placeholder="e.g, study for the test"
                className="w-full input input-bordered"
              />
            </div>
            <div className="w-full form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                placeholder="e.g, study for the test"
                className="w-full input input-bordered"
              />
            </div>
            <div className="w-full form-control">
              <label className="label">
                <span className="label-text">Description (optional)</span>
              </label>
              <textarea
                className="w-full textarea textarea-bordered"
                placeholder="e.g, study for the test"
              ></textarea>
            </div>
            <div className="w-full form-control">
              <label className="label">
                <span className="label-text">Directory</span>
              </label>
              <select className="w-full select select-bordered">
                <option disabled selected>
                  Directory
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
          </form>
          <div className="modal-action">
            <button className="btn btn-primary">Add new task</button>
            <button className="btn btn-ghost">Close</button>
          </div>
        </form>
      </dialog>
    </>
  )
}
