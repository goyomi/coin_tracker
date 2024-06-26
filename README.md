# <img width="50" alt="Coin Tracker Logo" src="https://github.com/goyomi/coin_tracker/assets/122963246/e8312f38-5433-4c2c-9fe2-b0c5ed8d9fb6"> Coin Tracker
<img width="1920" alt="Coin Tracker Mockup(ko)" src="https://github.com/goyomi/coin_tracker/assets/122963246/f092c63b-46e7-4fc3-b028-fa8e08445a65">
<br>

## 👋 프로젝트 소개 
Coin Tracker는 상위 100개 가상화폐에 대한 포괄적인 개요를 제공하는 서비스입니다. 테이블 리스트와 캔들 차트를 활용하여 사용자가 암호화폐 시장을 더욱 깊이 있게 이해할 수 있도록 돕고 있습니다. 가격, 변동률, 거래량 등의 정보를 테이블로 제공하며, 개별 코인의 상세 정보와 OHLC 데이터를 기반으로 한 차트도 함께 제공합니다. 이 외에도 환율 계산기, 역사적 가격 데이터, 코인 관련 링크 등 다양한 부가 기능을 갖추고 있습니다.
### 배포 URL
🚀 [Coin Tracker 배포링크](https://coin-tracker-79002.firebaseapp.com/coin_tracker)
### 설치방법
Coin Tracker 프로젝트를 설치하고 실행하기 위해 터미널을 열고 다음 명령어를 아래 단계에 따라 입력하세요.

Step 1: 프로젝트 클론
먼저, Coin Tracker 프로젝트를 로컬 머신에 클론합니다.
```bash
git clone https://github.com/goyomi/coin_tracker.git
cd coin_tracker
```
Step 2: 패키지 설치
프로젝트의 의존성을 설치하기 위해 `npm`을 사용합니다.
```bash
npm install
```
Step 3: 프로젝트 시작
패키지 설치가 완료되면 프로젝트를 실행할 수 있습니다.
```bash
npm start
```
<br>

## 🗓️ 개발기간 및 일정
### 주요 마일스톤
2024년 3월 15일 - 2024년 4월 17일
| 날짜 | 내용 |
| --- | --- |
| 3월 15일 - 3월 17일 | 프로젝트 기획 및 설계 : 페이지 구성, 주요 기술 스택 선정, API 선정 |
| 3월 16일 - 4월 17일 | UI/UX 디자인 및 구현: UI/UX 디자인, 반응형 웹 디자인 구현 |
| 3월 19일 - 3월 31일 | 주요 기능 개발 |
| 4월 17일 | 최종 배포 |
### ♻️ 리팩토링

<br>

## 🛠️ 기술스택
| Title                  | Content             |
|------------------------|---------------------|
| 프로그래밍 언어         | <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">         |
| 프레임워크 및 라이브러리 | <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">  <img src="https://img.shields.io/badge/Styled-Components-DB7093?style=for-the-badge&logo=Styled-Components&logoColor=white">  <img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=React Query&logoColor=white">   <img src="https://img.shields.io/badge/ApexCharts-008ffb?style=for-the-badge&logo=ApexCharts&logoColor=white">    |
| 패키지                 | <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"> |
| 포멧터                 | <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white">           |
| 배포 도구              | <img src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white">     |
| 버전관리               | <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">       |
| 백엔드               | <img src="https://img.shields.io/badge/Coin Gecko Free API-71C93C?style=for-the-badge">  <a href="https://docs.coingecko.com/reference/introduction" target="_blank"><img src="https://img.shields.io/badge/🚀 API 명세보기-3a4348?style=for-the-badge"></a>|
| 디자인/문서               | <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">  <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white">       |
<br> 

## ✨ 프로젝트 구현
### 스크린 샷
https://github.com/goyomi/coin_tracker/assets/122963246/73070960-011c-4cf0-9ad3-d6119ebd094a

https://github.com/goyomi/coin_tracker/assets/122963246/4573ae63-de32-4c2d-b9a6-66d8d2925ac1

https://github.com/goyomi/coin_tracker/assets/122963246/5920e640-836d-4fd6-a3b4-eefba69fc634

### 주요 기능
- 상위 100개 가상화폐의 가격, 변동률, 24시간 거래량, 시가총액, 유통량을 테이블 형식으로 제공
- 개별 가상화폐의 상세 정보 제공
    - 시가총액, 완전희석시가총액, 24시간 거래량, 유통량, 총 공급량, 최대 공급량
- 다양한 기간(1시간, 1주, 1개월, 1년)의 OHLC 데이터를 기반으로 한 가상화폐 차트 제공
- 가상화폐와 USD 간의 환율 계산기 기능
- 가상화폐의 24시간 가격 범위, 최고가, 최저가 등의 Historical Price 데이터 제공
- 가상화폐 홈페이지, 백서, 소스코드(GitHub) 링크 제공
- 가상화폐에 대한 Sentiment Survey 정보 제공
- 가상화폐에 대한 개요 정보 제공
- 라이트 모드와 다크 모드 지원으로 사용자 환경 개선
<br>

## 🗂️ 폴더구조
```
🪙 CoinTracker
├── 📂 public              
└── 📂 src/
    ├── 📂 components/     
    │   ├── 📂 chart/      ─────────────────── 📦 차트를 표시하는 컴포넌트   
    │   ├── 📂 coin/       ─────────────────── 📦 코인과 관련된 데이터를 보여주는 컴포넌트
    │   ├── 📂 layout/     ─────────────────── 📦 페이지의 구조를 구성하는 컴포넌트    
    │   └── 📂 page/       ─────────────────── 📦 특정한 페이지를 나타내는 컴포넌트
    │
    ├── 📂 contexts/              
    │   └── Context.tsx    ─────────────────── 📤 컨텍스트 API 설정 파일 
    │
    ├── 📂 pages/        
    │   ├── CoinDetail.tsx ─────────────────── 📄 코인 상세 페이지 
    │   └── CoinList.tsx   ─────────────────── 📄 코인 리스트 페이지
    │
    ├── 📂 services/
    │   └── api.ts         ─────────────────── 📲 API 호출 함수들을 정의한 파일          
    │
    ├── 📂 styles/
    │   ├── common.ts      ─────────────────── 🎨 공통으로 사용되는 스타일 정의 파일
    │   ├── GlobalStyle.ts ─────────────────── 🎨 전역 스타일 설정 파일 
    │   └── theme.ts       ─────────────────── 🎨 테마 설정 파일          
    │ 
    ├── 📂 utils/           
    │   ├── createURL.tsx  ─────────────────── 🐭 URL을 생성하는 유틸 함수 파일
    │   ├── thousandSeparator.tsx ──────────── 🐭 숫자를 천 단위로 구분하는 유틸 함수 파일
    │   └── toggleColorWithValue.tsx ───────── 🐭 값에 따라 색상을 변경하는 유틸 함수 파일
    │ 
    ├── App.tsx          
    ├── constant.ts        ─────────────────── 💡 상수 선언 파일 
    ├── index.tsx 
    └── styled.d.ts        ─────────────────── 💈 스타일 컴포넌트 타입 정의 파일       
```
<br>

## 🤝 컨벤션
### 코드컨벤션
- 파일과 폴더명은 `camelCase`를 사용한다. (첫글자 소문자)
- React 컴포넌트 파일은 `PascalCase`를 사용한다. (첫글자 대문자)
- 인터페이스와 타입은 `interface`와 `type`을 사용하여 정의한다.
- 스타일은 `styled-components`를 사용하여 정의한다.
- 공통 스타일은 `styles` 폴더 안에 파일로 작성하고 개별 스타일은 컴포넌트 안에 함께 관리한다.
- 모든 스타일 컴포넌트는 `PascalCase`로 선언한다.
- 상수 및 컬러 변수는 `theme.ts`에 정의하고 `ThemeProvider`로 제공한다.
- Prettier를 사용하여 코드 포매팅을 자동화한다.

### 커밋컨벤션
```
- Fix: 올바르지 않은 동작을 고친 경우
- Feat: 새로운 기능을 추가한 경우
- Refactor: 내부 로직은 변경하지 않고 코드를 개선한 경우
- Style: 코드 개선과 상관없이 사소하게 코드를 수정한 경우
- Design: 사용자 UI를 추가, 수정한 경우 (마크업, 퍼블리싱 작업)
- Add: 폴더, 파일 등을 추가한 경우
- Move: 폴더, 파일, 코드 등의 위치를 이동한 경우
- Rename: 폴더명, 파일명 등을 수정한 경우
- Remove: 폴더, 파일, 코드 등을 삭제한 경우
- Assets: 이미지, 아이콘 등의 리소스 추가 또는 수정
- Docs: README, Wiki 등 문서 작성 및 수정
- Chore: 빌드 스크립트 변경, 패키지 매니저 설정 등 기타 변경사항
```
<br>

## 🫧 트러블 슈팅
### 1️⃣ 데이터 페칭 시 로딩 및 에러 상태 관리 문제 ([🚀 wiki](https://github.com/goyomi/coin_tracker/wiki/README_%ED%8A%B8%EB%9F%AC%EB%B8%94-%EC%8A%88%ED%8C%85_%EB%8D%B0%EC%9D%B4%ED%84%B0-%ED%8E%98%EC%B9%AD-%EC%8B%9C-%EB%A1%9C%EB%94%A9-%EB%B0%8F-%EC%97%90%EB%9F%AC-%EC%83%81%ED%83%9C-%EA%B4%80%EB%A6%AC-%EB%AC%B8%EC%A0%9C))
`React-Query`로 데이터 페칭 시 `isLoading`과 `isError` 상태가 반복적으로 발생하여 로딩 컴포넌트와 에러 페이지가 계속해서 번갈아 표시되는 문제가 있었습니다. 이로 인해 사용자 경험에 문제가 되었으며, 상태 변화에 따라 페이지가 계속해서 바뀌지 않도록 하는 것이 필요했습니다.
```tsx
function App() {
  return (
    <CoinListContext.Provider
      value={{ data, isLoading, isError, error, refetch }}
    >
      <ThemeProvider theme={toggleOn ? darkTheme : theme}>
        <GlobalStyle />
        <BrowserRouter basename="/coin_tracker">
          <Switch>
            <Suspense fallback={<LoadingPage />}>
              <Route path="/:coinId">
                <MainContainer>
                  <CoinDetail toggleOn={toggleOn} setToggleOn={setToggleOn} />
                </MainContainer>
              </Route>
              <Route path="/">
                <MainContainer>
                  <CoinList toggleOn={toggleOn} setToggleOn={setToggleOn} />
                </MainContainer>
              </Route>
            </Suspense>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </CoinListContext.Provider>
  );
}
```
이 문제를 해결하기 위해 `React.Suspense`를 사용하여 로딩 상태를 관리하고, 데이터 로딩 중에는 `fallback` UI를 보여주었습니다. 또한, 데이터 로딩이 완료될 때까지 기다림으로써 로딩 상태를 `isError` 상태와 별개로 관리할 수 있었습니다.

### 2️⃣ 차트 데이터 페칭 최적화
차트 데이터 페칭 시 초기 데이터 로딩이 느리고, 페이지 진입 시 에러 페이지로 이동하는 문제가 발생했습니다. 이를 해결하기 위해 차트 데이터(hour, week, month, year)의 4가지 기간 OHLC 데이터 중 가장 먼저 보이는 1시간 데이터부터 페치하여 사용자 불편을 감소시키고자 했습니다. `React-Query`의 `enable`옵션을 사용해서 앞의 조건이 완료되기 전에는 뒤의 데이터가 페치되지 않도록 설정하였습니다.
```tsx
// data fetch
  // 1. ohlc
  const useOhlcQuery = (days: number, enabled: boolean) => {
    return useQuery([`${days}Days`, "ohlc", selectedCoin], () => ohlc(selectedCoin!.id, days), {
      enabled,
      refetchInterval: Infinity,
    });
  };
  
// Props
  // 1. Chart
  const query1 = useOhlcQuery(1, true);
  const query7 = useOhlcQuery(7, query1.isSuccess);
  const query30 = useOhlcQuery(30, query7.isSuccess);
  const query365 = useOhlcQuery(365, query30.isSuccess);
  const queries = {
    "1": query1,
    "7": query7,
    "30": query30,
    "365": query365,
  };
```

### 3️⃣ 동적 라우팅 문제
Coin의 Detail 정보 페이지로 이동할 때, router로 `id`를 전달하여 페이지를 이동시키는 방식을 사용했으나, GitHub Pages는 동적 라우팅을 지원하지 않아서 URL을 직접 입력하는 경우 404 페이지로 이동하는 문제가 있었습니다. 사용자가 URL에 Coin의 이름을 직접 입력해서 필요한 페이지로 이동하려고 할 때, GitHub Pages에서는 동적 라우팅을 지원하지 않아 배포된 URL 외의 모든 조작이 404 페이지로 처리되었습니다.
```json
{
  "hosting": {
    "public": "build",
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```
문제 해결을 위해 배포 서비스를 GitHub Pages에서 Firebase로 변경하고 Firebase를 사용하여 동적 라우팅을 지원하도록 설정했습니다. Firebase의 `firebase.json` 파일을 수정하여 모든 요청을 `index.html`로 리디렉션하도록 설정하여 Coin의 Detail 페이지로의 동적 라우팅을 지원할 수 있게 되었고, 사용자들이 URL에 Coin의 이름을 직접 입력하여 원하는 페이지로 바로 이동할 수 있게 되었습니다.

https://github.com/goyomi/coin_tracker/assets/122963246/3f163a21-a64e-42df-be2e-cf2ae398f4fa

### 4️⃣ styled-components의 props 전달 문제 ([🚀 wiki](https://github.com/goyomi/coin_tracker/wiki/README_%ED%8A%B8%EB%9F%AC%EB%B8%94-%EC%8A%88%ED%8C%85_styled%E2%80%90components%EC%9D%98-props-%EC%A0%84%EB%8B%AC-%EB%AC%B8%EC%A0%9C))
styled-components로 props를 전달받을 때, prop이 DOM 요소에 전달되어 콘솔 에러가 발생하였습니다. Transient Props를 사용하면 문제를 간단하게 해결할 수 있습니다. props 이름 앞에 `$` 기호를 붙여 정의하면, styled-components에서 자동으로 필터링되어 실제 DOM에는 전달되지 않습니다. `shouldForwardProp`를 사용할 때보다 코드를 간결하게 유지하기도 좋습니다.
```tsx
const NavLink = styled(Link)<{ $isAction?: boolean }>`
  display: inline-block;
  margin: 0 1rem;
  padding: 1rem;
  text-transform: capitalize;
  font-size: var(--font-size-web-small);
  color: ${(props) => (props.$isAction ? props.theme.onActiveColor : props.theme.mainFontColor)};
  background-color: ${(props) => props.theme.buttonColor};
  border-radius: 0.5rem;
  @media (max-width: 1024px) {
    font-size: var(--font-size-tablet-small);
    padding: 0.8rem;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-mobile-small);
    margin: 0.5rem;
    padding: 0.5rem;
  }
`;

function Breadcrumb({ links }: { links: { name: string; path: string }[] }) {
  return (
    <Navbar>
      <OrderList>
        {links.map((link, idx) => (
          <li key={idx}>
            <NavLink $isAction={idx === links.length - 1} to={link.path}>
              {link.name} Price
            </NavLink>
            {idx < links.length - 1 && ">"}
          </li>
        ))}
      </OrderList>
    </Navbar>
  );
}
```
<br>
