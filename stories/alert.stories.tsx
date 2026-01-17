import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Alert, AlertTitle, AlertDescription } from '@/components/terrorui/alert';
import { Skull, AlertTriangle, Bell, Check } from 'lucide-react';

const meta = {
  title: 'TerrorUI/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'blood', 'toxic', 'accent', 'bone'],
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
  render: (args) => (
    <Alert {...args}>
      <Skull className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        Você pode adicionar componentes e dependências ao seu app usando o cli.
      </AlertDescription>
    </Alert>
  ),
};

export const Blood: Story = {
  args: {
    variant: 'blood',
  },
  render: (args) => (
    <Alert {...args}>
      <Skull className="h-4 w-4 text-blood" />
      <AlertTitle className="text-blood">PERIGO!</AlertTitle>
      <AlertDescription>
        Você está prestes a entrar em uma área de alto risco. Prossiga por sua conta e risco.
      </AlertDescription>
    </Alert>
  ),
};

export const Toxic: Story = {
  args: {
    variant: 'toxic',
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTriangle className="h-4 w-4 text-toxic" />
      <AlertTitle className="text-toxic">AVISO TÓXICO</AlertTitle>
      <AlertDescription>
        Níveis de radiação detectados. Use equipamento de proteção apropriado.
      </AlertDescription>
    </Alert>
  ),
};

export const Accent: Story = {
  args: {
    variant: 'accent',
  },
  render: (args) => (
    <Alert {...args}>
      <Bell className="h-4 w-4 text-accent" />
      <AlertTitle className="text-accent">INFORMAÇÃO</AlertTitle>
      <AlertDescription>
        Um novo arquivo foi adicionado ao sistema do necrotério.
      </AlertDescription>
    </Alert>
  ),
};

export const Bone: Story = {
  args: {
    variant: 'bone',
  },
  render: (args) => (
    <Alert {...args}>
      <Check className="h-4 w-4 text-bone" />
      <AlertTitle className="text-bone">SUCESSO</AlertTitle>
      <AlertDescription>
        Operação concluída. Vítima processada com sucesso.
      </AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  ),
};
