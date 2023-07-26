import React from 'react'

export default function DirModal() {
  return (
    <>
      <dialog id="dir_modal" className="modal">
        <form method="dialog" className="modal-box bg-mantle">
          <h3 className="text-lg font-bold">Create new directory</h3>

          <div className="w-full form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="Enter a directory name"
              className="w-full input input-bordered"
            />
          </div>
          <div className="modal-action">
            <button className="btn btn-primary">Create</button>
            <button className="btn btn-ghost">Close</button>
          </div>
        </form>
      </dialog>
    </>
  )
}
