import React from "react";
import { Box } from "@mui/system";
import { Payments, Flag, Link as URL } from "@mui/icons-material";
import IconField from "../input/IconField";
import Lottie from "lottie-react";
import Company from "../../../assets/lottie/company.json";
import { CompanyItemStyle } from "./CompanyItemStyle";
import CustomModal from "../modal/CustomModal";
import CandleStickChart from "../chart/CandleStickChart";

function CompanyItem({ data }) {

  return (
    <Box sx={CompanyItemStyle.itemStyle}>
      <CustomModal buttonName={data.name} buttonStyle={CompanyItemStyle.companyNameStyle}><CandleStickChart companySymbol={data.ticker} companyName={data.name}/></CustomModal>
      <Box sx={CompanyItemStyle.itemWrapperStyle}>
        <Box sx={CompanyItemStyle.companyInformationWrapperStyle}>
          <IconField label={`Currency:\t${data.currency}`}>
            <Payments sx={CompanyItemStyle.iconStyle} />
          </IconField>
          <IconField label={`Country:\t${data.country}`}>
            <Flag sx={CompanyItemStyle.iconStyle} />
          </IconField>
          <IconField label={`WebUrl: ${data.weburl}`}>
            <URL sx={CompanyItemStyle.iconStyle} />
          </IconField>
        </Box>
        <Lottie
          style={CompanyItemStyle.lottieAnimationStyle}
          animationData={Company}
          autoPlay={true}
          loop={true}
        />
      </Box>
    </Box>
  );
}

export default CompanyItem;
