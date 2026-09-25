import type { Meta, StoryObj } from '@storybook/react-vite'
import { Check } from 'lucide-react'

import { Badge } from '../../src/components/ui/badge'

const meta = {
	title: 'UI/Badge',
	component: Badge,
	tags: ['autodocs'],
	args: {
		children: 'Aktif',
	},
} satisfies Meta<typeof Badge>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Secondary: Story = {
	args: {
		variant: 'secondary',
		children: 'Menunggu',
	},
}

export const Destructive: Story = {
	args: {
		variant: 'destructive',
		children: 'Gagal',
	},
}

export const Outline: Story = {
	args: {
		variant: 'outline',
		children: 'Draft',
	},
}

export const Ghost: Story = {
	args: {
		variant: 'ghost',
		children: 'Arsip',
	},
}

export const Link: Story = {
	args: {
		variant: 'link',
		children: 'Lihat detail',
	},
}

export const Alert: Story = {
	args: {
		variant: 'alert',
		children: 'Peringatan',
	},
}

export const AlertInvert: Story = {
	args: {
		variant: 'alertinvert',
		children: 'Peringatan',
	},
}

export const WithIcon: Story = {
	args: {
		children: (
			<>
				<Check data-icon="inline-start" />
				Terverifikasi
			</>
		),
	},
}
