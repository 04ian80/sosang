# 머스트잇

_"자신만의 단골 맛집 리스트를 친구와 공유하고 기록으로 남기는 공간"_

![머스트잇 로고](https://user-images.githubusercontent.com/97023321/204156349-44a190ee-a523-4595-9a3c-9ac72c9079d3.png)

## - 프로젝트 목적

- 이미 많은 사람들이 알고있는 유명 맛집보다는 나의 친한 친구, 가족이 인정한 골목 구석구석에 숨어있는 맛집을 서로 공유하고 기록하기 위한 웹 어플리케이션 프로젝트 입니다.

## - 개발 환경
**FE**
<div style='align:center;'>
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
  <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/nextjs-000000?style=for-the-badge&logo=Next.Js&logoColor=white">
  <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">
  <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white">
  <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white">
</div>

**협업툴**
<div style='align:center;'>
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> 
  <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">
  <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white">
</div>

## - 구현 기능
### 1차 개발
- next/auth를 사용한 소셜 로그인
  - '로그인' 버튼 클릭 시 구글, 카카오, 네이버 소셜 로그인 모달 표시
  - 로그인 성공 시 '로그인' 버튼이 사용자의 소셜 프로필로 전환
- 반응형 헤드바 구현
- 나만의 맛집을 어플리케이션에 등록할 수 있는 '가게 제안하기' form 구현
  - 홈페이지 url 및 전화번호 유효성 검사
  - 이미지 파일 추가 시 이미지 미리보기
- Naver Map Geocoding & ReverseGeocoding API로 지도 클릭 시 주소 띄우기 및 주소 검색 시 지도 이동, 전체 주소 띄우기 구현

## - 프로젝트 기간
- **기획**: 2022. 09. 01 ~ 2022. 09. 03
- **디자인**: 2022. 09. 04 ~ 2022. 09. 16
- **1차 개발**: 2022. 09. 17 ~ 진행중

## - 팀원
[nogy21](https://github.com/nogy21)

## - 트러블 슈팅
|이슈날짜|이슈|해결날짜|해결|
|------|-----|-----|----|
|2022.10.05|tailwindcss 설치 후 “Parsing error : Cannot find module 'next/babel'” 에러 발생 |2022.10.05|- .babelrc 생성 후 코드 추가: {"presets": ["next/babel"], "plugins": []} <br /> .eslintrc파일에 ”next/babel” 추가|
|2022.10.06|svg로 인한 난잡한 코드|2022.10.06|SVG 컴포넌트를 따로 만들어 코드 간소화|
|2022.10.06|간단한 것부터 복잡한것까지 통일된 상태관리를 위한 라이브러리 필요|2022.10.06|쉽고 빠르게 배울 수 있는 상태관리 라이브러리 zustand 사용|
|2022.11.10|FileList타입의 배열을 map으로 돌려서 URL.createObjectURL({params})로 url을 만들려고 시도했더니 FileList형식은 Blob이나 MediaSource형식에 맞지 않는다며 에러 발생|2022.11.12|FileListArray.item(i) 메서드를 사용해주면 File형식으로 바뀜. File도 Blob타입의 일종이기 때문에 에러가 나지 않음.|
|2022.11.11|e.target.files를 new Array함수로 배열을 만들었더니 작동 안함.|2022.10.06|array-like 객체를 배열로 만들어주는 메서드 Array.from으로 FileList타입의 오브젝트를 배열로 만들어 줌. FileList는 File이라는 타입을 가진 요소의 배열이 아니고 그저 ‘객체’. 그래서 객체를 배열로 바꿔주려면 new Array가 아닌 Array.from을 썼어야 함.|
|2022.11.15|인풋 focus상태에서 엔터 누르면 자동 submit 이슈|2022.11.15|onKeydown 이벤트에서 e.code가 'Enter'라면 e.preventDefault로 submit 막기|
|2022.11.27|next/link에 a태그가 자식으로 올 수 없음.|2022.11.27|Next.js가 버전 13으로 올라가면서 next/link의 자식요소로 a태그가 올 수 없게 되었다. a태그를 지우거나 Link 태그에 legacyBehavior 속성을 넣으면 해결.|
|2022.11.27|_app.tsx에 Component 빨간줄 에러. 'Component cannot be used as JSX Element'|2022.11.27|vue에서 {ErrorCode}라는  잘못 가져와서 에러 발생|

## - view 파일 구조 (Front-End)
```
📦src
 ┣ 📂assets
 ┃ ┣ 📜arrow-left-short.svg
 ┃ ┣ 📜arrow-right.svg
 ┃ ┣ 📜btn_google_light_normal_ios.svg
 ┃ ┣ 📜caret-down-fill.svg
 ┃ ┣ 📜google.svg
 ┃ ┣ 📜kakao.svg
 ┃ ┣ 📜list.svg
 ┃ ┣ 📜map.svg
 ┃ ┣ 📜menu.svg
 ┃ ┣ 📜naver.svg
 ┃ ┣ 📜notification.svg
 ┃ ┣ 📜search.svg
 ┃ ┗ 📜x.svg
 ┣ 📂components
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📜Login.tsx
 ┃ ┃ ┣ 📜NextSocialLogin.tsx
 ┃ ┃ ┗ 📜SocialLogin.tsx
 ┃ ┣ 📂base
 ┃ ┃ ┣ 📜HeadBar.tsx
 ┃ ┃ ┗ 📜Seo.tsx
 ┃ ┣ 📂input
 ┃ ┃ ┣ 📜FileUploader.tsx
 ┃ ┃ ┣ 📜InputGroup.tsx
 ┃ ┃ ┣ 📜LocationInput.tsx
 ┃ ┃ ┣ 📜Select.tsx
 ┃ ┃ ┣ 📜TextInput.tsx
 ┃ ┃ ┗ 📜UploadedImg.tsx
 ┃ ┣ 📂items
 ┃ ┃ ┣ 📜AddFileButton.tsx
 ┃ ┃ ┣ 📜MenuButton.tsx
 ┃ ┃ ┣ 📜Profile.tsx
 ┃ ┃ ┣ 📜ShowMobileSearch.tsx
 ┃ ┃ ┗ 📜ViaMap.tsx
 ┃ ┣ 📂search
 ┃ ┃ ┣ 📜EachLocation.tsx
 ┃ ┃ ┣ 📜LocationOption.tsx
 ┃ ┃ ┣ 📜MobileSearch.tsx
 ┃ ┃ ┗ 📜SearchInput.tsx
 ┃ ┣ 📂svg
 ┃ ┃ ┣ 📜ArrowLeft.tsx
 ┃ ┃ ┣ 📜ArrowRight.tsx
 ┃ ┃ ┣ 📜CaretDownFill.tsx
 ┃ ┃ ┣ 📜Google.tsx
 ┃ ┃ ┣ 📜Kakao.tsx
 ┃ ┃ ┣ 📜Loader.tsx
 ┃ ┃ ┣ 📜Map.tsx
 ┃ ┃ ┣ 📜Menu.tsx
 ┃ ┃ ┣ 📜Naver.tsx
 ┃ ┃ ┣ 📜Notification.tsx
 ┃ ┃ ┣ 📜Search.tsx
 ┃ ┃ ┗ 📜Xmark.tsx
 ┃ ┗ 📂system
 ┃ ┃ ┣ 📜Button.tsx
 ┃ ┃ ┣ 📜MapSearch.tsx
 ┃ ┃ ┗ 📜Modal.tsx
 ┣ 📂hooks
 ┃ ┣ 📜useClickOutside.ts
 ┃ ┣ 📜useGetCurrentLocation.ts
 ┃ ┗ 📜useValidate.ts
 ┣ 📂lib
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📜login.ts
 ┃ ┣ 📜auth.ts
 ┃ ┣ 📜onCloseModal.ts
 ┃ ┣ 📜searchAddressToCoordinate.ts
 ┃ ┣ 📜searchCoordinateToAddress.ts
 ┃ ┗ 📜types.ts
 ┣ 📂pages
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┗ 📜[...nextauth].ts
 ┃ ┃ ┗ 📜hello.ts
 ┃ ┣ 📂place
 ┃ ┃ ┗ 📜add.tsx
 ┃ ┣ 📜_app.tsx
 ┃ ┣ 📜_document.tsx
 ┃ ┣ 📜index.tsx
 ┃ ┣ 📜map.tsx
 ┃ ┗ 📜mypage.tsx
 ┣ 📂stores
 ┃ ┣ 📜authCode.ts
 ┃ ┣ 📜options.ts
 ┃ ┣ 📜setLocation.ts
 ┃ ┗ 📜setLoginModal.ts
 ┣ 📂styles
 ┃ ┣ 📜Home.module.css
 ┃ ┗ 📜globals.css
 ┣ 📂types
 ┃ ┣ 📜environment.d.ts
 ┃ ┗ 📜next-auth.d.ts
 ┗ 📜tailwind.css
 ```
