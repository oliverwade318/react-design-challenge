import { useStyles } from "components/UnlinkedAccounts/UnlinkedAccounts.styles";

import Box from "@mui/material/Box";
import { Button } from "@mui/material";

import { handleConnectAccount } from "utilities/handleConnectAccount";
import { UnLinkedAccountType } from "components/UnlinkedAccounts/UnlinkedAccounts.types";

const UnLinkedAccounts = ({
  account,
  setAccountsState,
  accountsState,
  loading,
  setLoading,
}: UnLinkedAccountType) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Button
        disabled={loading}
        sx={{
          color: "#414141",
          fontWeight: "bold",
          border: "2px solid #414141",
          borderRadius: 2,
          textTransform: "capitalize",
          width: "250px",
          fontSize: 15,
          marginBottom: 3,
          "&:hover": { border: "2px solid #414141" },
        }}
        onClick={() =>
          handleConnectAccount(
            account,
            accountsState,
            setAccountsState,
            setLoading
          )
        }
        variant={"outlined"}
      >
        Connect to {account.social}
      </Button>
    </Box>
  );
};

export default UnLinkedAccounts;
