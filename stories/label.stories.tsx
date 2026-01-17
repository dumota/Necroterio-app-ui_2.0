import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Label } from '@/components/terrorui/label';
import { Input } from '@/components/terrorui/input';

const meta = {
  title: 'TerrorUI/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="email@example.com" />
    </div>
  ),
};

export const Standalone: Story = {
  args: {
    children: 'Label',
  },
};
