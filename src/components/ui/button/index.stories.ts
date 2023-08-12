import { Meta, StoryObj } from '@storybook/react'

import { Button } from './index'

const meta: Meta<typeof Button> = {
  title: 'components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Button'
  }
}

export default meta

type Story = StoryObj<typeof Button>

export const Contained: Story = {
  args: {
    variant: 'contained'
  }
}

export const Outlined: Story = {
  args: {
    variant: 'outlined'
  }
}
