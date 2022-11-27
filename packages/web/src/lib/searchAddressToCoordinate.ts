export function searchAddressToCoordinate(
  // myLocation: Coord,
  inputValue: string,
  nmap: naver.maps.Map,
) {
  // if (typeof myLocation !== 'string') {

  naver.maps.Service.geocode(
    {
      query: inputValue,
    },
    function (status: naver.maps.Service.Status, response: naver.maps.Service.GeocodeResponse) {
      if (status === naver.maps.Service.Status.ERROR) {
        return alert('Something went Wrong!');
      }
      console.log('rendered');

      if (response.v2.meta.totalCount === 0) {
        return alert(
          [
            '도로명으로 찾고 계시다면 "도로명+건물번호" 형식으로 입력해주세요.',
            '예) 남산공원길 105',
          ].join('\n'),
        );
      }

      const item = response.v2.addresses[0]; // 찾은 주소 정보
      const point = new naver.maps.Point(Number(item.x), Number(item.y)); // 좌표
      const address = item.roadAddress ? item.roadAddress : item.jibunAddress;

      const infoWindow = new naver.maps.InfoWindow({
        content: ['<div style="padding:10px;"><h4>' + address + '</h4></div>'].join(''),
        borderWidth: 0,
      });

      nmap.setCenter(point);
      infoWindow.open(nmap, point);
    },
  );
  // }
}
