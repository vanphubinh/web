import { createFileRoute } from '@tanstack/react-router';
import { Button, Title } from '@mantine/core';
import { Plus } from 'lucide-react';
export const Route = createFileRoute('/_layout/inventory/uoms/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <div className="mb-2 flex flex-wrap items-center justify-between">
        <Title order={3}>Đơn vị đo lường</Title>
        <Button
          rightSection={<Plus size={16} />}
          onClick={() => {
            // Handle create UOM action
            console.log('Create UOM clicked');
          }}
        >
          Tạo
        </Button>
      </div>
    </div>
  );
}
