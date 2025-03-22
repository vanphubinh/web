import { createFileRoute } from '@tanstack/react-router';
export const Route = createFileRoute('/_layout/')({
  component: App,
});

function App() {
  return <div className="text-3xl font-bold">Hello! This is Van Phu Binh</div>;
}
