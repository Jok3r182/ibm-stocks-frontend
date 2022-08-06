import Background from "../components/page-content/background/Background";
import video from "../assets/video/background.mp4";

export default {
  title: "Background",
  parameters: {
    docs: {
      description: {
        component:
          "Backgrounds purpose is to render chosen background behind other components",
      },
    },
  },
  component: Background,
  argTypes: {
    source: {
      description:
        "Source is a background which Background component renders, should be named by one word",
      table: {
        type: {
          summary: "Detailed description",
          detail:
            'To use background component, first you have to set its source by importing it: "Import video from "./src""',
        },
      },
      control: {
        type: "file",
        accept: ".mp4",
      },
    },
  },
};

const Template = (args) => <Background {...args} />;

export const SimpleBackground = Template.bind({});

SimpleBackground.args = {
  source: video,
};
