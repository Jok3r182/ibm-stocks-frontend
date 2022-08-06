import Search from "../components/page-content/forms/Search";
import { withReactContext } from "storybook-react-context";
import DateContext from "../store/DateContext";

export default {
  title: "Search",
  decorators: [
    withReactContext({
      Context: DateContext,
      initialState: {
        startDateState: 1651102342000,
        endDateState: 1657447942000,
        setEndDate: () => console.log("end date set"),
        setStartDate: () => console.log("start date set"),
      },
    }),
  ],
  parameters: {
    docs: {
      description: {
        component:
          "Search purpose is to render a search form with date pickers and input field for a user",
      },
    },
  },
  component: Search,
  argTypes: {
    companies: {
      description: "An array of companies",
      control: {
        type: "",
      },
    },
    setCompanies: {
      description: "A useState method to setCompanies when search is pressed",
    },
  },
};

const Template = (args) => {
  return <Search {...args} />;
};

export const SimpleSearch = Template.bind({});

SimpleSearch.args = {
  companies: [],
  setCompanies: (company) => {
    console.log("Company added");
  },
};
