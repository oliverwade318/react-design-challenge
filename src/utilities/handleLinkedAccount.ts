import { Account } from "utilities/Accounts";
import { showToastMessage } from "utilities/handleConnectAccount";

export const handleRemoveAccount = (
  account: Account,
  accountsState: any,
  setAccountsState: any
) => {
  showToastMessage(true, "Account Removed Successfully");
  const accountsStateClone = [...accountsState];
  for (let i = 0; i < accountsState.length; i++) {
    const currAccount: Account = accountsState[i];
    if (currAccount.social === account.social) {
      currAccount.status = "unlinked";
      break;
    }
  }
  setAccountsState(accountsStateClone);
};

export const handleRelinkAccount = (
  account: Account,
  accountsState: any,
  setAccountsState: any
) => {
  if (account.status === "linked") {
    showToastMessage(false, "Account already Linked");
    return;
  }
  showToastMessage(true, "Account Relinked Successfully");
  const accountsStateClone = [...accountsState];
  for (let i = 0; i < accountsState.length; i++) {
    const currAccount: Account = accountsState[i];
    if (currAccount.social === account.social) {
      currAccount.status = "linked";
      break;
    }
  }
  setAccountsState(accountsStateClone);
};
