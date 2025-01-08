import { env } from "@/env"

export const siteConfig = {
  name: "boxsocial",
  description: "boxsocial is a social media platform built with next.js",
  url: "/",
}

export const APP_NAME =
  env.NODE_ENV === "production"
    ? siteConfig.name
    : `${siteConfig.name} (${env.NODE_ENV})`
