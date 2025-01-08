import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { CardWrapperAuthFooter } from "@/components/page/auth/card-wrapper-auth/footer"
import { CardWrapperAuthHeader } from "@/components/page/auth/card-wrapper-auth/header"

export const CardWrapperAuth = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <Card className="w-full max-w-md border-none">
      <CardHeader>
        <CardWrapperAuthHeader />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <CardWrapperAuthFooter />
      </CardFooter>
    </Card>
  )
}
