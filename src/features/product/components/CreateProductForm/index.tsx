import {
  CreateProductSchema,
  CreateProductInput,
  CreateProductOuput,
  ProductSubtype,
  ProductType,
} from '@/features/product/components/validators';
import { valibotResolver } from '@hookform/resolvers/valibot';
import { GeneralInfoSection } from './GeneralInfoSection';
import { Button, Card, Group, Text } from '@mantine/core';
import { FormProvider, useForm } from 'react-hook-form';
import { Save } from 'lucide-react';
import { qraft } from '@/lib/qraft';
import { toast } from 'sonner';

export function CreateProductForm() {
  const methods = useForm<CreateProductInput, any, CreateProductOuput>({
    defaultValues: {
      name: '',
      productType: ProductType.GOODS,
      productSubtype: ProductSubtype.STANDARD,
      uomId: undefined,
      categoryId: null,
      description: '',
      price: 0,
      cost: 0,
    },
    resolver: valibotResolver(CreateProductSchema),
  });

  const { mutate: createProduct } = qraft.product.createProduct.useMutation(undefined, {});

  const onSubmit = methods.handleSubmit((data: CreateProductOuput) => {
    createProduct(
      { body: data },
      {
        onSuccess: () => {
          toast.success('Sản phẩm đã được tạo thành công');
        },
      }
    );
  });

  return (
    <FormProvider {...methods}>
      <form id="create-product-form" onSubmit={onSubmit}>
        <Card withBorder className="h-[calc(100dvh-20px)]" padding="0" radius="sm" shadow="sm">
          <div className="flex flex-wrap items-center justify-between px-6 py-2 border-b border-gray-200">
            <Group gap="xs">
              <Text fw={500} size="sm">
                Sản phẩm
              </Text>
              <Text fw={500} size="sm">
                {'>'}
              </Text>
              <Text fw={500} size="sm">
                Tạo sản phẩm
              </Text>
            </Group>
            <Button leftSection={<Save size={14} />} type="submit" form="create-product-form">
              Lưu
            </Button>
          </div>
          <div className="px-24 py-6 h-full">
            <GeneralInfoSection />
          </div>
        </Card>
      </form>
    </FormProvider>
  );
}
