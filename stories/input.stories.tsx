import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Input } from '@/components/terrorui/input';

const meta = {
  title: 'TerrorUI/Input',
  component: Input,
  parameters: {
    backgrounds: {
        default: 'dark',
        colors: [
          { name: 'dark', value: '#0a0a0a' },
          { name: 'light', value: '#ffffff' },
        ],
      },
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
};

export const WithValue: Story = {
  args: {
    value: 'Hello World',
    readOnly: true,
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'email@example.com',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Password',
  },
};
