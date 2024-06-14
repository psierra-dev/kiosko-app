import React, { useCallback, useEffect, useMemo, useState } from "react";
import Map, { GeolocateControl, Marker } from "react-map-gl";
import Pin from "./Pin";

import "mapbox-gl/dist/mapbox-gl.css";
import { TOKEN_MAPBOX } from "@config/config";

import { Alert } from "@mui/material";

const MarkerDrag = ({
  initialLocation = { latitud: 26.222, longitud: 65.33232, type: "client" },
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
      longitud: event.lngLat.lng,
      latitud: event.lngLat.lat,
    });
  }, []);

  const onMarkerDragEnd = useCallback(
    (event) => {
      logEvents((_events) => ({ ..._events, onDragEnd: event.lngLat }));

      handleLocation({ latitud: event.lngLat.lat, longitud: event.lngLat.lng });
    },
    [handleLocation]
  );

  useEffect(() => {
    console.log("initialMarker", initialLocation);
    //setMarker(initialLocation);
  }, [initialLocation]);
  return (
    <>
      <Marker
        longitude={marker?.longitud}
        latitude={marker?.latitud}
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

type LatLon = { latitud: number; longitud: number; type?: string };
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
  const [viewState, setViewState] = useState({
    longitude: initialLocation?.longitud || -67.2036,
    latitude: initialLocation?.latitud || -27.7769,
    zoom: 12,
  });

  const [market, setMarket] = useState({
    longitud: initialLocation?.longitud,
    latitud: initialLocation?.latitud,
  });

  const [erroGeo, setErrorGeo] = useState(false);

  const pins = useMemo(
    () =>
      locationMarket !== undefined &&
      locationMarket?.length > 0 &&
      locationMarket?.map((marker, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={marker.longitud}
          latitude={marker.latitud}
          anchor="bottom"
        >
          {marker.type === "store" ? <Pin type="store" /> : <Pin />}
        </Marker>
      )),
    [locationMarket]
  );

  //Geolocation
  useEffect(() => {
    console.log(initialLocation, "initial");
    if (!initialLocation || !initialLocation?.latitud) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log("geolocation", latitude, longitude);
          setViewState({
            ...viewState,
            latitude,
            longitude,
          });

          setMarket({ latitud: latitude, longitud: longitude });
        },
        (error) => {
          console.error("Error al obtener la ubicación del usuario:", error);
          setErrorGeo(true);
        }
      );
    }
  }, []);

  return (
    <>
      <Map
        {...viewState}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={TOKEN_MAPBOX}
        onMove={(evt) => setViewState(evt.viewState)}
      >
        {erroGeo && (
          <Alert
            severity="error"
            style={{
              position: "fixed",
              top: "0",
              left: "0",
              width: "100%",
              flexDirection: "row",
            }}
          >
            Active su geolocalizacion
          </Alert>
        )}
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
        {type === "market" && pins}
        {type === "drag" && market?.latitud && market?.longitud && (
          <MarkerDrag
            initialLocation={market}
            handleLocation={handleLocation}
          />
        )}
      </Map>
    </>
  );
};

export default MapBox;
