import CompanyItem from "../components/page-content/companiesOutput/CompanyItem"
import { withReactContext } from 'storybook-react-context';
import DateContext from "../store/DateContext";

export default {
    title: "Company Item",
    decorators: [withReactContext({
        Context: DateContext,
        initialState: {startDateState: 1657102342000, endDateState: 1657447942000}
      }),],
    parameters: {
        docs: {
          description: {
            component: 'CompanyItems purpose is to render tile with company information: name, currency, country, weburl',
          },
        },
      },
    component: CompanyItem,
    argTypes: {
        companyData: {
          description: 'Company data is an object which consists of company name, country, currency and url',
          control: {
            type: 'object',
          },
        },
      },
}

const Template = (args) => <CompanyItem {...args}/>

export const SimpleCompanyItem = Template.bind({})

SimpleCompanyItem.args = {
    companyData: {
        name: "Apple Inc",
        country: "US",
        currency: "USD",
        weburl: "https://www.apple.com/",
        ticker: "AAPL"
    },  
}