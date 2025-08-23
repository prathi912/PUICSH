"use client";

import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";

export function MapComponent() {
  const position = { lat: 22.3705, lng: 73.0309 }; // Approx. location of Parul University

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <div style={{ height: "100%", width: "100%" }}>
        <Map
          defaultCenter={position}
          defaultZoom={14}
          mapId="healthcon-map"
          disableDefaultUI={true}
          gestureHandling="cooperative"
        >
          <AdvancedMarker position={position} title={"Parul University"} />
        </Map>
      </div>
    </APIProvider>
  );
}
