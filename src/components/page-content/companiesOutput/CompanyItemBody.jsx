import React from "react";
import useWindowDimensions from "../../../hooks/WindowDimensions";
import IconField from "../input/IconField";
import { mdWidthBreakpoint } from "../../../constants/Constants";

function CompanyItemBody({ company }) {
  const { height, width } = useWindowDimensions();

  return (
    <>
      {company.map((companyData) => (
        <IconField
          key={companyData.name}
          label={
            width > mdWidthBreakpoint
              ? `${companyData.name}:\t${companyData.value}`
              : companyData.value
          }
        >
          {companyData.icon}
        </IconField>
      ))}
    </>
  );
}

export default CompanyItemBody;
