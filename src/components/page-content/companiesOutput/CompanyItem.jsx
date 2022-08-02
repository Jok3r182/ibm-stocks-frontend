import React from "react";
import { Box } from "@mui/system";
import { Link } from "@mui/material";
import { Payments, Flag, Link as URL } from "@mui/icons-material";
import IconField from "../input/IconField";
import Lottie from "lottie-react";
import Company from "../../../assets/lottie/company.json";
import { CompanyItemStyle } from "./CompanyItemStyle";

function CompanyItem({ data }) {
  return (
    <Box sx={CompanyItemStyle.itemStyle}>
      <Link
        sx={CompanyItemStyle.companyNameStyle}
        color="inherit"
        href="/chart"
      >
        {data.name}
      </Link>
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
