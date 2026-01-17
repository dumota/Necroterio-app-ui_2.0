import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '@/components/terrorui/card';
import { Button } from '@/components/terrorui/button';

const meta = {
  title: 'TerrorUI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
};

export const Simple: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Simple Card</CardTitle>
        <CardDescription>This is a simple card without footer</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Some content here.</p>
      </CardContent>
    </Card>
  ),
};
