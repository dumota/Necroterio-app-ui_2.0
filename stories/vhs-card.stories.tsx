import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { VHSCard, VHSCardHeader, VHSCardTitle, VHSCardDescription, VHSCardContent, VHSCardFooter } from '@/components/terrorui/vhs-card';
import { Button } from '@/components/terrorui/button';
import { Skull, AlertTriangle, Film } from 'lucide-react';

const meta = {
  title: 'TerrorUI/VHSCard',
  component: VHSCard,
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
      options: ['default', 'recording', 'glitch', 'static'],
      description: 'Variant of the VHS card',
    },
    showRecIndicator: {
      control: 'boolean',
      description: 'Show recording indicator',
    },
  },
} satisfies Meta<typeof VHSCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    showRecIndicator: false,
  },
  render: (args) => (
    <VHSCard {...args} className="w-[350px]">
      <VHSCardHeader>
        <VHSCardTitle className="font-horror text-2xl text-blood flex items-center gap-2">
          <Skull size={24} />
          BLOOD CARD
        </VHSCardTitle>
        <VHSCardDescription className="font-typewriter">
          Card com efeito VHS padrão
        </VHSCardDescription>
      </VHSCardHeader>
      <VHSCardContent className="font-typewriter text-sm">
        <p>Este card possui efeitos autênticos de fita VHS, incluindo linhas de varredura e grão.</p>
      </VHSCardContent>
      <VHSCardFooter>
        <Button className="bg-blood hover:bg-blood/80">Ação</Button>
      </VHSCardFooter>
    </VHSCard>
  ),
};

export const Recording: Story = {
  args: {
    variant: 'default',
    showRecIndicator: true,
  },
  render: (args) => (
    <VHSCard {...args} className="w-[350px]">
      <VHSCardHeader>
        <VHSCardTitle className="font-horror text-2xl text-toxic flex items-center gap-2">
          <Film size={24} />
          GRAVAÇÃO VHS
        </VHSCardTitle>
        <VHSCardDescription className="font-typewriter">
          Card com indicador de gravação
        </VHSCardDescription>
      </VHSCardHeader>
      <VHSCardContent className="font-typewriter text-sm">
        <p>Este card mostra o indicador REC no canto superior direito, simulando uma gravação ativa.</p>
      </VHSCardContent>
    </VHSCard>
  ),
};

export const Glitch: Story = {
  args: {
    variant: 'glitch',
    showRecIndicator: false,
  },
  render: (args) => (
    <VHSCard {...args} className="w-[350px]">
      <VHSCardHeader>
        <VHSCardTitle className="font-horror text-2xl text-blood">GLITCH CARD</VHSCardTitle>
        <VHSCardDescription className="font-typewriter">
          Card com efeito de glitch contínuo
        </VHSCardDescription>
      </VHSCardHeader>
      <VHSCardContent className="font-typewriter text-sm">
        <p>Este card possui um efeito de glitch animado que simula distorções de fita VHS.</p>
      </VHSCardContent>
    </VHSCard>
  ),
};

export const Static: Story = {
  args: {
    variant: 'static',
    showRecIndicator: false,
  },
  render: (args) => (
    <VHSCard {...args} className="w-[350px]">
      <VHSCardHeader>
        <VHSCardTitle className="font-horror text-2xl text-bone">STATIC CARD</VHSCardTitle>
        <VHSCardDescription className="font-typewriter">
          Card com ruído estático
        </VHSCardDescription>
      </VHSCardHeader>
      <VHSCardContent className="font-typewriter text-sm">
        <p>Este card possui um efeito de ruído estático animado, como uma TV sem sinal.</p>
      </VHSCardContent>
    </VHSCard>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
      <VHSCard variant="default" className="w-full">
        <VHSCardHeader>
          <VHSCardTitle className="font-horror text-xl text-blood">DEFAULT</VHSCardTitle>
        </VHSCardHeader>
        <VHSCardContent className="font-typewriter text-sm">
          <p>Card padrão com efeitos VHS</p>
        </VHSCardContent>
      </VHSCard>

      <VHSCard variant="recording" showRecIndicator className="w-full">
        <VHSCardHeader>
          <VHSCardTitle className="font-horror text-xl text-toxic">RECORDING</VHSCardTitle>
        </VHSCardHeader>
        <VHSCardContent className="font-typewriter text-sm">
          <p>Card com indicador REC</p>
        </VHSCardContent>
      </VHSCard>

      <VHSCard variant="glitch" className="w-full">
        <VHSCardHeader>
          <VHSCardTitle className="font-horror text-xl text-blood">GLITCH</VHSCardTitle>
        </VHSCardHeader>
        <VHSCardContent className="font-typewriter text-sm">
          <p>Card com efeito de glitch</p>
        </VHSCardContent>
      </VHSCard>

      <VHSCard variant="static" className="w-full">
        <VHSCardHeader>
          <VHSCardTitle className="font-horror text-xl text-bone">STATIC</VHSCardTitle>
        </VHSCardHeader>
        <VHSCardContent className="font-typewriter text-sm">
          <p>Card com ruído estático</p>
        </VHSCardContent>
      </VHSCard>
    </div>
  ),
};
