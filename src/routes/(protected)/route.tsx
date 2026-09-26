import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(protected)')({
  component: () => <div>Hello "/(protected)"!</div>,
})

