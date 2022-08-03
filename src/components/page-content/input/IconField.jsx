import React from "react";
import { Box } from "@mui/system";
import { CustomTextFieldIcon } from "./CustomTextFieldIcon";
import { IconFieldStyle } from "./IconFieldStyle";
import useWindowDimensions from "../../../hooks/WindowDimensions";
import { smWidthBreakpoint } from "../../../constants/Constants";

function IconField({ label, children }) {
  const { height, width } = useWindowDimensions();
  return (
    <Box sx={IconFieldStyle.item}>
      {width > smWidthBreakpoint && children}
      <CustomTextFieldIcon
        sx={IconFieldStyle.field}
        disabled
        label={label}
        variant="standard"
      />
    </Box>
  );
}

export default IconField;
