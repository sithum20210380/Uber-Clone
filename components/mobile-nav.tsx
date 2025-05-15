import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col gap-6 pr-0">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <span>RideNow</span>
        </Link>
        <nav className="flex flex-col gap-4">
          <Link href="/ride" className="font-medium transition-colors hover:text-primary">
            Book a Ride
          </Link>
          <Link href="/history" className="font-medium transition-colors hover:text-primary">
            Ride History
          </Link>
          <Link href="/help" className="font-medium transition-colors hover:text-primary">
            Help
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
