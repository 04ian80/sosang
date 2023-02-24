import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Location from '../svg/Location';
import NearbyPlaceItem from './NearbyPlaceItem';

const NearbyPlaceList = () => {
  const [placeCard, setPlaceCard] = useState<any[]>([]);
  const URL = '/mock/recommand_place.json';

  useEffect(() => {
    (async () => {
      const results = await (await fetch(URL)).json().then((res) => {
        return res;
      });
      setPlaceCard(results.data);
    })();
  }, []);

  return (
    <>
      {placeCard.map((place) => (
        <NearbyPlaceItem key={place.id} place={place} />
      ))}
    </>
  );
};

export default NearbyPlaceList;
