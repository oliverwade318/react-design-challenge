import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { Account } from "utilities/Accounts";
import LinkedAccountCard from "components/LinkedAccountCard/LinkedAccountCard";
import { useStyles } from "components/LinkedAccount/LinkedAccount.styles";
import { LinkedAccountType } from "components/LinkedAccount/LinkedAccount.types";

const LinkedAccount = ({
  accounts,
  setAccountsState,
  accountsState,
}: LinkedAccountType) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Card sx={{ borderRadius: 4 }} className={classes.card}>
        <CardContent>
          <Typography
            sx={{ fontSize: 16, fontWeight: "bold", textAlign: "center" }}
            color="text.primary"
            gutterBottom
          >
            Linked Accounts
          </Typography>
          {accounts.map((account: Account, key: number) => (
            <LinkedAccountCard
              account={account}
              isLastItem={key === accounts.length - 1}
              accountsState={accountsState}
              setAccountsState={setAccountsState}
              key={key}
            />
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};

export default LinkedAccount;
