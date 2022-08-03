import { primary500, secondary700, secondary400 } from "../../../constants/Colors";
import { opacity } from "../../../constants/Constants";

export const SearchStyle = {
  formWrapper: {
    display: "flex",
    flexShrink: 1,
    flexGrow: 1,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    opacity: opacity
  },
  fieldWrapper: {
    display: "flex",
    flexDirection: "column",
    background: `linear-gradient(120deg,  ${secondary700}, ${secondary400})`,
    boxShadow: "rgb(0, 0, 0) 0px 20px 30px -10px",
    borderColor: "white",
    borderRadius: 4
  },
  dateWrapper: { flexDirection: "row", display: "flex" },
  datepickerStyle:{
    display: "flex", flexGrow: 1
  },
  buttonStyle: {
    m: 1,
    display: "flex",
    flexGrow: 1,
    backgroundColor: primary500,
    "&:hover": {
      backgroundColor: primary500,
    },
    border: 2,
    borderColor: "white",
  },
  searchPageWrapper:{
    display: "flex",
    flex: 1,
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }
};
