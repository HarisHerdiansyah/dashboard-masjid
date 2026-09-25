import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: () => (
    <main>
      <h1>Dashboard Masjid</h1>
      <p>Selamat datang di dashboard masjid.</p>
    </main>
  ),
});
