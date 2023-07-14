import React from 'react'

// icons
import { GiHamburgerMenu } from 'react-icons/gi'
import { HiSearch } from 'react-icons/hi'

export default function Header(): JSX.Element {
  return (
    <div className="flex flex-col gap-4 p-4 text-xl lg:p-6 text-text bg-mantle">
      <div className="flex justify-between items-center h-12">
        <div className="flex gap-3 items-center">
          <button className="text-xl 2xl:hidden">
            <GiHamburgerMenu />
          </button>
          <h1 className="text-xl font-bold lg:text-2xl text-primary">
            Todo App
          </h1>
        </div>
        <input
          className="hidden px-3 py-1 h-full rounded border text-text border-secondary lg:block bg-base"
          type="text"
          placeholder="Search..."
        />
        <button className="px-3 py-1 h-full text-base capitalize rounded bg-primary">
          add task
        </button>
      </div>
      <div className="flex justify-center items-center lg:hidden">
        <input
          type="text"
          className="py-1 h-full text-lg text-center rounded border bg-base text-text border-secondary"
          placeholder="Search..."
        />
      </div>
    </div>
  )
}
