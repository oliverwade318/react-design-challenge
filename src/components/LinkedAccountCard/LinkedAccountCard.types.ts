import { Account } from "utilities/Accounts";

export type LinkedAccountCardType = {
  account: Account;
  isLastItem: boolean;
  accountsState: any;
  setAccountsState: any;
};
