import React, { Dispatch, MutableRefObject, SetStateAction, useEffect, useRef } from 'react';
import useGetCurrentLocation from '../../hooks/useGetCurrentLocation';
import { searchDetailAddrFromCoords } from '../../lib/searchDetailAddrFromCoords';
import { searchFromKeyword } from '../../lib/searchFromKeyword';
import { setShowMapSearch } from '../../stores/setShowMapSearch';
import Seo from '../base/Seo';
import Loader from '../svg/Loader';
import SvgXmark from '../svg/Xmark';

interface Props {
  setCoordsToAddress: Dispatch<SetStateAction<string>>;
}

const KakaoMap = ({ setCoordsToAddress }: Props) => {
  const closeMapSearch = setShowMapSearch((state) => state.closeMapSearch);
  const mapRef = useRef<HTMLElement | null>(null);
  const myLocation = useGetCurrentLocation();

  const initMap = () => {
    if (typeof myLocation !== 'string') {
      const mapContainer = document.getElementById('map'), // 지도를 표시할 div
        mapOption = {
          center: new kakao.maps.LatLng(myLocation.latitude, myLocation.longitude), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };
      let map = new kakao.maps.Map(mapContainer as HTMLElement, mapOption);
      (mapRef as MutableRefObject<any>).current = map;
      let infos: any[] = [];
      kakao.maps.event.addListener(map, 'click', function (mouseEvent: any) {
        searchDetailAddrFromCoords(map, mouseEvent.latLng, setCoordsToAddress, infos);
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValue = (e.target as HTMLElement).querySelector('input')?.value as string;
    if (mapRef) {
      searchFromKeyword(inputValue, mapRef.current, setCoordsToAddress);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const inputValue = ((e.target as HTMLElement).parentNode as HTMLElement).querySelector('input')
      ?.value as string;
    if (mapRef) {
      searchFromKeyword(inputValue, mapRef.current, setCoordsToAddress);
    }
  };

  useEffect(() => {
    kakao.maps.load(() => initMap());
  }, [mapRef, myLocation]);

  return (
    <>
      <Seo title="지도로 찾기 | 머스트잇" content="지도로 장소를 찾아보는 페이지" />
      <div className="inline-flex items-center justify-center overflow-hidden h-full fixed top-0 right-0 left-0 bg-black/20 z-9999">
        <div className="relative max-sm:w-11/12 w-140 mx-auto p-10 bg-white rounded-xl">
          <button
            type="button"
            onClick={closeMapSearch}
            className="absolute right-5 top-3 hover:opacity-60"
          >
            <SvgXmark color="black" />
          </button>
          <div className="relative flex flex-col justify-center items-center w-full">
            <h3>지도로 위치 찾기</h3>
            <small className="text-black/60">좌표를 클릭하여 위치를 설정해주세요.</small>
            <form
              onSubmit={handleSubmit}
              className="mx-2 my-1 border w-full [&>*]:p-2 rounded overflow-hidden"
            >
              <input
                className="w-4/6 border-r focus:outline-none"
                type="text"
                placeholder="(예:제주시)"
              />
              <button
                className="w-2/6 p-0 bg-brandGreen-900 opacity-70 text-white whitespace-nowrap"
                type="button"
                onClick={handleClick}
              >
                주소 검색
              </button>
            </form>

            <div id="map" className="w-96 h-96">
              {typeof myLocation === 'string' && <Loader />}
            </div>
            <button
              onClick={closeMapSearch}
              className="mt-5 ml-auto px-5 py-2 bg-brandGreen-900/80 rounded text-white"
            >
              이 위치로 설정
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default KakaoMap;
