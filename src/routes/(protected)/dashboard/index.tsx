import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(protected)/dashboard/')({
  component: () => <div>Hello "/(protected)/dashboard/"!</div>,
})
