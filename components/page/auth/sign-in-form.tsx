"use client"

import { useState } from "react"

import { Loader } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"

import { signIn } from "@/lib/auth/client"
import { Button } from "@/components/ui/button"
import { CardWrapperAuth } from "@/components/page/auth/card-wrapper-auth"

export const SignInForm = () => {
  const [loading, setLoading] = useState<"github" | "google" | null>(null)

  const handleSignIn = async (provider: "github" | "google") => {
    await signIn.social(
      {
        provider,
        callbackURL: "/",
      },
      {
        onRequest: () => {
          setLoading(provider)
        },
        onResponse: () => {
          setLoading(null)
        },
        onError: (ctx) => {
          setLoading(null)
          console.error(ctx.error)
        },
      },
    )
  }

  return (
    <CardWrapperAuth>
      <div className="w-full space-y-4">
        <div className="space-y-2">
          <Button
            variant="default"
            size="default"
            type="button"
            className="w-full"
            onClick={() => handleSignIn("github")}
            disabled={loading === "github"}
          >
            {loading === "github" ? (
              <>
                <Loader className="h-4 w-4 animate-spin" />
                <span>Sign in with Github</span>
              </>
            ) : (
              <>
                <FaGithub className="h-4 w-4" />
                <span>Sign in with Github</span>
              </>
            )}
          </Button>
          <Button
            variant="default"
            size="default"
            type="button"
            className="w-full"
            onClick={() => handleSignIn("google")}
            disabled={loading === "google"}
          >
            {loading === "google" ? (
              <>
                <Loader className="h-4 w-4 animate-spin" />
                <span>Sign in with Google</span>
              </>
            ) : (
              <>
                <FcGoogle className="h-4 w-4" />
                <span>Sign in with Google</span>
              </>
            )}
          </Button>
        </div>
      </div>
    </CardWrapperAuth>
  )
}
