import Slide from "@components/General/Slide";
import React from "react";
import CardStore from "./CardStore";

const ListStores = ({ stores }: { stores: TStore[] }) => {
  //href={`/kiosko?id=${store?.id}&direction=${store?.direction}&name=${store?.name}`}
  return (
    <Slide>
      {stores?.map((store) => (
        <CardStore
          key={store.id}
          id={store.id}
          name={store.name}
          img_url={store.imgurl}
          open={store.open}
          isFavorite={store.favorite}
          direction={store.direction}
        />
      ))}
    </Slide>
  );
};

export default ListStores;
