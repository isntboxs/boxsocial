import Link from "next/link"

import { HomeIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ToggleThemeMode } from "@/components/misc/toggle-theme-mode"

export const DesktopNavbarHeader = () => {
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
    </div>
  )
}
