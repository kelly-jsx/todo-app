import React from 'react'

// icons
import { GiHamburgerMenu } from 'react-icons/gi'
import { HiSearch } from 'react-icons/hi'

export default function Header(): JSX.Element {
  return (
    <div className="flex justify-between items-center px-4 py-4 text-xl lg:p-6 bg-mantle text-text">
      <div className="flex gap-3 items-center">
        <button className="text-xl 2xl:hidden">
          <GiHamburgerMenu />
        </button>
        <h1 className="text-xl font-bold text-primary">Todo App</h1>
      </div>
      <div className="flex gap-3 items-center">
        <input
          className="hidden px-3 py-1 rounded border text-text border-secondary lg:block bg-base"
          type="text"
          placeholder="search"
        />
        <button className="lg:hidden">
          <HiSearch />
        </button>
        <button className="px-3 py-1 text-base rounded bg-primary">
          add task
        </button>
      </div>
    </div>
  )
}
