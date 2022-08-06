import IconField from "../components/page-content/input/IconField"
import {Flag} from "@mui/icons-material" 

export default {
    title: "Icon Field",
    parameters: {
        docs: {
          description: {
            component: 'IconField purpose is to render one of the company data items e. g. name (p.s. use dark background)',
          },
        },
      },
    component: IconField,
    argTypes: {
        label: {
          description: 'A textfield input label',
        },
        children: {
            description: 'An icon rendered on the left side of the textfield',
          },
      },
}

const Template = (args) => <IconField {...args}/>

export const SimpleIconField = Template.bind({})

SimpleIconField.args = {
    label: "USD",
    children: <Flag sx={{ color: "white", mr: 1, my: 0.5, mx: 2 }}/>
}
  