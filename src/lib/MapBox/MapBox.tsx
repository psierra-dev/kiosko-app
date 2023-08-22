import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import style from "./mapbox.module.css";
import { useRouter } from "next/router";

type Prop = {
  formLat?: React.Dispatch<React.SetStateAction<number | null>>;
  formLng?: React.Dispatch<React.SetStateAction<number | null>>;
  from: string;
  LngLatStore?: [number, number] | [];
  LngLatClient?: [number, number] | [];
};

const MapBox = ({
  formLng,
  formLat,
  from,
  LngLatStore,
  LngLatClient,
}: Prop) => {
  const mapContainer = useRef<any>(null);
  const map = useRef<any>(null);
  const marker = useRef<any>(null);
  const [lng, setLng] = useState<number>(-65.261338088683);
  const [lat, setLat] = useState(-26.798227134886616);
  const [zoom, setZoom] = useState(11);
  const [locationUpdate, setlocationUpdate] = useState(false);
  const [markerLat, setMarkerLat] = useState(-26.798227134886616);
  const [markerLng, setMarkerLng] = useState(-65.261338088683);
  const router = useRouter();
  const { lng: lngQuery, lat: latQuery } = router.query;

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoicGFibG9zNTciLCJhIjoiY2w1ZnUyaDl1MTNtMjNqbnRwcWRtaDY2cCJ9.yhPZqGTzceXkygvQ_DWDAw";
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  }, []);

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  }, []);

  /*useEffect(() => {
    if (!markerLat || !markerLng) {
      console.log("entra");
      window.navigator.geolocation.getCurrentPosition(
        (succes) => {
          console.log(succes);
          setLat(succes.coords.latitude);
          setLng(succes.coords.longitude);
        },
        (error) => console.log(error),
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
      );
    }
  }, [markerLat, markerLng]);*/

  useEffect(() => {
    if (from === "marker") {
      if (LngLatStore.length > 0 && LngLatClient.length > 0) {
        map.current.on("load", () => {
          console.log("LngLatStore", LngLatStore);
          const el = document.createElement("div");
          const width = "30px";
          const height = "25px";
          el.className = "marker";
          el.style.width = width;
          el.style.height = height;
          el.style.borderRadius = "5px";
          el.style.backgroundImage =
            "url(https://images.pexels.com/photos/375889/pexels-photo-375889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)";
          el.style.backgroundSize = "100%";
          const market2 = new mapboxgl.Marker(el)
            .setLngLat([-26.798227134886616, -65.261338088683])
            .addTo(map.current as any);
        });
      }
    }
  }, [LngLatStore, LngLatClient]);

  useEffect(() => {
    if (from === "formcreate") {
      console.log("formcreate");
      console.log(LngLatClient);
      if (LngLatClient.length > 0) {
        map.current.on("load", () => {
          marker?.current?.remove();
          marker.current = new mapboxgl.Marker({
            draggable: true,
          })
            .setLngLat(LngLatClient as [number, number])
            .addTo(map.current as any);
          formLat(LngLatClient[1]);
          formLng(LngLatClient[0]);
          const onDragEnd = () => {
            const lngLatget = marker.current.getLngLat();

            formLat(lngLatget.lat);
            formLng(lngLatget.lng);
          };
          marker.current.on("dragend", onDragEnd);
        });
      } else {
        map.current.on("click", (e: any) => {
          console.log("click");
          let coordinates = e.lngLat;
          console.log("Lng:", coordinates.lng, "Lat:", coordinates.lat);

          const lngLat = [coordinates.lng, coordinates.lat];

          marker?.current?.remove();
          marker.current = new mapboxgl.Marker();
          marker.current.setLngLat(lngLat).addTo(map.current as any);

          // Info que va hacia el FORM NewPet
          formLat(coordinates.lat);
          formLng(coordinates.lng);
        });
      }
      /**/
    }
  }, [LngLatClient]);

  useEffect(() => {
    let entrada = true;
    if (entrada) {
      if (from === "formcart") {
        map.current.on("load", () => {
          console.log("formcart");
          marker?.current?.remove();
          marker.current = new mapboxgl.Marker({
            draggable: true,
          })
            .setLngLat(LngLatClient as [number, number])
            .addTo(map.current as any);
          formLat(LngLatClient[1]);
          formLng(LngLatClient[0]);
          const onDragEnd = () => {
            const lngLatget = marker.current.getLngLat();

            formLat(lngLatget.lat);
            formLng(lngLatget.lng);
          };
          marker.current.on("dragend", onDragEnd);
          if (LngLatStore) {
            console.log("LngLatStore", LngLatStore);
            const el = document.createElement("div");
            const width = "30px";
            const height = "25px";
            el.className = "marker";
            el.style.width = width;
            el.style.height = height;
            el.style.borderRadius = "5px";
            el.style.backgroundImage =
              "url(https://images.pexels.com/photos/375889/pexels-photo-375889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)";
            el.style.backgroundSize = "100%";
            const market2 = new mapboxgl.Marker(el)
              .setLngLat(LngLatStore as [number, number])
              .addTo(map.current as any);
          }
          /*const lngLat =
            LngLatClient !== undefined && LngLatClient.length > 1
              ? LngLatClient
              : [markerLng, markerLat];

          console.log("formcart");
          if (LngLatClient && LngLatStore) {
            console.log("aqqqq", lngLat);
            const market1 = new mapboxgl.Marker({
              draggable: true,
            })
              .setLngLat(lngLat as [number, number])
              .addTo(map.current as any);

            const onDragEnd = () => {
              const lngLatget = market1.getLngLat();
              console.log("onDragEnd");
              //formLat(lngLatget.lat);
              //formLng(lngLatget.lng);
            };
            market1.on("dragend", onDragEnd);
          }

          if (LngLatStore) {
            console.log("LngLatStore");
            const el = document.createElement("div");
            const width = "30px";
            const height = "25px";
            el.className = "marker";
            el.style.width = width;
            el.style.height = height;
            el.style.borderRadius = "5px";
            el.style.backgroundImage =
              "url(https://images.pexels.com/photos/375889/pexels-photo-375889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)";
            el.style.backgroundSize = "100%";
            const market2 = new mapboxgl.Marker(el)
              .setLngLat(LngLatStore as [number, number])
              .addTo(map.current as any);
          }*/
        });
      }
    }

    () => {
      return (entrada = false);
    };
  }, []);

  return (
    <>
      <div className={style.conmapbox} ref={mapContainer} id="map"></div>
    </>
  );
};

export default MapBox;
