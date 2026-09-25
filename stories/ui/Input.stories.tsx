import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Input } from '../../src/components/ui/input';
import { PasswordInput } from '../../src/components/ui/password-input';

const meta = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    placeholder: 'Masukkan teks',
    onChange: fn(),
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;
type PasswordStory = StoryObj<typeof PasswordInput>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    defaultValue: 'Masjid Al-Ikhlas',
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'nama@contoh.com',
  },
};

export const Password: PasswordStory = {
  render: (args) => <PasswordInput {...args} type="password" />,
  args: {
    type: 'password',
    placeholder: 'Masukkan kata sandi',
  },
};

export const Number: Story = {
  args: {
    type: 'number',
    placeholder: '0',
  },
};

export const File: Story = {
  args: {
    type: 'file',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'Input dinonaktifkan',
  },
};

export const Invalid: Story = {
  args: {
    'aria-invalid': true,
    defaultValue: 'Nilai tidak valid',
  },
};
