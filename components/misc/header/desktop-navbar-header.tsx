import { headers } from "next/headers"
import Link from "next/link"

import { auth } from "@/auth"
import { HomeIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ToggleThemeMode } from "@/components/misc/toggle-theme-mode"

import { UserButtonDesktopNavbar } from "./user-button-desktop-navbar"

export const DesktopNavbarHeader = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  return (
    <div className="hidden items-center space-x-4 md:flex">
      <ToggleThemeMode />

      <Button
        variant="ghost"
        size="default"
        type="button"
        className="flex items-center gap-2"
        asChild
      >
        <Link href="/">
          <HomeIcon className="h-4 w-4" />
          <span className="hidden lg:inline">Home</span>
        </Link>
      </Button>

      {session ? (
        <UserButtonDesktopNavbar
          session={JSON.parse(JSON.stringify(session))}
        />
      ) : (
        <Button
          variant="ghost"
          size="default"
          type="button"
          className="flex items-center gap-2"
          asChild
        >
          <Link href="/sign-in">
            <span className="hidden lg:inline">Sign In</span>
          </Link>
        </Button>
      )}
    </div>
  )
}
