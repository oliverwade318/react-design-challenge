import { useState } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { Account } from "utilities/Accounts";
import { useStyles } from "components/UnlinkedAccount/UnLinkedAccount.styles";
import UnLinkedAccounts from "components/UnlinkedAccounts/UnlinkedAccounts";
import { UnlinkedAccountType } from "components/UnlinkedAccount/UnlinkedAccount.types";

const UnLinkedAccount = ({
  accounts,
  setAccountsState,
  accountsState,
}: UnlinkedAccountType) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  return (
    <Box className={classes.container}>
      <Card sx={{ borderRadius: 4 }} className={classes.card}>
        <CardContent>
          <Typography
            sx={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}
            color="text.primary"
            gutterBottom
          >
            Unlinked Accounts
          </Typography>
          {accounts.map((account: Account, key: number) => (
            <UnLinkedAccounts
              account={account}
              key={key}
              setAccountsState={setAccountsState}
              accountsState={accountsState}
              loading={loading}
              setLoading={setLoading}
            />
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};

export default UnLinkedAccount;
