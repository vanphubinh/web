import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/inventory/categories/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_layout/inventory/categories/"!</div>
}
