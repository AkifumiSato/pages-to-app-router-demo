import type { Decorator, Preview } from "@storybook/react";
import { TrpcProvider } from "./trpc";
import { StoryFn } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators: Decorator[] = [
  (Story: StoryFn) => (
    <TrpcProvider>
      <Story />
    </TrpcProvider>
  ),
];

export default preview;
