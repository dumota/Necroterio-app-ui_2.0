import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { VHSOverlay } from '@/components/terrorui/vhs-overlay';

const meta = {
  title: 'TerrorUI/VHSOverlay',
  component: VHSOverlay,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    intensity: {
      control: 'select',
      options: ['low', 'medium', 'high'],
      description: 'Intensity of the VHS effects',
    },
  },
} satisfies Meta<typeof VHSOverlay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    intensity: 'medium',
  },
  render: (args) => (
    <div className="relative min-h-screen bg-background p-8">
      <VHSOverlay {...args} />
      <div className="relative z-50 space-y-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-horror text-4xl md:text-6xl text-blood blood-drip mb-4">
            VHS OVERLAY EFFECT
          </h1>
          <p className="font-typewriter text-lg text-foreground mb-8">
            Este overlay cria um efeito autêntico de fita VHS dos anos 80/90.
          </p>
          
          <div className="space-y-4">
            <div className="bg-card/50 border border-blood/30 p-6 rounded-lg">
              <h2 className="font-horror text-2xl text-blood mb-2">Características</h2>
              <ul className="font-typewriter text-sm space-y-2 text-muted-foreground">
                <li>• Linhas de varredura VHS</li>
                <li>• Efeito de grão/ruído</li>
                <li>• Barras de glitch ocasionais</li>
                <li>• Vinheta retrô</li>
              </ul>
            </div>

            <div className="bg-card/50 border border-toxic/30 p-6 rounded-lg">
              <h2 className="font-horror text-2xl text-toxic mb-2">Uso</h2>
              <pre className="font-mono text-xs text-muted-foreground overflow-x-auto">
{`import { VHSOverlay } from '@/components/terrorui/vhs-overlay';

<VHSOverlay intensity="medium" />`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const LowIntensity: Story = {
  args: {
    intensity: 'low',
  },
  render: (args) => (
    <div className="relative min-h-screen bg-background p-8">
      <VHSOverlay {...args} />
      <div className="relative z-50 text-center">
        <h1 className="font-horror text-4xl text-blood">Low Intensity</h1>
        <p className="font-typewriter text-muted-foreground mt-4">Efeito mais sutil</p>
      </div>
    </div>
  ),
};

export const HighIntensity: Story = {
  args: {
    intensity: 'high',
  },
  render: (args) => (
    <div className="relative min-h-screen bg-background p-8">
      <VHSOverlay {...args} />
      <div className="relative z-50 text-center">
        <h1 className="font-horror text-4xl text-blood">High Intensity</h1>
        <p className="font-typewriter text-muted-foreground mt-4">Efeito mais intenso</p>
      </div>
    </div>
  ),
};
