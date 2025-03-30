export const InputLabel = ({
  title,
  withAsterisk = false,
}: {
  title: string;
  withAsterisk?: boolean;
}) => {
  return (
    <label className="h-[32px] truncate text-sm font-medium lg:pt-[6px]">
      {title} {withAsterisk && <span className="text-red-500">*</span>}
    </label>
  );
};
