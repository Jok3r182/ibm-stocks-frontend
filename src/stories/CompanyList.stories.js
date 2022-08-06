import CompanyList from "../components/page-content/companiesOutput/CompanyList"
import { withReactContext } from 'storybook-react-context';
import DateContext from "../store/DateContext";

export default {
    title: "Company List",
    decorators: [withReactContext({
        Context: DateContext,
        initialState: {startDateState: "1657102342000", endDateState: "1657447942000"}
      }),],
    parameters: {
        docs: {
          description: {
            component: 'Components purpose is to render companyItems with company information',
          },
        },
      },
    component: "CompanyList",
    argTypes: {
        companies: {
          description: 'Companies is a list which consists of company items',
          control: {
            type: 'array',
          },
        },
      },
}


const Template = (args) => <CompanyList {...args}/>

export const SimpleCompanyList = Template.bind({})

SimpleCompanyList.args = 
{companies: [
    {
        "country": "US",
        "currency": "USD",
        "exchange": "NEW YORK STOCK EXCHANGE, INC.",
        "finnhubIndustry": "Metals & Mining",
        "ipo": "2016-10-18",
        "logo": "https://static.finnhub.io/logo/cb906bea98b72cc0424905ea893e9fe8175b6c48755c2a97e0d304bbadf62df5.png",
        "marketCapitalization": 8909.894934298016,
        "name": "Alcoa Corp",
        "phone": "14123152900.0",
        "shareOutstanding": 179.925,
        "ticker": "AA",
        "weburl": "https://www.alcoa.com/global/en/home.asp"
    },
    {
        "country": "US",
        "currency": "USD",
        "exchange": "NEW YORK STOCK EXCHANGE, INC.",
        "finnhubIndustry": "Financial Services",
        "ipo": "1988-04-15",
        "logo": "https://static.finnhub.io/logo/5f94f4ca-80eb-11ea-9076-00000000092a.png",
        "marketCapitalization": 4525.069585398936,
        "name": "AllianceBernstein Holding LP",
        "phone": "12129691000.0",
        "shareOutstanding": 102.889,
        "ticker": "AB",
        "weburl": ""
    }
]}
