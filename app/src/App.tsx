import { Container, Paper, Stack, Title } from '@mantine/core'
import { MissingPriorities } from './components/MissingPriorities'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-10">
      <Container size="sm">
        <Stack gap="xl">
          <div className="text-center">
            <Title order={1} className="text-gray-900">
              Todo List
            </Title>
            <Title order={4} c="dimmed" fw={400} mt="xs">
              Prioritize what matters
            </Title>
          </div>

          <Paper withBorder shadow="md" p="xl" radius="lg" className="bg-white/90 backdrop-blur">
            <Stack gap="xl">
              <TodoForm />
              <TodoList />
              <MissingPriorities />
            </Stack>
          </Paper>
        </Stack>
      </Container>
    </div>
  )
}

export default App
