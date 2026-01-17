import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/terrorui/popover';
import { Button } from '@/components/terrorui/button';
import { cn } from '@/lib/utils';
const ColorSwatch = ({
    name,
    color,
    textColor,
    border = false,
  }: {
    name: string;
    color: string;
    textColor: string;
    border?: boolean;
  }) => (
    <div className="space-y-2">
      <div
        className={cn(
          "h-20 rounded-lg flex items-center justify-center",
          color,
          textColor,
          border && "border border-border"
        )}
      >
        <span className="font-typewriter text-sm font-bold">{name}</span>
      </div>
      <p className="text-xs font-mono text-muted-foreground text-center">{color.replace("bg-", "")}</p>
    </div>
  );

const PaletColors = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <ColorSwatch name="Blood" color="bg-blood" textColor="text-primary-foreground" />
    <ColorSwatch name="Toxic" color="bg-toxic" textColor="text-accent-foreground" />
    <ColorSwatch name="Bone" color="bg-bone" textColor="text-background" />
    <ColorSwatch name="Accent" color="bg-accent" textColor="text-accent-foreground" />
    <ColorSwatch name="Background" color="bg-background" textColor="text-foreground" border />
    <ColorSwatch name="Card" color="bg-card" textColor="text-card-foreground" border />
    <ColorSwatch name="Muted" color="bg-muted" textColor="text-muted-foreground" />
    <ColorSwatch name="Destructive" color="bg-destructive" textColor="text-destructive-foreground" />
  </div>
  )
}

const meta = {
  title: 'TerrorUI/Palet Colors',
  component: PaletColors,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaletColors>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <PaletColors />
  ),
};
