import { useEffect, useState } from 'react';
import { Coord } from '../lib/types';

const useGetCurrentLocation = () => {
  const [myLocation, setMyLocation] = useState<Coord>('');
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }

    // 위치추적에 성공했을때 위치 값을 넣어줍니다.
    function success(position: { [key: string]: any }) {
      console.log('success');
      setMyLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    }

    // 위치 추적에 실패 했을때 초기값을 넣어줍니다.
    function error() {
      setMyLocation({ latitude: 37.4979517, longitude: 127.0276188 });
    }
  }, []);

  return myLocation;
};

export default useGetCurrentLocation;
