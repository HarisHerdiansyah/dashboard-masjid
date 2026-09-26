import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(protected)/running-text/')({
  component: () => <div>Hello "/(protected)/running-text/"!</div>,
})
