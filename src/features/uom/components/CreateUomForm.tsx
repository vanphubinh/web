import { CreateUomPayload, CreateUomSchema } from '@/features/uom/validators';
import { valibotResolver } from '@hookform/resolvers/valibot';
import { TextInput } from '@/components/form/TextInput';
import { InputLabel } from '@/components/ui/InputLabel';
import { Button, Divider, Group } from '@mantine/core';
import { uomStore } from '@/features/uom/store';
import { useForm } from 'react-hook-form';
import { qraft } from '@/lib/qraft';
import { toast } from 'sonner';

export function CreateUomForm() {
  const { handleSubmit, control } = useForm<CreateUomPayload>({
    defaultValues: {
      name: '',
    },
    resolver: valibotResolver(CreateUomSchema),
  });

  const { mutate: createUom } = qraft.measurement.createUom.useMutation(undefined, {
    meta: {
      invalidates: [qraft.measurement.listUoms.getQueryKey()],
    },
  });

  const onSubmit = handleSubmit((payload) => {
    createUom(
      { body: payload },
      {
        onSuccess: () => {
          uomStore.send({ type: 'closeCreateModal' });
          toast.success('Đơn vị đo lường đã được tạo thành công');
        },
      }
    );
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="lg:form-grid grid grid-cols-1 gap-x-4 gap-y-4">
        <div className="lg:contents">
          <InputLabel title="Tên đơn vị" />
          <TextInput
            control={control}
            name="name"
            variant="underline"
            data-autofocus
            size="sm"
            placeholder="Nhập tên đơn vị"
          />
        </div>
      </div>
      <Divider my="xs" />
      <Group justify="end" mt="md">
        <Button type="submit">Tạo</Button>
      </Group>
    </form>
  );
}
