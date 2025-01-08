import Link from "next/link"

import { Button } from "@/components/ui/button"

export const CardWrapperAuthFooter = () => {
  return (
    <div className="flex w-full items-center justify-center gap-2">
      <p className="text-sm text-muted-foreground">
        by signed in, you agree to our
      </p>
      <Button variant="link" size="sm" type="button" className="p-0" asChild>
        <Link href="#">Terms of Service</Link>
      </Button>
    </div>
  )
}
