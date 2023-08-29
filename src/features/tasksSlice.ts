import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Task {
  id: string
  title: string
  desc: string
  date: string
  completed: boolean
  important: boolean
}

interface TasksState {
  tasks: Task[]
}

const initialState: TasksState = {
  tasks: [],
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload)
    },
    // another functions
  },
})

export const { addTask } = tasksSlice.actions

export default tasksSlice.reducer
