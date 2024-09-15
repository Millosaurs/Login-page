import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiHome, FiBriefcase, FiInfo, FiMail, FiUser, FiSettings, FiMenu, FiTruck } from 'react-icons/fi'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const navItems = [
  { name: 'Home', href: '/', icon: FiHome },
  { name: 'Freelancers', href: '/freelancers', icon: FiBriefcase },
  { name: 'Market', href: '/market', icon: FiTruck },
  
  { name: 'About', href: '/about', icon: FiInfo },
  { name: 'Contact', href: '/contact', icon: FiMail },
]

const actionItems = [
  { name: 'Profile', icon: FiUser },
  { name: 'Settings', icon: FiSettings },
]

export default function DockNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <TooltipProvider>
      <nav className="fixed left-0 top-0 h-screen z-50 bg-transparent text-white font-mono flex flex-col items-center justify-between py-32 w-20 transition-all duration-300 ease-in-out hover:w-24">
      <Avatar>
  <AvatarImage src="" />
  <AvatarFallback>M1</AvatarFallback>
</Avatar>

        <div className="flex flex-col items-center space-y-8 border-2 p-2 rounded-xl hover:bg-black/50 hover:border-3">
          {navItems.map((item) => (
            <Tooltip key={item.name}>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={`flex items-center p-2 rounded-md transition-colors hover:bg-white/20 ${
                    pathname === item.href ? 'bg-white/20' : ''
                  }`}
                >
                  <item.icon className="h-6 w-6" />
                  <span className="ml-4 hidden nav-text">{item.name}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>{item.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
        <div className="flex flex-col items-center space-y-8 border-2 p-4 rounded-xl hover:bg-black/50 hover:border-3">
          {actionItems.map((item) => (
            <Tooltip key={item.name}>
              <TooltipTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="text-white hover:text-white hover:bg-white/20 transition-all duration-300 ease-in-out group w-full flex justify-start"
                >
                  <item.icon className="h-6 w-6 group-hover:animate-pulse" />
                  <span className="ml-4 hidden nav-text">{item.name}</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>{item.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
        <div className="md:hidden mt-4">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <FiMenu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-black/90 backdrop-blur-md text-white border-white/20 w-64">
              <SheetHeader>
                <SheetTitle className="text-white">Menu</SheetTitle>
                <SheetDescription className="text-gray-400">
                  Navigate through our site
                </SheetDescription>
              </SheetHeader>
              <div className="mt-6 flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-white/20 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="mr-2 h-5 w-5" />
                    {item.name}
                  </Link>
                ))}
                {actionItems.map((item) => (
                  <Button
                    key={item.name}
                    variant="ghost"
                    size="sm"
                    className="text-white hover:text-white hover:bg-white/20 transition-all duration-300 ease-in-out justify-start"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="mr-2 h-5 w-5" />
                    {item.name}
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </TooltipProvider>
  )
}