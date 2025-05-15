import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Calendar } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function HistoryPage() {
  const rides = [
    {
      id: 1,
      date: "Today, 2:30 PM",
      pickup: "123 Main St, San Francisco, CA",
      destination: "456 Market St, San Francisco, CA",
      driver: "James Wilson",
      driverRating: 4.92,
      amount: "$18.75",
      status: "Completed",
    },
    {
      id: 2,
      date: "Yesterday, 9:15 AM",
      pickup: "789 Howard St, San Francisco, CA",
      destination: "101 California St, San Francisco, CA",
      driver: "Sarah Johnson",
      driverRating: 4.85,
      amount: "$12.50",
      status: "Completed",
    },
    {
      id: 3,
      date: "May 10, 2024, 6:45 PM",
      pickup: "Union Square, San Francisco, CA",
      destination: "Fisherman's Wharf, San Francisco, CA",
      driver: "Michael Brown",
      driverRating: 4.78,
      amount: "$22.30",
      status: "Completed",
    },
    {
      id: 4,
      date: "May 5, 2024, 11:20 AM",
      pickup: "Golden Gate Park, San Francisco, CA",
      destination: "SFO Airport, San Francisco, CA",
      driver: "Emily Davis",
      driverRating: 4.95,
      amount: "$35.60",
      status: "Completed",
    },
  ]

  return (
    <div className="container py-8 px-4 max-w-3xl mx-auto">
      <div className="flex flex-col space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Ride History</h1>
          <p className="text-muted-foreground">View your past rides and receipts</p>
        </div>

        <div className="grid gap-4">
          {rides.map((ride) => (
            <Link href={`/history/${ride.id}`} key={ride.id} className="block">
              <Card className="hover:bg-muted/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{ride.date}</span>
                      </div>
                      <h3 className="font-medium">{ride.status}</h3>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{ride.amount}</p>
                      <p className="text-sm text-muted-foreground">Visa •••• 4242</p>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Pickup</p>
                        <p className="text-sm text-muted-foreground">{ride.pickup}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        <div className="h-2 w-2 rounded-full bg-destructive"></div>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Destination</p>
                        <p className="text-sm text-muted-foreground">{ride.destination}</p>
                      </div>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <div className="flex items-center space-x-4">
                    <Avatar className="h-10 w-10 border">
                      <AvatarImage src="/placeholder-user.jpg" alt="Driver" />
                      <AvatarFallback>
                        {ride.driver
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{ride.driver}</p>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                        <span>{ride.driverRating}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
