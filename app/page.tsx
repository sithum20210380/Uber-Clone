import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Car, Clock, Shield, Star } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  Your ride, on demand
                </h1>
                <p className="max-w-[600px] text-gray-300 md:text-xl">
                  Request a ride and get picked up by a nearby driver. No waiting, no hassle.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/ride">
                  <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                    Book a Ride
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Sign Up to Drive
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto lg:ml-auto">
              <div className="aspect-video overflow-hidden rounded-xl bg-gray-900 p-2">
                <img
                  alt="Taxi service app interface"
                  className="mx-auto aspect-video overflow-hidden rounded-lg object-cover"
                  src="/placeholder.svg?height=500&width=800"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How it works</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Get a ride in minutes. Or become a driver and earn money on your schedule.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                <Car className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Request a ride</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Choose your pickup location and destination, then request a ride.
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Get picked up</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Your driver will arrive in minutes. You'll see their details and can track their arrival.
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                <Star className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Enjoy the ride</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Sit back and relax. Payment is automatic through the app when you reach your destination.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mx-auto lg:mr-auto">
              <div className="aspect-video overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-800 p-2">
                <img
                  alt="Safety features"
                  className="mx-auto aspect-video overflow-hidden rounded-lg object-cover"
                  src="/placeholder.svg?height=500&width=800"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Safety first</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                  Your safety is our priority. Every ride is tracked and all drivers are background checked.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Shield className="h-6 w-6 text-black dark:text-white" />
                  <div>
                    <h3 className="font-bold">Driver verification</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      All drivers undergo thorough background checks
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Shield className="h-6 w-6 text-black dark:text-white" />
                  <div>
                    <h3 className="font-bold">Trip tracking</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Share your trip details with trusted contacts
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Shield className="h-6 w-6 text-black dark:text-white" />
                  <div>
                    <h3 className="font-bold">24/7 support</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Help is always available when you need it
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
