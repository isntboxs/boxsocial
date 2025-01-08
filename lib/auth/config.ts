import { APP_NAME } from "@/constants"
import { PrismaClient } from "@prisma/client"
import { BetterAuthOptions } from "better-auth"
import { prismaAdapter } from "better-auth/adapters/prisma"
import { nextCookies } from "better-auth/next-js"
import {
  admin,
  bearer,
  multiSession,
  oAuthProxy,
  oidcProvider,
  oneTap,
  openAPI,
  organization,
  twoFactor,
  username,
} from "better-auth/plugins"
import { passkey } from "better-auth/plugins/passkey"

import { env } from "@/env"

const prisma = new PrismaClient()

export const authConfig = {
  appName: APP_NAME,
  baseURL: env.BETTER_AUTH_URL,
  trustedOrigins: [env.NEXT_PUBLIC_APP_URL],
  logger: {
    disabled: env.NODE_ENV === "production",
    level: "debug",
  },
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ["google", "github"],
    },
  },
  session: {
    freshAge: 0,
    expiresIn: 60 * 60 * 24 * 3, // 3 days
    updateAge: 60 * 60 * 12, // 12 hours (every 12 hours the session expiration is updated)
    cookieCache: {
      enabled: true,
      maxAge: 60 * 5, // 5 minutes
    },
  },
  user: {
    changeEmail: {
      enabled: true,
    },
    deleteUser: {
      enabled: true,
    },
  },
  emailAndPassword: {
    enabled: true,
    // requireEmailVerification: true,
  },
  socialProviders: {
    github: {
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    },
    google: {
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    },
  },
  plugins: [
    bearer(),
    admin(),
    multiSession(),
    oneTap(),
    passkey(),
    twoFactor(),
    oAuthProxy(),
    oidcProvider({
      loginPage: "/sign-in",
    }),
    openAPI(),
    organization(),
    nextCookies(),
    username(),
    openAPI(),
  ],
  secret: env.BETTER_AUTH_SECRET,
} satisfies BetterAuthOptions
