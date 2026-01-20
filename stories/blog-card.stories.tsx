import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import BlogCard from '@/components/terrorui/vhsCard';

const meta = {
  title: 'TerrorUI/BlogCard',
  component: BlogCard,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Title of the blog post',
    },
    excerpt: {
      control: 'text',
      description: 'Excerpt or description of the blog post',
    },
    author: {
      control: 'text',
      description: 'Author name',
    },
    authorAvatar: {
      control: 'text',
      description: 'Author avatar image URL',
    },
    date: {
      control: 'text',
      description: 'Publication date',
    },
    category: {
      control: 'text',
      description: 'Blog post category',
    },
    image: {
      control: 'text',
      description: 'Blog post featured image URL',
    },
    views: {
      control: { type: 'number', min: 0 },
      description: 'Number of views',
    },
    likes: {
      control: { type: 'number', min: 0 },
      description: 'Number of likes',
    },
    comments: {
      control: { type: 'number', min: 0 },
      description: 'Number of comments',
    },
  },
} satisfies Meta<typeof BlogCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'O Horror dos Pesadelos Antigos',
    excerpt: 'Explore os segredos sombrios de pesadelos que assombram gerações. Uma jornada através do medo e do desconhecido.',
    author: 'Dr. Terror',
    authorAvatar: undefined,
    date: '15.10.2024',
    category: 'Horror',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80',
    views: 1250,
    likes: 89,
    comments: 23,
  },
  render: (args) => (
    <div className="w-full max-w-md">
      <BlogCard {...args} />
    </div>
  ),
};

export const WithoutImage: Story = {
  args: {
    title: 'Lendas Urbanas: A Verdade por Trás dos Mitos',
    excerpt: 'Descubra as histórias reais que inspiraram algumas das lendas urbanas mais assustadoras já contadas.',
    author: 'Sarah Night',
    authorAvatar: undefined,
    date: '20.10.2024',
    category: 'Lendas',
    image: undefined,
    views: 890,
    likes: 67,
    comments: 15,
  },
  render: (args) => (
    <div className="w-full max-w-md">
      <BlogCard {...args} />
    </div>
  ),
};

export const WithAvatar: Story = {
  args: {
    title: 'Investigação Paranormal: Casos Não Resolvidos',
    excerpt: 'Uma análise profunda dos casos mais misteriosos de atividades paranormais registradas nos últimos anos.',
    author: 'Investigator X',
    authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    date: '12.10.2024',
    category: 'Paranormal',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&q=80',
    views: 2450,
    likes: 156,
    comments: 42,
  },
  render: (args) => (
    <div className="w-full max-w-md">
      <BlogCard {...args} />
    </div>
  ),
};

export const HighStats: Story = {
  args: {
    title: 'O Mistério da Mansão Abandonada',
    excerpt: 'A história completa de uma mansão que esconde segredos há décadas. Uma investigação detalhada sobre os eventos sobrenaturais.',
    author: 'Mark Hunter',
    authorAvatar: undefined,
    date: '05.10.2024',
    category: 'Mistério',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    views: 15200,
    likes: 890,
    comments: 234,
  },
  render: (args) => (
    <div className="w-full max-w-md">
      <BlogCard {...args} />
    </div>
  ),
};

export const TVStatic: Story = {
  args: {
    title: 'Sinal Perdido: A Transmissão Maldita',
    excerpt: 'Uma história sobre uma transmissão de TV que nunca deveria ter sido vista. O que aconteceu com aqueles que assistiram?',
    author: 'Anonymous',
    authorAvatar: undefined,
    date: '01.11.2024',
    category: 'Sobrenatural',
    image: '', // Sem imagem para mostrar o efeito de chuvisco de TV
    views: 567,
    likes: 34,
    comments: 12,
  },
  render: (args) => (
    <div className="w-full max-w-md">
      <BlogCard {...args} />
    </div>
  ),
};

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
      <BlogCard
        title="Horror Clássico: Os Primeiros Pesadelos"
        excerpt="Uma viagem no tempo através dos primeiros filmes de horror que definiram o gênero."
        author="Cinema Historian"
        date="18.10.2024"
        category="Cinema"
        image="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80"
        views={3200}
        likes={245}
        comments={67}
      />
      <BlogCard
        title="Lendas Urbanas: Parte II"
        excerpt="Continuamos nossa jornada explorando mais lendas urbanas que continuam assustando até hoje."
        author="Sarah Night"
        date="22.10.2024"
        category="Lendas"
        image=""
        views={890}
        likes={67}
        comments={15}
      />
      <BlogCard
        title="Investigação no Asilo Abandonado"
        excerpt="Relato completo de uma investigação paranormal realizada em um antigo asilo que esconde segredos sombrios."
        author="Ghost Hunters"
        authorAvatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
        date="25.10.2024"
        category="Paranormal"
        image="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80"
        views={4567}
        likes={312}
        comments={89}
      />
    </div>
  ),
};