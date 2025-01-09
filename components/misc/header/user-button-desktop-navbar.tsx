"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { signOut } from "@/lib/auth/client"
import { Session } from "@/lib/auth/types"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface UserButtonDesktopNavbarProps {
  session: Session | null
}

export const UserButtonDesktopNavbar = (
  props: UserButtonDesktopNavbarProps,
) => {
  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter()

  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onRequest: () => {
          setLoading(true)
        },
        onResponse: () => {
          setLoading(false)
        },
        onSuccess: () => {
          setLoading(false)
          router.push("/")
          router.refresh()
        },
        onError: (ctx) => {
          setLoading(false)
          console.error(ctx.error)
        },
      },
    })
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            type="button"
            className="relative size-8 rounded-full"
          >
            <Avatar>
              <AvatarImage
                src={props.session?.user?.image ?? ""}
                alt={props.session?.user?.name}
              />
              <AvatarFallback>
                {props.session?.user?.name?.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-3 w-56" align="end">
          <DropdownMenuLabel>
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {props.session?.user?.name}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {props.session?.user?.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              Profile
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Settings
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleSignOut} disabled={loading}>
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
