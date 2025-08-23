"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapComponent } from "./map-component";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export function MapSection() {
  const [apiKeyExists, setApiKeyExists] = useState(false);

  useEffect(() => {
    // This check runs only on the client-side
    if (process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
      setApiKeyExists(true);
    }
  }, []);

  return (
    <section id="venue" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-8 font-headline">
          Venue & Location
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-primary">Conference Venue</h3>
                <p className="mt-2 text-muted-foreground">
                  Research and Development Cell,
                  <br />
                  Parul University,
                  <br />
                  P.O. Limda, Waghodia,
                  <br />
                  Vadodara, Gujarat, India - 391760
                </p>
                <h3 className="font-bold text-lg text-primary mt-6">Nearby Accommodations</h3>
                 <ul className="list-disc list-inside mt-2 text-muted-foreground">
                    <li>Hotel Grand Mercure</li>
                    <li>Welcomhotel by ITC Hotels</li>
                    <li>Sayaji Hotel Vadodara</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="md:col-span-2 h-96 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
            {apiKeyExists ? (
              <MapComponent />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-muted">
                <Alert>
                  <Terminal className="h-4 w-4" />
                  <AlertTitle>Map not available</AlertTitle>
                  <AlertDescription>
                    Please set the NEXT_PUBLIC_GOOGLE_MAPS_API_KEY environment variable to display the map.
                  </AlertDescription>
                </Alert>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
