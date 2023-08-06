import React from 'react'

import { MdEdit } from 'react-icons/md'
import { FaTrashAlt } from 'react-icons/fa'
import { HiOutlineStar, HiStar, HiCalendar } from 'react-icons/hi'

type Props = {
  isImportant?: boolean
  isCompleted?: boolean
}

export default function TaskCard({ isImportant, isCompleted }: Props) {
  return (
    <div className="w-auto shadow-xl h-72 card bg-surface0">
      <div className="card-body">
        <h2 className="card-title">Title</h2>
        <p>Task desc</p>
        <div className="flex items-center gap-2">
          <HiCalendar />
          <p>23/04/2023</p>
        </div>
        <div className="items-center justify-between card-actions">
          <div>
            {isCompleted ? (
              <div className="text-base badge badge-neutral bg-green">
                completed
              </div>
            ) : (
              <div className="text-base badge badge-neutral bg-red">
                uncompleted
              </div>
            )}
          </div>
          <div>
            {isImportant ? (
              <button className="p-0 btn btn-ghost">
                <HiStar className="w-7 h-7" />
              </button>
            ) : (
              <button className="p-0 btn btn-ghost">
                <HiOutlineStar className="w-6 h-6" />
              </button>
            )}
            <button className="p-0 btn btn-ghost">
              <FaTrashAlt className="w-6 h-6" />
            </button>
            <button className="p-0 btn btn-ghost">
              <MdEdit className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
