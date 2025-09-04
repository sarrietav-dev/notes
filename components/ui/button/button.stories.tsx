import { Meta, StoryObj } from "@storybook/nextjs";
import Button from "./button";

const meta: Meta = {
  component: Button,
  args: { children: "Click me" },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};
