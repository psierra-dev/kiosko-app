import React, { useCallback, useMemo, useState } from "react";
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";
import Pin from "./Pin";

import "mapbox-gl/dist/mapbox-gl.css";
const TOKEN =
  "pk.eyJ1IjoicGFibG9zNTciLCJhIjoiY2w1ZnUyaDl1MTNtMjNqbnRwcWRtaDY2cCJ9.yhPZqGTzceXkygvQ_DWDAw";

const MarkerDrag = ({
  initialLocation = { latitude: 26.222, longitude: 65.33232, type: "client" },
  handleLocation,
}: {
  initialLocation: LatLon;
  handleLocation: (lnglat: LatLon) => any;
}) => {
  const [marker, setMarker] = useState(initialLocation);

  const [events, logEvents] = useState({});

  const onMarkerDragStart = useCallback((event) => {
    logEvents((_events) => ({ ..._events, onDragStart: event.lngLat }));
  }, []);

  const onMarkerDrag = useCallback((event) => {
    logEvents((_events) => ({ ..._events, onDrag: event.lngLat }));
    setMarker({
      longitude: event.lngLat.lng,
      latitude: event.lngLat.lat,
    });
  }, []);

  const onMarkerDragEnd = useCallback((event) => {
    logEvents((_events) => ({ ..._events, onDragEnd: event.lngLat }));
    console.log("end", event.lngLat);
    handleLocation({ latitude: event.lngLat.lat, longitude: event.lngLat.lng });
  }, []);

  return (
    <>
      <Marker
        longitude={marker?.longitude}
        latitude={marker?.latitude}
        anchor="bottom"
        draggable
        onDragStart={onMarkerDragStart}
        onDrag={onMarkerDrag}
        onDragEnd={onMarkerDragEnd}
      >
        <Pin size={20} />
      </Marker>
    </>
  );
};

type LatLon = { latitude: number; longitude: number; type?: string };
interface Prop {
  locationMarket?: LatLon[];
  type: string;
  initialLocation?: LatLon;
  handleLocation?: (lnglat: LatLon) => any;
}
const MapBox = ({
  locationMarket,
  initialLocation,
  type,
  handleLocation,
}: Prop) => {
  console.log(locationMarket);
  const pins = useMemo(
    () =>
      locationMarket !== undefined &&
      locationMarket.length > 0 &&
      locationMarket?.map((marker, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={marker.longitude}
          latitude={marker.latitude}
          anchor="bottom"
        >
          {marker.type === "store" ? <Pin type="store" /> : <Pin />}
        </Marker>
      )),
    [locationMarket]
  );

  return (
    <Map
      initialViewState={{
        latitude: 40,
        longitude: -100,
        zoom: 3.5,
        bearing: 0,
        pitch: 0,
      }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken={TOKEN}
    >
      {type === "market" && pins}
      {type === "drag" && (
        <MarkerDrag
          initialLocation={initialLocation}
          handleLocation={handleLocation}
        />
      )}
    </Map>
  );
};

export default MapBox;
