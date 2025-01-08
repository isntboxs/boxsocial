import { NextRequest } from "next/server"

import { auth } from "@/auth"
import { toNextJsHandler } from "better-auth/next-js"

export const { GET } = toNextJsHandler(auth)

export const POST = async (req: NextRequest) => {
  const res = await auth.handler(req)
  return res
}
