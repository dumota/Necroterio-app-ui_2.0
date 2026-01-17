import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { FeatureCard } from '@/components/terrorui/feature-card';

const meta = {
  title: 'TerrorUI/FeatureCard',
  component: FeatureCard,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    image: {
      control: 'text',
      description: 'Image URL or path',
    },
    title: {
      control: 'text',
      description: 'Card title',
    },
    description: {
      control: 'text',
      description: 'Card description',
    },
    showGlitch: {
      control: 'boolean',
      description: 'Show glitch effect on hover',
    },
    showBloodDrip: {
      control: 'boolean',
      description: 'Show blood drip effect on hover',
    },
  },
} satisfies Meta<typeof FeatureCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&h=400&fit=crop',
    title: 'OS MORTOS ACORDARAM',
    description: 'Eles estavam esperando no escuro. Agora, eles vieram buscar você.',
    showGlitch: true,
    showBloodDrip: true,
  },
};

export const WithoutEffects: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=400&fit=crop',
    title: 'SANGUE NAS PAREDES',
    description: 'Cada corredor conta uma história. Cada mancha esconde um segredo.',
    showGlitch: false,
    showBloodDrip: false,
  },
};

export const OnlyGlitch: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=400&fit=crop',
    title: 'SEM ESCAPATÓRIA',
    description: 'As portas se fecharam. O necrotério é sua nova casa... para sempre.',
    showGlitch: true,
    showBloodDrip: false,
  },
};

export const OnlyBloodDrip: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=600&h=400&fit=crop',
    title: 'A ESPERA ACABOU',
    description: 'O terror chegou. Não há como voltar atrás.',
    showGlitch: false,
    showBloodDrip: true,
  },
};

export const Multiple: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&h=400&fit=crop',
    title: 'Example',
    description: 'Example description',
  },
  render: () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl w-full p-4">
      <FeatureCard
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
        title="OS MORTOS ACORDARAM"
        description="Eles estavam esperando no escuro. Agora, eles vieram buscar você."
      />
      <FeatureCard
        image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop"
        title="SANGUE NAS PAREDES"
        description="Cada corredor conta uma história. Cada mancha esconde um segredo."
      />
      <FeatureCard
        image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=400&fit=crop"
        title="SEM ESCAPATÓRIA"
        description="As portas se fecharam. O necrotério é sua nova casa... para sempre."
      />
    </div>
  ),
};

export const WithSection: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&h=400&fit=crop',
    title: 'Example',
    description: 'Example description',
  },
  render: () => (
    <section className="relative py-12 md:py-24 bg-background w-full">
      {/* Retro stripes decoration */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blood via-toxic to-blood" />

      {/* Section header */}
      <div className="text-center mb-8 md:mb-16 px-4">
        <div className="inline-block mb-4 md:mb-6">
          <div className="flex items-center gap-2 md:gap-3 justify-center">
            <div className="w-4 md:w-8 h-1 bg-toxic" />
            <span className="font-typewriter text-toxic text-xs md:text-sm tracking-widest">
              CAPÍTULOS DO MEDO
            </span>
            <div className="w-4 md:w-8 h-1 bg-toxic" />
          </div>
        </div>
        <h2 className="font-horror text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-blood blood-drip mb-3 md:mb-4">
          O QUE TE ESPERA
        </h2>
        <p className="font-typewriter text-muted-foreground text-sm md:text-base lg:text-lg">
          Três níveis de terror absoluto
        </p>
        <div className="mt-3 md:mt-4 inline-flex items-center gap-2 font-typewriter text-xs text-muted-foreground">
          <span>▌▌▌▌</span>
          <span className="hidden sm:inline">ALUGUE JÁ NA SUA LOCADORA</span>
          <span className="sm:hidden">LOCADORA</span>
          <span>▐▐▐▐</span>
        </div>
      </div>

      {/* Features grid */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
        <FeatureCard
          image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
          title="OS MORTOS ACORDARAM"
          description="Eles estavam esperando no escuro. Agora, eles vieram buscar você."
        />
        <FeatureCard
          image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop"
          title="SANGUE NAS PAREDES"
          description="Cada corredor conta uma história. Cada mancha esconde um segredo."
        />
        <FeatureCard
          image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=400&fit=crop"
          title="SEM ESCAPATÓRIA"
          description="As portas se fecharam. O necrotério é sua nova casa... para sempre."
        />
      </div>
    </section>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
