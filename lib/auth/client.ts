import {
  adminClient,
  genericOAuthClient,
  multiSessionClient,
  // oneTapClient,
  oidcClient,
  organizationClient,
  passkeyClient,
  twoFactorClient,
} from "better-auth/client/plugins"
import { createAuthClient } from "better-auth/react"

import { env } from "@/env"

export const authClient = createAuthClient({
  baseURL: env.NEXT_PUBLIC_APP_URL,
  plugins: [
    organizationClient(),
    passkeyClient(),
    twoFactorClient(),
    adminClient(),
    multiSessionClient(),
    // oneTapClient(),
    oidcClient(),
    genericOAuthClient(),
  ],
})

export const {
  signUp,
  signIn,
  signOut,
  useSession,
  organization,
  useListOrganizations,
  useActiveOrganization,
  updateUser,
  changePassword,
  changeEmail,
  deleteUser,
  revokeSession,
  getSession,
  resetPassword,
  sendVerificationEmail,
  linkSocial,
  forgetPassword,
  verifyEmail,
  listAccounts,
  listSessions,
  revokeOtherSessions,
  revokeSessions,
} = authClient
