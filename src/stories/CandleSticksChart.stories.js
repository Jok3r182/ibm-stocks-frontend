import CandleStickChart from "../components/page-content/chart/CandleStickChart";
import { withReactContext } from "storybook-react-context";
import DateContext from "../store/DateContext";

export default {
  title: "Candle Stick Chart",
  component: CandleStickChart,
  decorators: [
    withReactContext({
      Context: DateContext,
      initialState: {
        startDateState: 1657102342000,
        endDateState: 1657447942000,
      },
    }),
  ],
  parameters: {
    docs: {
      description: {
        component:
          "CandleStickCharts purpose is to render a chart diagram when user clicks it and fetch data from an API point",
      },
    },
  },
  argTypes: {
    companySymbol: {
      description:
        "A string, which represents company ticker symbol for Stocks e.g. AAPL",
      control: {
        type: "text",
      },
    },
    companyName: {
      description: "A string, which represents company name e.g. Apple Inc",
      control: {
        type: "text",
      },
    },
  },
};

const Template = (args) => <CandleStickChart {...args} />;

export const SimpleCandleStickChart = Template.bind({});

SimpleCandleStickChart.args = {
  companyName: "Apple Inc",
  companySymbol: "AAPL",
};
