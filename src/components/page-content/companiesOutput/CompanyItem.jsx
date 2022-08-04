import React from "react";
import { Box } from "@mui/system";
import { Payments, Flag, Link as URL } from "@mui/icons-material";
import Lottie from "lottie-react";
import Company from "../../../assets/lottie/company.json";
import { CompanyItemStyle } from "./CompanyItemStyle";
import CustomModal from "../modal/CustomModal";
import CandleStickChart from "../chart/CandleStickChart";
import useWindowDimensions from "../../../hooks/WindowDimensions";
import {
  lgWidthBreakpoint,
} from "../../../constants/Constants";
import CompanyItemBody from "./CompanyItemBody";

function CompanyItem({ companyData }) {
  const { width, height } = useWindowDimensions();

  return (
    <Box sx={CompanyItemStyle.itemStyle}>
      <CustomModal
        buttonName={companyData.name}
        buttonStyle={CompanyItemStyle.companyNameStyle}
      >
        <CandleStickChart
          companySymbol={companyData.ticker}
          companyName={companyData.name}
        />
      </CustomModal>
      <Box sx={CompanyItemStyle.itemWrapperStyle}>
        <Box sx={CompanyItemStyle.companyInformationWrapperStyle}>
          <CompanyItemBody
            company={[
              {
                name: "Currency",
                value: companyData.currency,
                icon: <Payments sx={CompanyItemStyle.iconStyle} />,
              },
              {
                name: "Country",
                value: companyData.country,
                icon: <Flag sx={CompanyItemStyle.iconStyle} />,
              },
              {
                name: "WebUrl",
                value: companyData.weburl,
                icon: <URL sx={CompanyItemStyle.iconStyle} />,
              },
            ]}
          />
        </Box>
        {width > lgWidthBreakpoint && (
          <Lottie
            style={CompanyItemStyle.lottieAnimationStyle}
            animationData={Company}
            autoPlay={true}
            loop={true}
          />
        )}
      </Box>
    </Box>
  );
}

export default CompanyItem;
