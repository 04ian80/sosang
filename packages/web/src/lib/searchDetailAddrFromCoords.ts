import { Dispatch, SetStateAction } from 'react';
export const searchDetailAddrFromCoords = (
  map: any,
  coords: any,
  setCoordsToAddress: Dispatch<SetStateAction<string>>,
  infos: any[],
) => {
  // 좌표로 법정동 상세 주소 정보를 요청합니다
  const geocoder = new kakao.maps.services.Geocoder();
  geocoder.coord2Address(coords.getLng(), coords.getLat(), function (result: any, status: any) {
    if (status !== kakao.maps.services.Status.OK) {
      alert('Something went wrong');
    }

    let address = result[0].road_address
      ? result[0].road_address.address_name
      : result[0].address.address_name;
    setCoordsToAddress(address);

    const infoWindowContent = [
      '<div style="padding:5px;font-size:12px;width:200px;">',
      address,
      '</div>',
    ].join('');
    const iwPosition = new kakao.maps.LatLng(coords.getLat(), coords.getLng());
    const infowindow = new kakao.maps.InfoWindow({
      position: iwPosition,
      content: infoWindowContent,
    });
    infos.push(infowindow);
    removeInfos();
    infowindow.open(map);

    function removeInfos() {
      for (let i = 0; i < infos.length; i++) {
        infos[i].close();
      }
      infos = [];
    }
  });
};
