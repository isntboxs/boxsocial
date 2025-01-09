import Link from "next/link"

import { siteConfig } from "@/constants"

import { DesktopNavbarHeader } from "@/components/misc/header/desktop-navbar-header"
import { MobileNavbarHeader } from "@/components/misc/header/mobile-navbar-header"

export const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* logo */}
          <div className="flex items-center">
            <Link
              href={siteConfig.url}
              className="text-2xl font-bold tracking-tight"
            >
              {siteConfig.name}
            </Link>
          </div>

          {/* desktop navigation */}
          <DesktopNavbarHeader />

          {/* mobile navigation */}
          <MobileNavbarHeader />
        </div>
      </div>
    </header>
  )
}
