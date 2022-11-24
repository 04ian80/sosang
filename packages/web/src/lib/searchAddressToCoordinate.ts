import { Coord } from '../lib/types';

export function searchAddressToCoordinate(
  myLocation: Coord,
  address: string,
  nmap: naver.maps.Map,
) {
  if (typeof myLocation !== 'string') {
    const infoWindow = new naver.maps.InfoWindow({ content: '', borderWidth: 0 });
    naver.maps.Service.geocode(
      {
        query: address,
      },
      function (status: naver.maps.Service.Status, response: naver.maps.Service.GeocodeResponse) {
        if (status === naver.maps.Service.Status.ERROR) {
          return alert('Something Wrong!');
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

        var htmlAddresses = [],
          item = response.v2.addresses[0], // 찾은 주소 정보
          point = new naver.maps.Point(Number(item.x), Number(item.y)); // 좌표

        if (item.roadAddress) {
          htmlAddresses.push('[도로명 주소] ' + item.roadAddress);
        }

        if (item.jibunAddress) {
          htmlAddresses.push('[지번 주소] ' + item.jibunAddress);
        }

        infoWindow.setContent(
          [
            '<div style="padding:10px;min-width:200px;line-height:150%;">',
            '<h4 style="margin-top:5px;">검색 주소 : ' + address + '</h4><br />',
            htmlAddresses.join('<br />'),
            '</div>',
          ].join('\n'),
        );

        nmap.setCenter(point);
        infoWindow.open(nmap, point);
      },
    );
  }
}
