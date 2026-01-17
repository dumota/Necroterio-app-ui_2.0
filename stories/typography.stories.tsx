import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Typography } from '@/components/terrorui/typography';

const meta = {
  title: 'TerrorUI/Typography',
  component: Typography,
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
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body', 'bodySm', 'bodyLg', 'mono'],
    },
    color: {
      control: 'select',
      options: ['default', 'blood', 'toxic', 'bone', 'accent', 'muted'],
    },
    effect: {
      control: 'select',
      options: ['none', 'drip', 'flicker', 'glow'],
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Typography Text',
    variant: 'body',
  },
};

export const Headings: Story = {
  render: () => (
    <div className="space-y-6">
      <Typography variant="h1" color="blood" effect="drip">
        Heading 1 - Horror
      </Typography>
      <Typography variant="h2" color="toxic" effect="flicker">
        Heading 2 - Toxic
      </Typography>
      <Typography variant="h3" color="bone">
        Heading 3 - Bone
      </Typography>
      <Typography variant="h4" color="blood">
        Heading 4
      </Typography>
      <Typography variant="h5" color="toxic">
        Heading 5
      </Typography>
      <Typography variant="h6" color="bone">
        Heading 6
      </Typography>
    </div>
  ),
};

export const BodyText: Story = {
  render: () => (
    <div className="space-y-4 max-w-2xl">
      <Typography variant="bodyLg" color="default">
        Large body text with font-typewriter. Perfect for important paragraphs and descriptions.
      </Typography>
      <Typography variant="body" color="muted">
        Regular body text with font-typewriter. Standard paragraph size.
      </Typography>
      <Typography variant="bodySm" color="muted">
        Small body text with font-typewriter. Good for captions and secondary information.
      </Typography>
      <Typography variant="mono" color="toxic">
        Monospace text for code, technical data, and special formatting.
      </Typography>
    </div>
  ),
};

export const Effects: Story = {
  render: () => (
    <div className="space-y-6">
      <Typography variant="h2" color="blood" effect="drip">
        Blood Drip Effect
      </Typography>
      <Typography variant="h2" color="toxic" effect="flicker">
        Flicker Effect
      </Typography>
      <Typography variant="h2" color="blood" effect="glow">
        Glow Effect
      </Typography>
      <Typography variant="h2" color="bone" effect="none">
        No Effect
      </Typography>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="h3" color="blood">
        Blood Red
      </Typography>
      <Typography variant="h3" color="toxic">
        Toxic Green
      </Typography>
      <Typography variant="h3" color="bone">
        Bone White
      </Typography>
      <Typography variant="h3" color="accent">
        Accent Yellow
      </Typography>
      <Typography variant="h3" color="default">
        Default Foreground
      </Typography>
      <Typography variant="h3" color="muted">
        Muted Foreground
      </Typography>
    </div>
  ),
};

export const CompleteExample: Story = {
  render: () => (
    <div className="space-y-8 max-w-3xl">
      <Typography variant="h1" color="blood" effect="drip" as="h1">
        TÍTULO PRINCIPAL
      </Typography>
      <Typography variant="h2" color="toxic" effect="flicker" as="h2">
        Subtítulo Tóxico
      </Typography>
      <Typography variant="body" color="default" as="p">
        Este é um exemplo completo de tipografia no estilo horror VHS. O texto usa a fonte
        typewriter para o corpo e a fonte horror para títulos.
      </Typography>
      <Typography variant="bodySm" color="muted" as="p">
        Texto menor para informações adicionais ou notas.
      </Typography>
      <Typography variant="mono" color="toxic" as="code">
        Código técnico ou dados especiais
      </Typography>
    </div>
  ),
};
