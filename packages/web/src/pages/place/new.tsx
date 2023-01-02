import React, { useState } from 'react';
import { AddPlace } from '../../components/system/AddPlace';
import KakaoMap from '../../components/system/KakaoMap';
import { setShowMapSearch } from '../../stores/setShowMapSearch';

const New = () => {
  const isVisible = setShowMapSearch((state) => state.isVisible);
  const [coordsToAddress, setCoordsToAddress] = useState<string>('');

  return (
    <>
      <AddPlace coordsToAddress={coordsToAddress} />
      {isVisible && <KakaoMap setCoordsToAddress={setCoordsToAddress} />}
    </>
  );
};

export default New;
