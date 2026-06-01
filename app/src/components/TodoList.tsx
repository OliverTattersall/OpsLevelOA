import { Stack, Text, Title } from '@mantine/core'
import { useAppSelector } from '../store/hooks'
import { selectTodoItems } from '../store/todoSlice'
import { TodoItem } from './TodoItem'

export function TodoList() {
  const items = useAppSelector(selectTodoItems)

  const sortedItems = [...items].sort((a, b) => a.priority - b.priority)

  return (
    <Stack gap="md">
      <Title order={3} className="text-gray-800">
        Todo Items
      </Title>

      {sortedItems.length === 0 ? (
        <Text c="dimmed" className="italic">
          No items yet. Add your first task above.
        </Text>
      ) : (
        <Stack gap="sm">
          {sortedItems.map((item) => (
            <TodoItem key={item.id} item={item} />
          ))}
        </Stack>
      )}
    </Stack>
  )
}
