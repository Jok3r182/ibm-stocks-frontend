import { secondary600, secondary700 } from "../../../constants/Colors";

export const CompanyItemStyle = {
  itemStyle: {
    background: `linear-gradient(120deg,  ${secondary700}, ${secondary600})`,
    border: 3,
    borderRadius: 4,
    minWidth: "30%",
    maxWidth: "30%",
    justifyContent: "center",
    alignItems: "center",
    flex: "1",
    flexGrow: "1",
    flexDirection: "column",
    m: 1,
    p: 1,
    display: "flex",
    boxShadow: "rgb(0, 0, 0) 0px 20px 30px -10px",
    borderColor: "white",
  },
  iconStyle: { color: "white", mr: 1, my: 0.5, mx: 2 },
  itemWrapperStyle: { display: "flex", alignItems: "center", width: "100%" },
  companyInformationWrapperStyle: { display: "flex", flexDirection: "column", width: "100%" },
  companyNameStyle:{color: "white", fontSize: 18, m: 0.5},
  lottieAnimationStyle:{ width: 200, height: 200 }
};
