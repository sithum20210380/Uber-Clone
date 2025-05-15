import Link from "next/link"
import { Car } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"
import { UserNav } from "@/components/user-nav"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Car className="h-6 w-6" />
          <span>RideNow</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm ml-6">
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
        <div className="flex items-center ml-auto gap-2">
          <MobileNav />
          <UserNav />
        </div>
      </div>
    </header>
  )
}
