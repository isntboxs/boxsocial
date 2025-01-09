import { headers } from "next/headers"
import Link from "next/link"

import { auth } from "@/auth"
import { BellIcon } from "lucide-react"

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

      {session ? (
        <>
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-2"
            asChild
          >
            <Link href="/notifications">
              <BellIcon className="h-4 w-4" />
              <span className="hidden lg:inline">Notifications</span>
            </Link>
          </Button>
          <UserButtonDesktopNavbar
            session={JSON.parse(JSON.stringify(session))}
          />
        </>
      ) : (
        <Button
          variant="default"
          size="sm"
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
