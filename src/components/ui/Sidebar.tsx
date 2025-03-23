import { Box, Paper } from '@mantine/core';

interface SidebarProps {
  children?: React.ReactNode;
}

export function Sidebar({ children }: SidebarProps) {
  return (
    <Paper p="md" className="h-full" bg="gray.0">
      <Box>{children}</Box>
    </Paper>
  );
}
