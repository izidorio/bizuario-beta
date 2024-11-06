import { Outlet } from 'react-router-dom'

import { SidebarProvider, SidebarTrigger } from '@renderer/components/ui/sidebar'
import { AppSidebar } from '@renderer/components/app-sidebar'
import { ModeToggle } from '@renderer/components/mode-toggle'
import { AppBreadcrumb } from '../app-breadcrumb'
import { Separator } from '@renderer/components/ui/separator'

export function Default() {
  return (
    <div className="flex w-screen h-screen">
      <SidebarProvider>
        <AppSidebar />
        <main className="flex flex-col w-full">
          <header className="flex items-center justify-between p-1">
            <div className="flex items-center ">
              <SidebarTrigger />
              <Separator orientation="vertical" className="h-3 m-2 bg-muted-foreground" />
              <AppBreadcrumb />
            </div>
            <ModeToggle />
          </header>
          <Outlet />
        </main>
      </SidebarProvider>
    </div>
  )
}
