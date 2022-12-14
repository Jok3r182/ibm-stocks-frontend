import CustomModal from "../components/page-content/modal/CustomModal";

export default {
  title: "Custom Modal",
  parameters: {
    docs: {
      description: {
        component:
          "CustomModal purpose is to add button to a component, that will open a modal dialog",
      },
    },
  },
  component: CustomModal,
  argTypes: {
    buttonName: {
      description: "A name for a button",
      control: {
        type: "strin",
      },
    },
    buttonStyle: {
      description: "Button custom style (sx)",
      control: {
        type: "object",
      },
    },
    children: {
      description: "Component that will be rendered in a modal",
    },
  },
};

const Template = (args) => <CustomModal {...args} />;

export const SimpleModal = Template.bind({});

SimpleModal.args = {
  buttonName: "Open Modal",
  buttonStyle: { color: "black", fontSize: 20 },
  children: <h1 style={{ color: "white" }}>Hi this is a Simple Modal</h1>,
};
