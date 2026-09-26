import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(protected)/media/')({
  component: () => <div>Hello "/(protected)/media/"!</div>,
})
