import { Box, Paper } from '@mantine/core';

interface SidebarProps {
  children?: React.ReactNode;
}

export function Sidebar({ children }: SidebarProps) {
  return (
    <Paper
      shadow="md"
      p="md"
      radius="md"
      withBorder
      className="h-full bg-gray-50"
    >
      <Box>{children}</Box>
    </Paper>
  );
}
