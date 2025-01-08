import Link from "next/link"

import { siteConfig } from "@/constants"

import { DesktopNavbarHeader } from "@/components/misc/header/desktop-navbar-header"

export const SiteHeader = () => {
  return (
    <header className="bg-background/80 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
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
        </div>
      </div>
    </header>
  )
}
