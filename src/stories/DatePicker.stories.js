import Datepicker from "../components/page-content/datepicker/Datepicker"


export default {
    title: "Datepicker",
    parameters: {
        docs: {
          description: {
            component: 'Components purpose is to render start and end date datepickers (use dark background)',
          },
        },
      },
    component: Datepicker,
    argTypes: {
        style: {
          description: 'Date picker custom style prop',
          control: {
            type: 'object',
          },
        },
        label: {
            description: 'Date picker label',
        control: {
            type: 'string',
          },
        },
        maxDate: {
            description: 'Date picker maximum date',
        control: {
            type: 'string',
          },
        },
        minDate: {
            description: 'Date picker minimum date',
        control: {
            type: 'string',
          },
        },
        errorLabel: {
            description: 'Date picker error label',
        control: {
            type: 'string',
          },
        },
        date: {
            description: 'Date picker current date',
        control: {
            type: 'string',
          },
        },
       
    } 
}


const Template = (args) => <Datepicker {...args}/>

export const SimpleDatePicker = Template.bind({})

SimpleDatePicker.args = {
    maxDate: new Date("2023-01-01"),
    minDate: new Date("1970-01-01"),
    onDatePicked: () => {console.log('date set')},
    date: new Date(),
    label: "Start Date",
    style: {display: "flex",
    flexGrow: 1},
    errorLabel: ""
}

export const Error = Template.bind({})

Error.args = {
    maxDate: new Date("2023-01-01"),
    minDate: new Date("1970-01-01"),
    onDatePicked: () => {console.log('date set')},
    date: new Date(),
    label: "Start Date",
    style: {display: "flex",
    flexGrow: 1},
    errorLabel: "Error"
}
  