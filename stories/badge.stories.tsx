import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Badge } from '@/components/terrorui/badge';
import { Skull, AlertTriangle, Heart, Eye } from 'lucide-react';

const meta = {
  title: 'TerrorUI/Badge',
  component: Badge,
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
      options: [
        'default',
        'secondary',
        'destructive',
        'outline',
        'blood',
        'toxic',
        'accent',
        'bone',
        'outline-blood',
        'outline-toxic',
        'outline-bone',
        'vhs',
      ],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Badge',
    variant: 'default',
  },
};

export const ColorVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge variant="blood">SANGUE</Badge>
      <Badge variant="toxic">TÓXICO</Badge>
      <Badge variant="accent">ALERTA</Badge>
      <Badge variant="bone">OSSO</Badge>
    </div>
  ),
};

export const OutlineVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge variant="outline-blood">OUTLINE BLOOD</Badge>
      <Badge variant="outline-toxic">OUTLINE TOXIC</Badge>
      <Badge variant="outline-bone">OUTLINE BONE</Badge>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge variant="blood" className="gap-1">
        <Skull size={12} /> MORTO
      </Badge>
      <Badge variant="toxic" className="gap-1">
        <AlertTriangle size={12} /> PERIGO
      </Badge>
      <Badge variant="outline-blood" className="gap-1">
        <Heart size={12} /> VIVO
      </Badge>
      <Badge variant="secondary" className="gap-1">
        <Eye size={12} /> OBSERVANDO
      </Badge>
    </div>
  ),
};

export const VHSStyle: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge variant="vhs" className="border-toxic text-toxic animate-pulse">
        ● REC
      </Badge>
      <Badge variant="vhs" className="border-blood text-blood">
        ▶ PLAY
      </Badge>
      <Badge variant="vhs" className="border-accent text-accent">
        ⏸ PAUSE
      </Badge>
      <Badge variant="vhs" className="border-bone text-bone">
        ⏹ STOP
      </Badge>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6 max-w-2xl">
      <div className="flex flex-wrap gap-4">
        <Badge variant="blood">SANGUE</Badge>
        <Badge variant="toxic">TÓXICO</Badge>
        <Badge variant="accent">ALERTA</Badge>
        <Badge variant="bone">OSSO</Badge>
      </div>
      <div className="flex flex-wrap gap-4">
        <Badge variant="outline-blood">OUTLINE BLOOD</Badge>
        <Badge variant="outline-toxic">OUTLINE TOXIC</Badge>
        <Badge variant="outline-bone">OUTLINE BONE</Badge>
      </div>
      <div className="flex flex-wrap gap-4">
        <Badge variant="vhs" className="border-toxic text-toxic">● REC</Badge>
        <Badge variant="vhs" className="border-blood text-blood">▶ PLAY</Badge>
      </div>
    </div>
  ),
};
