import { useState } from 'react'
import { Button, NumberInput, TextInput } from '@mantine/core'
import { useAppDispatch } from '../store/hooks'
import { addTodo } from '../store/todoSlice'

export function TodoForm() {
  const dispatch = useAppDispatch()
  const [text, setText] = useState('')
  const [priority, setPriority] = useState<number>(1)

  const handlePriorityChange = (value: number | string) => {
    const parsed = typeof value === 'number' ? value : Number(value)
    setPriority(Number.isInteger(parsed) && parsed >= 1 ? parsed : 1)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    const trimmed = text.trim()

    if (!trimmed) {
      return
    }

    dispatch(addTodo({ text: trimmed, priority }))
    setText('')
    setPriority(1)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row sm:items-end">
      <TextInput
        className="flex-1"
        label="Task"
        placeholder="What needs to be done?"
        value={text}
        onChange={(event) => setText(event.currentTarget.value)}
        required
      />
      <NumberInput
        className="w-full sm:w-32"
        label="Priority"
        description="Lower = higher priority"
        min={1}
        allowDecimal={false}
        value={priority}
        onChange={handlePriorityChange}
        required
      />
      <Button type="submit" className="sm:mb-0.5">
        Add
      </Button>
    </form>
  )
}
