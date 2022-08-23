import { toast } from "react-toastify";

import { apiCall } from "api/listenRequest";
import { Account } from "utilities/Accounts";

export const showToastMessage = (
  isSuccess: boolean | undefined | unknown,
  message: string
) => {
  toast.dismiss();
  if (isSuccess === true) {
    toast.success(message);
    return;
  }
  toast.error(message);
};

export const handleConnectAccount = async (
  account: Account,
  accountsState: any,
  setAccountsState: any,
  setLoading: any
) => {
  setLoading(true);

  const response = await apiCall();

  setLoading(false);
  if (response) {
    showToastMessage(response, "Account Connected Successfully");
    const accountsStateClone = [...accountsState];
    for (let i = 0; i < accountsState.length; i++) {
      const currAccount: Account = accountsState[i];
      if (currAccount.social === account.social) {
        currAccount.status = "linked";
        break;
      }
    }
    setAccountsState(accountsStateClone);
    return;
  }
  showToastMessage(response, "Error! Try again!");
};
