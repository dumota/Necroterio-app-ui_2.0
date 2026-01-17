import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { AspectRatio } from '@/components/terrorui/aspect-ratio';

const meta = {
  title: 'TerrorUI/AspectRatio',
  component: AspectRatio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <AspectRatio ratio={16 / 9} className="bg-muted">
      <img
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Photo by Drew Beamer"
        className="h-full w-full rounded-md object-cover"
      />
    </AspectRatio>
  ),
};
