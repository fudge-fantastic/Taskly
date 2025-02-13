import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

const SidebarItemsGroup1 = [
    {
      title: "Home",
      url: "/home",
      icon: Home,
    },
    {
      title: "Projects",
      url: "#",
      icon: Inbox,
    },
    {
      title: "TimeTracker",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Tasks",
      url: "#",
      icon: Search,
    },
    {
      title: "Goals",
      url: "#",
      icon: Settings,
    },
    {
      title: "Analysis",
      url: "#",
      icon: Settings,
    },
  ]

  const SidebarItemsGroup2 = [
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
    },
    {
      title: "Support",
      url: "/support",
      icon: Inbox,
    },
  ]

export {SidebarItemsGroup1,SidebarItemsGroup2}