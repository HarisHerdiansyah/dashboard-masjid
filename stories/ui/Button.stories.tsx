import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'

import { Button } from '../../src/components/ui/button'

const meta = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Simpan',
    onClick: fn(),
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  }
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Hapus',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const Icon: Story = {
  args: {
    size: 'icon',
    'aria-label': 'Tambah item',
    children: '+',
  },
}

export const Selected: Story = {
  args: {
    variant: 'selected',
  },
}