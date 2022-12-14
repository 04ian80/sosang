export const searchCoordinateToAddress = (latlng: naver.maps.LatLng, nmap: naver.maps.Map) => {
  naver.maps.Service.reverseGeocode(
    {
      coords: latlng,
      orders: [naver.maps.Service.OrderType.ADDR, naver.maps.Service.OrderType.ROAD_ADDR].join(','),
    },
    function (
      status: naver.maps.Service.Status,
      response: naver.maps.Service.ReverseGeocodeResponse,
    ) {
      if (status !== naver.maps.Service.Status.OK) {
        return alert('Something went wrong!');
      }

      // // 도로명있으면 도로명으로, 없으면 지번으로
      const address = response.v2.address.roadAddress
        ? response.v2.address.roadAddress
        : response.v2.address.jibunAddress;

      const infoWindow = new naver.maps.InfoWindow({
        content: [
          '<div style="padding:10px;min-width:200px;line-height:150%;">',
          address,
          '</div>',
        ].join(
          '', // 지우기
        ),
      }); // 인포창에 content로 넣기. 위에서 InfoWindow 만들 때 content가 필수기 때문에 먼저 빈문자열로 채워줌., borderWidth: 0 });

      infoWindow.open(nmap, latlng);
      // 인포창 열기 (정포창을 올릴 맵, 지도 위에서 정보 창의 위치를 결정하는 인자)
    },
  );
};
