import { createSelector, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Todo } from '../types/todo'

interface TodoState {
  items: Todo[]
}

const initialState: TodoState = {
  items: [],
}

function getMissingPriorities(priorities: number[]): number[] {
  if (priorities.length === 0) {
    return []
  }

  const assigned = new Set(priorities)
  const max = Math.max(...priorities)
  const missing: number[] = []

  for (let i = 1; i <= max; i++) {
    if (!assigned.has(i)) {
      missing.push(i)
    }
  }

  return missing
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ text: string; priority: number }>) => {
      state.items.push({
        id: crypto.randomUUID(),
        text: action.payload.text,
        priority: action.payload.priority,
      })
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
  },
})

type TodoRootState = { todos: TodoState }

const selectTodoState = (state: TodoRootState) => state.todos

export const selectTodoItems = createSelector(selectTodoState, (todos) => todos.items)

export const selectMissingPriorities = createSelector(selectTodoItems, (items) =>
  getMissingPriorities(items.map((item) => item.priority)),
)

export const { addTodo, deleteTodo } = todoSlice.actions
export default todoSlice.reducer
