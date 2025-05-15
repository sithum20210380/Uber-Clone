"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Car, Clock, DollarSign } from "lucide-react"
import { useRouter } from "next/navigation"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { SimpleMap } from "@/components/simple-map"

export default function RidePage() {
  const router = useRouter()
  const [pickup, setPickup] = useState("")
  const [destination, setDestination] = useState("")
  const [isMapLoaded, setIsMapLoaded] = useState(false)
  const [rideType, setRideType] = useState("standard")
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null)
  const [destinationLocation, setDestinationLocation] = useState<{ lat: number; lng: number } | null>(null)
  const [fare, setFare] = useState({ min: 18, max: 22 })
  const [eta, setEta] = useState("5 min")

  // Get user's location on page load
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }
          setUserLocation(location)

          // Simulate reverse geocoding (in a real app, use a geocoding service)
          setPickup("Current Location")
          setIsMapLoaded(true)

          // Simulate a destination (in a real app, this would be user input)
          setTimeout(() => {
            setDestinationLocation({
              lat: location.lat + 0.01,
              lng: location.lng + 0.01,
            })
          }, 1000)
        },
        (error) => {
          console.error("Error getting location:", error)
          setIsMapLoaded(true)

          // Set default location for demo purposes
          setUserLocation({
            lat: 37.7749,
            lng: -122.4194,
          })
          setPickup("San Francisco")
        },
      )
    } else {
      setIsMapLoaded(true)

      // Set default location for demo purposes
      setUserLocation({
        lat: 37.7749,
        lng: -122.4194,
      })
      setPickup("San Francisco")
    }
  }, [])

  // Update fare based on ride type
  useEffect(() => {
    switch (rideType) {
      case "economy":
        setFare({ min: 12, max: 15 })
        setEta("10 min")
        break
      case "standard":
        setFare({ min: 18, max: 22 })
        setEta("5 min")
        break
      case "premium":
        setFare({ min: 25, max: 30 })
        setEta("8 min")
        break
    }
  }, [rideType])

  // Simulate geocoding for destination input
  const handleDestinationChange = (value: string) => {
    setDestination(value)

    if (value && userLocation) {
      // In a real app, use a geocoding service
      // For demo, just offset the user location
      setDestinationLocation({
        lat: userLocation.lat + 0.01,
        lng: userLocation.lng + 0.01,
      })
    } else {
      setDestinationLocation(null)
    }
  }

  const handleBookRide = () => {
    if (pickup && destination) {
      // In a real app, we would send this data to the backend
      router.push("/ride/payment")
    }
  }

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <div className="flex flex-col lg:flex-row h-full">
        {/* Map Section */}
        <div className="w-full lg:w-2/3 h-[300px] lg:h-auto relative bg-gray-200 dark:bg-gray-800">
          {!isMapLoaded ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : (
            <SimpleMap
              userLocation={userLocation}
              destination={destinationLocation}
              onLocationChange={(location) => {
                setUserLocation(location)
                setPickup("Current Location")
              }}
            />
          )}
        </div>

        {/* Booking Section */}
        <div className="w-full lg:w-1/3 p-4 lg:p-6 bg-background">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Book a Ride</CardTitle>
              <CardDescription>Enter your pickup and destination</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="relative">
                  <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Pickup location"
                    className="pl-9"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Destination"
                    className="pl-9"
                    value={destination}
                    onChange={(e) => handleDestinationChange(e.target.value)}
                  />
                </div>
              </div>

              <Separator />

              <Tabs defaultValue="now" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="now">Ride now</TabsTrigger>
                  <TabsTrigger value="schedule">Schedule</TabsTrigger>
                </TabsList>
                <TabsContent value="now" className="space-y-4">
                  <div className="pt-2">
                    <h3 className="font-medium mb-2">Choose a ride type</h3>
                    <RadioGroup defaultValue="standard" className="space-y-3" onValueChange={setRideType}>
                      <div
                        className={`flex items-center justify-between space-x-2 rounded-md border p-4 ${rideType === "economy" ? "border-primary" : ""}`}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="economy" id="economy" />
                          <Label htmlFor="economy" className="flex items-center gap-2">
                            <Car className="h-4 w-4" />
                            <div>
                              <p className="font-medium">Economy</p>
                              <p className="text-sm text-muted-foreground">Affordable, everyday rides</p>
                            </div>
                          </Label>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">
                            ${fare.min}-{fare.max}
                          </p>
                          <p className="text-sm text-muted-foreground">{eta}</p>
                        </div>
                      </div>

                      <div
                        className={`flex items-center justify-between space-x-2 rounded-md border p-4 ${rideType === "standard" ? "border-primary" : ""}`}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="standard" id="standard" />
                          <Label htmlFor="standard" className="flex items-center gap-2">
                            <Car className="h-4 w-4" />
                            <div>
                              <p className="font-medium">Standard</p>
                              <p className="text-sm text-muted-foreground">Comfortable rides, more space</p>
                            </div>
                          </Label>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">
                            ${fare.min}-{fare.max}
                          </p>
                          <p className="text-sm text-muted-foreground">{eta}</p>
                        </div>
                      </div>

                      <div
                        className={`flex items-center justify-between space-x-2 rounded-md border p-4 ${rideType === "premium" ? "border-primary" : ""}`}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="premium" id="premium" />
                          <Label htmlFor="premium" className="flex items-center gap-2">
                            <Car className="h-4 w-4" />
                            <div>
                              <p className="font-medium">Premium</p>
                              <p className="text-sm text-muted-foreground">High-end cars with top drivers</p>
                            </div>
                          </Label>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">
                            ${fare.min}-{fare.max}
                          </p>
                          <p className="text-sm text-muted-foreground">{eta}</p>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>
                </TabsContent>
                <TabsContent value="schedule" className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="date">Date</Label>
                    <Input type="date" id="date" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="time">Time</Label>
                    <Input type="time" id="time" />
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="flex items-center justify-between w-full text-sm">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>Estimated arrival: {eta}</span>
                </div>
                <div className="flex items-center gap-1">
                  <DollarSign className="h-4 w-4" />
                  <span>
                    Estimated fare: ${fare.min}-{fare.max}
                  </span>
                </div>
              </div>
              <Button className="w-full" size="lg" onClick={handleBookRide} disabled={!pickup || !destination}>
                Book Ride
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
