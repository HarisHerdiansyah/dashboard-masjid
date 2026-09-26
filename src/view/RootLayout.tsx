import { Outlet } from '@tanstack/react-router';

export default function RootLayout() {
  return (
    <main className="min-h-screen max-w-xl mx-auto p-4 border border-mist-700">
      <Outlet />
    </main>
  )
}