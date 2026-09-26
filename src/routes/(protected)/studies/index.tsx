import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(protected)/studies/')({
  component: () => <div>Hello "/(protected)/studies/"!</div>,
})
