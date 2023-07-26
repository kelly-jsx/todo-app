import React from 'react'

// icons
import { GiHamburgerMenu } from 'react-icons/gi'
import { useDispatch } from 'react-redux'
import { toggleModal } from '../features/modalSlice'

export default function Header(): JSX.Element {
  const dispatch = useDispatch()

  return (
    <div className="relative navbar bg-mantle">
      <div className="navbar-start">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-ghost drawer-button lg:hidden"
        >
          <GiHamburgerMenu />
        </label>
        <a className="text-xl normal-case btn btn-ghost text-primary">
          Todo App
        </a>
      </div>
      <div className="hidden navbar-center lg:block">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="w-24 input input-bordered md:w-auto"
          />
        </div>
      </div>
      <div className="navbar-end">
        <div className="form-control lg:hidden">
          <input
            type="text"
            placeholder="Search"
            className="w-24 input input-bordered md:w-auto"
          />
        </div>
        <button
          className="hidden btn btn-primary lg:block"
          onClick={() => window.my_modal_1.showModal()}
        >
          Add New Task
        </button>
      </div>
    </div>
  )
}
