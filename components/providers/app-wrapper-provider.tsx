import { SiteHeader } from "@/components/misc/header"

export const AppWrapperProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <SiteHeader />
      <main className="py-8">
        {/* container to center content */}
        <div className="container max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="hidden lg:col-span-3 lg:block">sidebar</div>
            <div className="lg:col-span-9">{children}</div>
          </div>
        </div>
      </main>
    </div>
  )
}
