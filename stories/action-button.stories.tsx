import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ActionButton } from '@/components/terrorui/action-button';
import { Play, Pause, Volume2, Download, Upload, Trash2, Edit, Plus, Minus, Check, X } from 'lucide-react';

const meta = {
  title: 'TerrorUI/ActionButton',
  component: ActionButton,
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
      options: ['blood', 'toxic', 'bone', 'outline-blood', 'outline-toxic', 'ghost-blood'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    circular: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof ActionButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <Play />,
    variant: 'blood',
    size: 'md',
    circular: true,
  },
};

export const MediaControls: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <ActionButton icon={<Play />} variant="blood" />
      <ActionButton icon={<Pause />} variant="blood" />
      <ActionButton icon={<Volume2 />} variant="outline-toxic" />
    </div>
  ),
};

export const Actions: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <ActionButton icon={<Download />} variant="outline-blood" />
      <ActionButton icon={<Upload />} variant="outline-blood" />
      <ActionButton icon={<Edit />} variant="ghost-blood" />
      <ActionButton icon={<Trash2 />} variant="ghost-blood" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <ActionButton icon={<Plus />} variant="blood" />
      <ActionButton icon={<Minus />} variant="toxic" />
      <ActionButton icon={<Check />} variant="bone" />
      <ActionButton icon={<X />} variant="outline-blood" />
      <ActionButton icon={<Play />} variant="outline-toxic" />
      <ActionButton icon={<Pause />} variant="ghost-blood" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <ActionButton icon={<Play />} variant="blood" size="sm" />
      <ActionButton icon={<Play />} variant="blood" size="md" />
      <ActionButton icon={<Play />} variant="blood" size="lg" />
    </div>
  ),
};

export const Square: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <ActionButton icon={<Play />} variant="blood" circular={false} />
      <ActionButton icon={<Pause />} variant="toxic" circular={false} />
      <ActionButton icon={<Volume2 />} variant="outline-toxic" circular={false} />
    </div>
  ),
};
