import React, { MutableRefObject, SyntheticEvent, useEffect, useRef, useState } from 'react';
import useGetCurrentLocation from '../../hooks/useGetCurrentLocation';
import { searchAddressToCoordinate } from '../../lib/searchAddressToCoordinate';
import { searchCoordinateToAddress } from '../../lib/searchCoordinateToAddress';
import Seo from '../base/Seo';
import Loader from '../svg/Loader';

const MapSearch = () => {
  const mapRef = useRef<HTMLElement | null>(null);
  const myLocation = useGetCurrentLocation();
  let nmap: naver.maps.Map;

  // 지도 초기 렌더링
  const initMap = () => {
    if (typeof myLocation !== 'string') {
      nmap = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(myLocation.latitude, myLocation.longitude),
        zoomControl: true,
        size: { width: 500, height: 500 },
      });
      (mapRef as MutableRefObject<any>).current = nmap; // 삭제하고 initMap useEffect에 감시대상으로 넣지 않으면 맵을 렌더링 하지 않음
      console.log(mapRef);

      naver.maps.Event.addListener(nmap, 'click', function (e) {
        searchCoordinateToAddress(e.coord, nmap);
        console.log('initMap click');
      }); // 삭제하면 이후 클릭 이벤트가 안먹힘
    }
  };

  // 주소 검색 시 좌표가져오기 및 지도 이동
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValue = (e.target as HTMLElement).querySelector('input')?.value as string;
    searchAddressToCoordinate(inputValue, nmap);
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const inputValue = ((e.target as HTMLElement).parentNode as HTMLElement).querySelector('input')
      ?.value as string;
    searchAddressToCoordinate(inputValue, nmap);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter' && (e.target as HTMLInputElement).value === '') {
      e.preventDefault();
    }
  };

  useEffect(() => {
    initMap();
  });

  return (
    <div className="relative flex flex-col justify-center items-center w-full">
      <Seo title="지도로 찾기 | 머스트잇" content="지도로 장소를 찾아보는 페이지" />
      <form
        onSubmit={handleSubmit}
        className="mx-2 my-1 border w-full [&>*]:p-2 rounded overflow-hidden"
      >
        <input
          className="w-4/5 border-r focus:outline-none"
          type="text"
          placeholder="(예:제주시)"
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleClick}
          className="w-1/5 p-0 bg-brandGreen-900 opacity-70 text-white"
          type="button"
        >
          주소 검색
        </button>
      </form>

      <div id="map" className="mx-0 my-auto">
        {typeof myLocation === 'string' && <Loader />}
      </div>
    </div>
  );
};

export default MapSearch;
