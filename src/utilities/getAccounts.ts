import { Account } from "utilities/Accounts";

export const getLinkedAccounts = (accountsState: Account[]) => {
  return accountsState.filter(
    (account: Account) =>
      account.status === "linked" || account.status === "expired"
  );
};

export const getUnLinkedAccounts = (accountsState: Account[]) => {
  return accountsState.filter(
    (account: Account) => account.status === "unlinked"
  );
};
