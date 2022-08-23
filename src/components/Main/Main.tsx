import { useEffect, useState } from "react";

import { Box } from "@mui/material";

import LinkedAccount from "components/LinkedAccount/LinkedAccount";
import { useStyles } from "components/Main/Main.styles";
import { Accounts } from "utilities/Accounts";

import UnLinkedAccount from "components/UnlinkedAccount/UnLinkedAccount";
import { getLinkedAccounts, getUnLinkedAccounts } from "utilities/getAccounts";

const Main = () => {
  const classes = useStyles();
  const [accountsState, setAccountsState] = useState(Accounts);

  useEffect(() => {}, [accountsState]);

  return (
    <Box className={classes.container}>
      <Box>
        <LinkedAccount
          accounts={getLinkedAccounts(accountsState)}
          setAccountsState={setAccountsState}
          accountsState={accountsState}
        />
        <UnLinkedAccount
          accounts={getUnLinkedAccounts(accountsState)}
          setAccountsState={setAccountsState}
          accountsState={accountsState}
        />
      </Box>
    </Box>
  );
};

export default Main;
