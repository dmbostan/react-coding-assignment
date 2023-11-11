import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

const clickHandler = () => console.log('Clicked.');

export const Default: Story = {
  render: () => <Button clickHandler={() => clickHandler()}>Click me</Button>,
};
