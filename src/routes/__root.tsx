import { createRootRoute } from '@tanstack/react-router';
import RootLayout from '@/view/RootLayout';

export const Route = createRootRoute({
  component: () => <RootLayout />,
});
