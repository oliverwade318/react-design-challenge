import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InfoIcon from "@mui/icons-material/Info";
import { Button } from "@mui/material";
import { LightTooltip } from "../../utilities/LightTooltip";

import { LinkedAccountCardType } from "components/LinkedAccountCard/LinkedAccountCard.types";
import { useStyles } from "components/LinkedAccountCard/LinkedAccountCard.styles";
import {
  handleRelinkAccount,
  handleRemoveAccount,
} from "utilities/handleLinkedAccount";

const LinkedAccountCard = ({
  account,
  isLastItem,
  accountsState,
  setAccountsState,
}: LinkedAccountCardType) => {
  const classes = useStyles();

  return (
    <Box className={classes.cardContainer}>
      <Typography sx={{ fontWeight: "bold", fontSize: 17, color: "#414141" }}>
        {account.social}
      </Typography>
      <Box>
        <Box className={classes.content}>
          <img
            className={classes.image}
            src="assets/user.jpg"
            alt="dummy user"
          />
          <Box className={classes.namesBox}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: 17,
                color: "#414141",
                marginLeft: 1,
                flex: "auto",
              }}
            >
              {account.name}
            </Typography>
            <Typography
              sx={{
                flex: "auto",
                position: "relative",
                top: -2,
                fontSize: 14,
                color: "#414141",
                marginLeft: 0.9,
              }}
            >
              {account.username}
              {account.additionalHover === true && (
                <LightTooltip
                  title={
                    <React.Fragment>
                      <Typography color="inherit" sx={{ fontSize: 14 }}>
                        <span style={{ fontWeight: "bold" }}>Account:</span>{" "}
                        {account.social} creator <br />
                        <br />
                        <a href="#fa">Switch to a business account</a> to access
                        additional features.
                      </Typography>
                    </React.Fragment>
                  }
                  placement="top"
                  arrow
                >
                  <InfoIcon
                    sx={{
                      width: 15,
                      height: 15,
                      position: "relative",
                      top: 3,
                      left: 3,
                    }}
                  />
                </LightTooltip>
              )}
            </Typography>
            <Box className={classes.buttonContainer}>
              <Button
                sx={{
                  color: `${
                    account.status === "linked" ? "#414141" : "#FF4B68"
                  }`,
                  border: `2px solid ${
                    account.status === "linked" ? "#414141" : "#FF4B68"
                  }`,
                  borderRadius: 2,
                  fontWeight: "bold",
                  marginRight: "11px",
                  textTransform: "capitalize",
                  width: "100px",
                  fontSize: 15,
                  "&:hover": {
                    border: `2px solid ${
                      account.status === "linked" ? "#414141" : "#FF4B68"
                    }`,
                  },
                }}
                variant={"outlined"}
                onClick={() =>
                  handleRelinkAccount(account, accountsState, setAccountsState)
                }
              >
                Relink
              </Button>
              <Button
                sx={{
                  color: "#414141",
                  fontWeight: "bold",
                  border: "2px solid #414141",
                  borderRadius: 2,
                  textTransform: "capitalize",
                  width: "100px",
                  fontSize: 15,
                  "&:hover": { border: "2px solid #414141" },
                }}
                variant={"outlined"}
                onClick={() =>
                  handleRemoveAccount(account, accountsState, setAccountsState)
                }
              >
                Remove
              </Button>
            </Box>
          </Box>
          <Box className={classes.LinkedStatus}>
            <Typography
              sx={{
                marginTop: 1.5,
                fontWeight: "bold",
                fontSize: 17,
                position: "relative",
                alignSelf: "flex-end",
                color: `${account.status === "linked" ? "#414141" : "#FF4B68"}`,
                marginRight: 0,
              }}
            >
              {account.status === "linked" ? "Connected" : "Expired"}
            </Typography>
          </Box>
        </Box>
      </Box>
      {!isLastItem && <hr className={classes.line} />}
    </Box>
  );
};

export default LinkedAccountCard;
