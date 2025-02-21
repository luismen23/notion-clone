import React from "react"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

function Sidebar() {
  return (
    <div className='p-2 bg-gray-200 md:p-5'>
      <Button className='hidden md:inline'>New Document</Button>
      <Sheet>
        <SheetTrigger className='inline md:hidden'>
          <MenuIcon className='p-2 hover:opacity-30 rounded-lg' size={40} />
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default Sidebar
