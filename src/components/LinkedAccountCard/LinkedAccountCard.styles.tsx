import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  image: {
    height: 40,
    width: 40,
    marginTop: 5,
    borderRadius: 25,
    border: "4px solid #FEC200",
  },
  content: {
    display: "flex",
    flexDirection: "row",
  },
  namesBox: {
    display: "flex",
    flexDirection: "column",
    marginTop: 12,
  },
  LinkedStatus: {
    paddingLeft: "1.8vw",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 4,
    marginTop: 7,
  },
  line: {
    marginTop: "3vh",
    marginBottom: "3vh",
  },
});
