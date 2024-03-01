import { Meta, StoryObj } from "@storybook/react";
import Button from "./Example";

const mock = {
  title: 'Example',
}

const meta = {
  component: Button,
  parameters: {
    docs: {
      source: { type: 'code' },
    }
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = { 
  args: {
    ...mock
  }
}


