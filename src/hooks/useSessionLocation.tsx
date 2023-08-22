import React, { useEffect, useState } from "react";

type Location = {
  lat: number;
  lng: number;
};

const useSessionLocation = () => {
  const [windows, setWindows] = useState<Window>();
  const [location, setLocation] = useState<null | { lat: number; lng: number }>(
    null
  );

  useEffect(() => {
    setWindows(window);
  }, []);

  const sessionStorage = windows?.sessionStorage;

  const setItem = (item: Location) => {
    sessionStorage.setItem("locationStore", JSON.stringify(item));
  };

  const getItem = () => {
    const res = sessionStorage?.getItem("locationStore");

    if (res) {
      return JSON.parse(res) as Location;
    }
    return null;
  };
  return { setItem, getItem };
};

export default useSessionLocation;
