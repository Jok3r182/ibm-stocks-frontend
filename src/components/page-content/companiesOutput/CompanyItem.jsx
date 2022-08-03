import React from "react";
import { Box } from "@mui/system";
import { Payments, Flag, Link as URL } from "@mui/icons-material";
import IconField from "../input/IconField";
import Lottie from "lottie-react";
import Company from "../../../assets/lottie/company.json";
import { CompanyItemStyle } from "./CompanyItemStyle";
import CustomModal from "../modal/CustomModal";
import CandleStickChart from "../chart/CandleStickChart";
import useWindowDimensions from "../../../hooks/WindowDimensions";
import {
  lgWidthBreakpoint,
  mdWidthBreakpoint,
} from "../../../constants/Constants";

function CompanyItem({companyData }) {
  const { width, height } = useWindowDimensions();

  return (
    <Box sx={CompanyItemStyle.itemStyle}>
      <CustomModal
        buttonName={companyData.name}
        buttonStyle={CompanyItemStyle.companyNameStyle}
      >
        <CandleStickChart companySymbol={companyData.ticker} companyName={companyData.name} />
      </CustomModal>
      <Box sx={CompanyItemStyle.itemWrapperStyle}>
        <Box sx={CompanyItemStyle.companyInformationWrapperStyle}>
          <IconField
            label={
              width > mdWidthBreakpoint
                ? `Currency:\t${companyData.currency}`
                : companyData.currency
            }
          >
            <Payments sx={CompanyItemStyle.iconStyle} />
          </IconField>
          <IconField
            label={
              width > mdWidthBreakpoint
                ? `Country:\t${companyData.country}`
                : companyData.country
            }
          >
            <Flag sx={CompanyItemStyle.iconStyle} />
          </IconField>
          <IconField
            label={
              width > mdWidthBreakpoint ? `WebUrl: ${companyData.weburl}` : companyData.weburl
            }
          >
            <URL sx={CompanyItemStyle.iconStyle} />
          </IconField>
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
