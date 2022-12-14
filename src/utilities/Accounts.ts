export type Account = {
  name: string;
  username: string;
  status: string;
  social: string;
  additionalHover: boolean;
};

//Setting additional hover to true will show the tooltip in front of the account
export const Accounts: Account[] = [
  {
    name: "Rella Content",
    username: "@rellasocial | Business",
    status: "unlinked",
    social: "Instagram",
    additionalHover: false
  },
  {
    name: "Nathacha Bomparte",
    username: "rellasocial",
    status: "unlinked",
    social: "Facebook",
    additionalHover: false
  },
  {
    name: "Rella Content",
    username: "rellasocial",
    status: "unlinked",
    social: "Tiktok",
    additionalHover: false
  },
  {
    name: "Rella Content",
    username: "rellasocial",
    status: "linked",
    social: "Youtube",
    additionalHover: true
  },
  {
    name: "Rella Content",
    username: "rellasocial",
    status: "expired",
    social: "Linkedin",
    additionalHover: false
  },
  {
    name: "Rella Content",
    username: "rellasocial",
    status: "expired",
    social: "Pinterest",
    additionalHover: false
  }
];
