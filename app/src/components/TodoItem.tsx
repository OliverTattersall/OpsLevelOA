import { ActionIcon, Badge, Group, Paper, Text } from '@mantine/core'
import { IconTrash } from '@tabler/icons-react'
import { useAppDispatch } from '../store/hooks'
import { deleteTodo } from '../store/todoSlice'
import type { Todo } from '../types/todo'

interface TodoItemProps {
  item: Todo
}

export function TodoItem({ item }: TodoItemProps) {
  const dispatch = useAppDispatch()

  return (
    <Paper withBorder p="md" radius="md" className="bg-white shadow-sm">
      <Group justify="space-between" wrap="nowrap">
        <Group gap="sm" wrap="nowrap" className="min-w-0 flex-1">
          <Badge variant="light" color="blue" size="lg">
            {item.priority}
          </Badge>
          <Text className="truncate">{item.text}</Text>
        </Group>
        <ActionIcon
          variant="subtle"
          color="red"
          aria-label={`Delete ${item.text}`}
          onClick={() => dispatch(deleteTodo(item.id))}
        >
          <IconTrash size={18} />
        </ActionIcon>
      </Group>
    </Paper>
  )
}
