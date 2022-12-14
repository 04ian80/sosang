import { Dispatch, SetStateAction } from 'react';
export const searchFromKeyword = (
  inputValue: string,
  map: any,
  setCoordsToAddress: Dispatch<SetStateAction<string>>,
) => {
  const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
  const places = new kakao.maps.services.Places();
  places.keywordSearch(inputValue, (data: any, status: any, pagination: any) => {
    console.log(data, status, pagination);
    var bounds = new kakao.maps.LatLngBounds();

    for (var i = 0; i < data.length; i++) {
      displayMarker(data[i]);
      bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
    }

    // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
    map.setBounds(bounds);
  });

  function displayMarker(place: any) {
    // 마커를 생성하고 지도에 표시합니다
    console.log(place);
    var marker = new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(place.y, place.x),
    });

    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'click', function () {
      // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
      infowindow.setContent(
        '<div style="padding:5px;font-size:12px;width:200px;">' +
          '<span>' +
          place.address_name +
          '</span>\n' +
          '<span>' +
          place.place_name +
          '</span>' +
          '</div>',
      );
      infowindow.open(map, marker);
    });
    setCoordsToAddress(place.address_name);
  }
};
