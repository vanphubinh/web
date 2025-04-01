import { CategoryAsyncSelect } from '@/features/category/components/CategoryAsyncSelect';
import { UomAsyncSelect } from '@/features/uom/components/UomAsyncSelect';
import { ProductType } from '@/features/product/components/validators';
import { Divider, Fieldset, Group, Stack, Text } from '@mantine/core';
import { NumberInput } from '@/components/form/NumberInput';
import { useFormContext, useWatch } from 'react-hook-form';
import { InputLabel } from '@/components/ui/InputLabel';
import { Textarea } from '@/components/form/Textarea';
import { Select } from '@/components/form/Select';
import { Radio } from '@/components/form/Radio';

export function GeneralInfoSection() {
  const { control } = useFormContext();

  return (
    <>
      <Textarea
        name="name"
        control={control}
        label="Tên"
        autosize
        data-autofocus
        minRows={1}
        withAsterisk
        variant="unstyled"
        placeholder="Nhập tên sản phẩm"
        styles={{
          input: {
            fontSize: '1.5rem',
            padding: '0',
          },
        }}
      />
      <Divider my="md" />
      <Fieldset
        legend={
          <Text fw={500} size="md">
            Thông tin cơ bản
          </Text>
        }
        variant="unstyled"
      >
        <div className="grid grid-cols-2 gap-24">
          <Stack gap="sm">
            <div className="grid form-grid gap-x-6 gap-y-2">
              <ProductTypeRadioGroup />
              <GoodsTypeRadioGroup />
              <UomSelect />
            </div>
          </Stack>
          <div className="grid form-grid gap-x-6 gap-y-2">
            <CategorySelect />
            <PriceInput />
            <CostInput />
          </div>
        </div>
        <Textarea
          name="description"
          control={control}
          label="Mô tả"
          autosize
          minRows={2}
          placeholder="Nhập mô tả sản phẩm"
          className="mt-2"
        />
      </Fieldset>
    </>
  );
}

function ProductTypeRadioGroup() {
  const { control } = useFormContext();
  return (
    <div className="xl:contents">
      <InputLabel title="Loại sản phẩm" withAsterisk />
      <Radio.Group name="productType" control={control}>
        <Group gap="md" wrap="nowrap">
          <Radio.Item value={ProductType.GOODS} label="Hàng hóa" />
          <Radio.Item value={ProductType.SERVICE} label="Dịch vụ" />
        </Group>
      </Radio.Group>
    </div>
  );
}

function GoodsTypeRadioGroup() {
  const { control } = useFormContext();

  const productType = useWatch({ control, name: 'productType' });

  if (productType === ProductType.SERVICE) {
    return null;
  }

  return (
    <div className="xl:contents">
      <InputLabel title="Loại hàng hóa" withAsterisk />
      <Select
        name="productSubtype"
        control={control}
        withAsterisk
        variant="underline"
        data={[
          {
            label: 'Thông thường',
            value: 'standard',
          },
          {
            label: 'Bao bì in ấn',
            value: 'printable_packaging',
          },
          {
            label: 'Trục in',
            value: 'printing_mould',
          },
        ]}
      />
    </div>
  );
}

function UomSelect() {
  const { control } = useFormContext();
  return (
    <div className="xl:contents">
      <InputLabel title="Đơn vị tính" withAsterisk />
      <UomAsyncSelect name="uomId" control={control} />
    </div>
  );
}

function CategorySelect() {
  const { control } = useFormContext();
  return (
    <div className="xl:contents">
      <InputLabel title="Danh mục" />
      <CategoryAsyncSelect name="categoryId" control={control} />
    </div>
  );
}

function PriceInput() {
  const { control } = useFormContext();
  return (
    <div className="xl:contents">
      <InputLabel title="Giá" />
      <NumberInput name="price" control={control} variant="underline" hideControls />
    </div>
  );
}

function CostInput() {
  const { control } = useFormContext();
  return (
    <div className="xl:contents">
      <InputLabel title="Chi phí" />
      <NumberInput name="cost" control={control} variant="underline" hideControls />
    </div>
  );
}
