import { Badge, Group, Stack, Text, Title } from '@mantine/core'
import { useAppSelector } from '../store/hooks'
import { selectMissingPriorities, selectTodoItems } from '../store/todoSlice'

export function MissingPriorities() {
  const items = useAppSelector(selectTodoItems)
  const missing = useAppSelector(selectMissingPriorities)

  return (
    <Stack gap="md">
      <Title order={3} className="text-gray-800">
        Missing Priorities
      </Title>
      <Text size="sm" c="dimmed">
        Gaps in the priority range from 1 to the highest assigned value.
      </Text>

      {missing.length === 0 ? (
        <Text c="dimmed" className="italic">
          {items.length === 0
            ? 'Add items to see available priority gaps.'
            : 'No gaps — every priority from 1 to the max is assigned.'}
        </Text>
      ) : (
        <Group gap="xs">
          {missing.map((priority) => (
            <Badge key={priority} variant="outline" color="gray" size="lg">
              {priority}
            </Badge>
          ))}
        </Group>
      )}
    </Stack>
  )
}
