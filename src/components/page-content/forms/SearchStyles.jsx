import { primary500 } from "../../../constants/Colors";

export const SearchStyle = {
  formWrapper: {
    display: "flex",
    flexShrink: 1,
    flexGrow: 1,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  fieldWrapper: {
    display: "flex",
    flexDirection: "column",
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
