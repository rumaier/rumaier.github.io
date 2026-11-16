import { Anchor, Button, Container, Group, MantineProvider, Paper, Stack, Text, Title } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { IconTools } from '@tabler/icons-react';
import { theme } from './theme';

const storeUrl = 'https://rscripts.store/';

export default function App() {
  return (
    <MantineProvider theme={theme} forceColorScheme="dark">
      <ModalsProvider>
        <header>
          <Container size="96rem" py={10}>
            <Group justify="space-between">
              <Group gap={10}>
                <img className="brand-logo" src="https://i.ibb.co/dG2gwZV/tr.png" alt="r_scripts" width={48} height={48} />
                <Text>Script Tools</Text>
              </Group>
              <Anchor href={storeUrl} c="inherit" size="md">Store</Anchor>
            </Group>
          </Container>
        </header>
        <main>
          <Paper className="construction-panel" withBorder>
            <Stack align="center" gap={20} ta="center">
              <IconTools size={32} stroke={2} className="construction-icon" aria-hidden="true" />
              <Title order={1}>Under construction</Title>
              <Text>Utilities for r_scripts FiveM resources are in development.</Text>
              <Button component="a" href={storeUrl} variant="light" className="store-button">
                Visit the store
              </Button>
            </Stack>
          </Paper>
        </main>
      </ModalsProvider>
    </MantineProvider>
  );
}
