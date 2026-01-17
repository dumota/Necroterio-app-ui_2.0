import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from '@/components/terrorui/button';
import { Skull, AlertTriangle, Heart, Eye, Star, Bell, Trash2, Loader2 } from 'lucide-react';

const meta = {
  title: 'TerrorUI/Button',
  component: Button,
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
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
        'blood',
        'toxic',
        'bone',
        'outline-blood',
        'outline-toxic',
        'outline-bone',
        'ghost-blood',
        'ghost-toxic',
        'gradient',
      ],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
  },
};

export const BloodButton: Story = {
  args: {
    children: (
      <>
        <Skull className="mr-2" size={18} />
        BLOOD BUTTON
      </>
    ),
    variant: 'blood',
  },
};

export const ToxicButton: Story = {
  args: {
    children: (
      <>
        <AlertTriangle className="mr-2" size={18} />
        TOXIC BUTTON
      </>
    ),
    variant: 'toxic',
  },
};

export const GradientButton: Story = {
  args: {
    children: 'PULSANTE',
    variant: 'gradient',
  },
};

export const OutlineButtons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="outline-blood">
        <Heart className="mr-2" size={16} />
        OUTLINE BLOOD
      </Button>
      <Button variant="outline-toxic">
        <Eye className="mr-2" size={16} />
        OUTLINE TOXIC
      </Button>
      <Button variant="outline-bone">
        <Star className="mr-2" size={16} />
        OUTLINE BONE
      </Button>
    </div>
  ),
};

export const GhostButtons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="ghost-blood">GHOST BLOOD</Button>
      <Button variant="ghost-toxic">GHOST TOXIC</Button>
    </div>
  ),
};

export const IconButtons: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="icon" variant="blood">
        <Skull size={20} />
      </Button>
      <Button size="icon" variant="outline-toxic">
        <Bell size={20} />
      </Button>
      <Button size="icon" variant="ghost-blood">
        <Trash2 size={20} />
      </Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="sm" variant="blood" className="font-typewriter text-xs">
        PEQUENO
      </Button>
      <Button variant="blood" className="font-typewriter">
        MÉDIO
      </Button>
      <Button size="lg" variant="blood" className="font-horror text-xl">
        GRANDE
      </Button>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="blood" disabled>
        <Loader2 className="mr-2 animate-spin" size={16} />
        CARREGANDO...
      </Button>
      <Button variant="outline" disabled className="bg-muted text-muted-foreground">
        DESABILITADO
      </Button>
    </div>
  ),
};
