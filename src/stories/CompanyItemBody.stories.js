import CompanyItemBody from "../components/page-content/companiesOutput/CompanyItemBody"
import {Flag, Link, Payments} from "@mui/icons-material" 

export default {
    title: "Company Item Body",
    parameters: {
        docs: {
          description: {
            component: 'CompanyItemBody purpose is to render every tile line except header (company name) with company information: currency, country, weburl (p.s. use dark background)',
          },
        },
      },
    component: CompanyItemBody,
    argTypes: {
        company: {
          description: 'Company is an array which consists of company data: name, country, currency and url',
          control: {
            type: 'object',
          },
        },
      },
}

const Template = (args) => <CompanyItemBody {...args}/>

export const SimpleCompanyItemBody = Template.bind({})

SimpleCompanyItemBody.args = {
    company:[
        {
          name: "Currency",
          value: "USD",
          icon: <Payments sx={{ color: "white", mr: 1, my: 0.5, mx: 2 }} />,
        },
        {
          name: "Country",
          value: "USA",
          icon: <Flag sx={{ color: "white", mr: 1, my: 0.5, mx: 2 }}/>,
        },
        {
            name: "WebUrl",
            value: "https://www.ibm.com/lt-en",
            icon: <Link sx={{ color: "white", mr: 1, my: 0.5, mx: 2 }} />,
          },
      ]
}