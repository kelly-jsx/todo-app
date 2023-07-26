import React from 'react'

// icons
import { GiHamburgerMenu } from 'react-icons/gi'
import { useDispatch } from 'react-redux'
import { toggleModal } from '../features/modalSlice'

export default function Header(): JSX.Element {
  const dispatch = useDispatch()

  return (
    <div className="navbar bg-mantle">
      <div className="navbar-start">
        <a className="text-xl normal-case btn btn-ghost text-primary">
          Todo App
        </a>
      </div>
      <div className="navbar-center">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="w-24 input input-bordered md:w-auto"
          />
        </div>
      </div>
      <div className="navbar-end">
        <button className="btn btn-primary">Add New Task</button>
      </div>
    </div>
  )
}
