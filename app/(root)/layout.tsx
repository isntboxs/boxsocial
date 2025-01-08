import { AppWrapperProvider } from "@/components/providers/app-wrapper-provider"

function HomeLayout({ children }: { children: React.ReactNode }) {
  return <AppWrapperProvider>{children}</AppWrapperProvider>
}
export default HomeLayout
