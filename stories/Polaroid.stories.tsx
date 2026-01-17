import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Polaroid } from '@/components/terrorui/polaroid';

const meta = {
  title: 'TerrorUI/Polaroid',
  component: Polaroid,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    rotation: {
      control: { type: 'range', min: -15, max: 15, step: 1 },
      description: 'Rotation angle in degrees',
    },
    img: {
      control: 'text',
      description: 'Image URL or path',
    },
    caption: {
      control: 'text',
      description: 'Caption text',
    },
    date: {
      control: 'text',
      description: 'Date text',
    },
    showTape: {
      control: 'boolean',
      description: 'Show tape effect on top',
    },
    showScratches: {
      control: 'boolean',
      description: 'Show scratches overlay',
    },
    showBloodStain: {
      control: 'boolean',
      description: 'Show blood stain effect',
    },
  },
} satisfies Meta<typeof Polaroid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rotation: -3,
    img: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&h=400&fit=crop',
    caption: 'Memories',
    date: '2024',
    showTape: true,
    showScratches: true,
    showBloodStain: false,
  },
};

export const Rotated: Story = {
  args: {
    rotation: 5,
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop',
    caption: 'Vintage',
    date: '2023',
    showTape: true,
    showScratches: true,
    showBloodStain: false,
  },
};

export const WithCaptionOnly: Story = {
  args: {
    rotation: -2,
    img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop',
    caption: 'Horror Theme',
    showTape: true,
    showScratches: true,
    showBloodStain: false,
  },
};

export const WithDateOnly: Story = {
  args: {
    rotation: 3,
    img: 'https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=400&h=400&fit=crop',
    date: 'Halloween 2024',
    showTape: true,
    showScratches: true,
    showBloodStain: false,
  },
};

export const WithBloodStain: Story = {
  args: {
    rotation: -2,
    img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop',
    caption: 'Horror Theme',
    date: '2024',
    showTape: true,
    showScratches: true,
    showBloodStain: true,
  },
};

export const WithoutTape: Story = {
  args: {
    rotation: 3,
    img: 'https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=400&h=400&fit=crop',
    caption: 'Sem Fita',
    date: '2024',
    showTape: false,
    showScratches: true,
    showBloodStain: false,
  },
};

export const Multiple: Story = {
  args: {
    rotation: 0,
    img: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&h=400&fit=crop',
    caption: 'Example',
    date: '2024',
  },
  render: () => (
    <div className="flex gap-8 flex-wrap justify-center">
      <Polaroid
        rotation={-5}
        img="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop"
        caption="Nightmare"
        date="2024"
      />
      <Polaroid
        rotation={3}
        img="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
        caption="Darkness"
        date="2023"
      />
      <Polaroid
        rotation={-2}
        img="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop"
        caption="Mystery"
        date="2022"
      />
    </div>
  ),
};
