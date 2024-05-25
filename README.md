# <img width="50" alt="Coin Tracker Logo" src="https://github.com/goyomi/coin_tracker/assets/122963246/e8312f38-5433-4c2c-9fe2-b0c5ed8d9fb6"> Coin Tracker
<img width="1920" alt="Coin Tracker Mockup(ko)" src="https://github.com/goyomi/coin_tracker/assets/122963246/f092c63b-46e7-4fc3-b028-fa8e08445a65">
<br>

## 👋 프로젝트 소개 
Coin Tracker는 상위 100개 가상화폐에 대한 포괄적인 개요를 제공하는 서비스입니다. 테이블 리스트와 캔들 차트를 활용하여 사용자가 암호화폐 시장을 더욱 깊이 있게 이해할 수 있도록 돕고 있습니다. 가격, 변동률, 거래량 등의 정보를 테이블로 제공하며, 개별 코인의 상세 정보와 OHLC 데이터를 기반으로 한 차트도 함께 제공합니다. 이 외에도 환율 계산기, 역사적 가격 데이터, 코인 관련 링크 등 다양한 부가 기능을 갖추고 있습니다.
### 배포 URL
🚀 [Coin Tracker 배포링크](https://goyomi.github.io/coin_tracker/)
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
<img width="1264" alt="Coin Tracker Gantt Chart(ko)" src="https://github.com/goyomi/coin_tracker/assets/122963246/54cfad41-590c-4ff3-8afb-00c01c1eb69b">
<br>

## 🛠️ 기술스택
| Title                  | Content             |
|------------------------|---------------------|
| 프로그래밍 언어         | <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">         |
| 프레임워크 및 라이브러리 | <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">  <img src="https://img.shields.io/badge/Styled-Components-DB7093?style=for-the-badge&logo=Styled-Components&logoColor=white">  <img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=React Query&logoColor=white">   <img src="https://img.shields.io/badge/ApexCharts-008ffb?style=for-the-badge&logo=ApexCharts&logoColor=white">    |
| 패키지                 | <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"> |
| 포멧터                 | <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white">           |
| 배포 도구              | <img src="https://img.shields.io/badge/githubpages-222222?style=for-the-badge&logo=githubpages&logoColor=white">     |
| 버전관리               | <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">       |
<br> 

## ✨ 프로젝트 구현
### 스크린 샷
https://github.com/goyomi/coin_tracker/assets/122963246/31da6221-6bd7-431c-9be2-1558c603fd8e

https://github.com/goyomi/coin_tracker/assets/122963246/dbf881a2-2e42-46bd-86e4-5271d82baa90

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
