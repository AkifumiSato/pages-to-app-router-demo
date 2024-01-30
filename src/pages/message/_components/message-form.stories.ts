import type { Meta, StoryObj } from "@storybook/react";

import { MessageForm } from "./message-form";

const meta = {
  title: "components/MessageForm",
  component: MessageForm,
} satisfies Meta<typeof MessageForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
