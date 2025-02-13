
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar"

import { ScrollArea } from "~/components/ui/scroll-area"
import { SidebarItemsGroup1,SidebarItemsGroup2 } from "~/shared/SidebarContent"
import { Link } from "@remix-run/react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { ChevronUp, User2 } from "lucide-react";

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="p-2">
      <SideBarHeader />
      <SidebarContent>
        <ScrollArea>
          <SideBarGroup />
        </ScrollArea>
      </SidebarContent>
      <SideBarFooter />
    </Sidebar>
  )
}

function SideBarHeader() {
  return (
    <SidebarHeader className="flex flex-row items-center gap-[7px] mx-1 mt-1">
      <div className="bg-zinc-400 p-[13px] rounded-md"></div>
      <h1 className="text-lg font-semibold">Taskly</h1>
    </SidebarHeader>
  )
}

function SideBarFooter() {
  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton>
                <User2 /> Username
                <ChevronUp className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="top"
              className="w-[--radix-popper-anchor-width]"
            >
              <DropdownMenuItem>
                <span>Account</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Billing</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Sign out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  )
}

function SideBarGroup() {
  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel className="text-sm text-zinc-900">Main Application</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {SidebarItemsGroup1.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link to={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarGroup className="mt-2">
        <SidebarGroupLabel className="text-sm text-zinc-900">Help & Support</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {SidebarItemsGroup2.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link to={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </>
  )
}