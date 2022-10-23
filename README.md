<img src="https://user-images.githubusercontent.com/103613612/193570533-c49a54fc-f83b-40a1-88be-2467356caf2c.png" width="100" height="100" />

# 사조의 공방

### 📍 프로젝트 소개
---
#### 모두의 공방을 모티브로 기능 구현한 프로젝트입니다.
#### https://modugoods.com/
###### 모두의 공방 페이지 리뉴얼로 인하여 기존 페이지를 부분 참조, 추가로 기획부터 디자인까지 진행했습니다  

<img width="1221" alt="image" src="https://user-images.githubusercontent.com/108418225/197371313-0ca9897a-f849-4e64-91f5-f093a100d21f.png">



<br />

### 📍 개발기간 및 인원
---

- 개발 기간: 2022-09-19 ~ 2022-09-30 (2주)
- 개발 인원: 5명  
  - FE : 김유현, 안승섭, 정세영 (3명) 
  - BE : 이해연, 박지은 (2명)

<br />

### 📍 프로젝트 시연 영상
---
- https://youtu.be/6ZXFcOoN6Rw

<br />

### 📍 GitHub Repo 및 팀 노션 주소
---

- [Front-End](https://github.com/wecode-bootcamp-korea/justcode-6-2nd-team4-front/new/main)
- [Back-End](https://github.com/wecode-bootcamp-korea/justcode-6-2nd-team4-back)
- [Notion](https://www.notion.so/wecode/4-7769dc42856248299aa5d32009b313e9)

<br />

### 📍 사용 툴 
---

- 사용 언어 : `JavaScript`
- 런타임 환경 : `Node.js`
- 프레임워크 : `Express`
- 데이터베이스 : `MySQL`
- HTTP 요청/응답 : `Postman`  
- 협업 : `Github, Slack, Notion, Zep, Zoom`

<br />

### 📍 DB Modeling
---

- [dbdiagram.io](https://dbdiagram.io/d/63392add7b3d2034ff04953a)
<img width="825" alt="image" src="https://user-images.githubusercontent.com/103613612/193611644-48f551db-dd09-4ee6-8573-f637e0419459.png">

<br />

### 📍 실행 방법
---

#### Step 1. 레포지토리 clone

```
git clone https://github.com/wecode-bootcamp-korea/justcode-6-2nd-team4-back
```

#### Step 2. 폴더로 이동

```
cd justcode-6-2nd-team4-back
```

#### Step 3. 의존성들 설치

```
npm install
```

#### Step 4. .env 파일 생성
```
(로컬에 미리 DB/Schema를 만들어 주세요.)

DATABASE_URL = mysql://USERNAME:PASSWORD@127.0.0.1:3306/DATABASE
TYPEORM_CONNECTION = mysql
TYPEORM_HOST = 127.0.0.1
TYPEORM_PORT = 3306
TYPEORM_USERNAME = 계정
TYPEORM_PASSWORD = 비밀번호
TYPEORM_DATABASE = 미리 생성한 데이터베이스 이름

PORT = 애플리케이션 서버 포트 번호
```
#### Step 5. DataBase Tables 생성

```
dbmate up
```

#### Step 6. 실행

```
node server.js
```  

<br />

### 📍 프로젝트 구조
---

MVC pattern에 Service가 추가된 Layered achitecture 로 routers - controllers - services - models 의 구조 
```
📦justcode-6-2nd-team4-back
 ┣ 📂controllers
 │    ┗ user_controller.js
 │    ┗ mypage_controller.js
 │    ┗ product_controller.js
 │    ┗ productdetail_controller.js
 │    ┗ productreview_controller.js
 │    ┗ cart_controller.js
 │    ┗ payment_controller.js
 ┗ 📂middlewares
 │    ┗ authorization.js
 ┣ 📂models
 │    ┗ init.js
 │    ┗ user_dao.js
 │    ┗ mypage_dao.js
 │    ┗ product_dao.js
 │    ┗ productdetail_dao.js
 │    ┗ productreview_dao.js
 │    ┗ cart_dao.js
 │    ┗ payment_dao.js
 ┣ 📂routes
 │    ┗ index.js
 │    ┗ user_router.js
 │    ┗ mypage_router.js
 │    ┗ product_router.js
 │    ┗ productdetail_router.js
 │    ┗ productreview_router.js
 │    ┗ cart_router.js
 │    ┗ payment_router.js
 ┣ 📂services
 │    ┗ user_service.js
 │    ┗ mypage_service.js
 │    ┗ product_service.js
 │    ┗ productdetail_service.js
 │    ┗ productreview_service.js
 │    ┗ cart_service.js
 │    ┗ payment_service.js
 ┣ 📂public/images
 ┣ 📂db   
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜app.js
 ┗ 📜server.js
```
- `controllers` : client의 요청과 응답을 처리
- `services` : 비즈니스 로직 처리
- `models` : 데이터베이스 연결과 데이터 처리
- `public/images` : 로컬에 저장하여 사용되는 제품 이미지들


<br />

### 📍 담당 기능
---

- 메인 화면 제품 리스트 조회 API
  - 한달 내 신제품과 인기 제품을 조회합니다.
  - 16개 제품으로 표현되는 슬라이드이므로 갯수를 제한하여 조회합니다.
  - BETWEEN DATE_ADD() AND NOW() 를 활용하여 한달 내 신제품을 조회했습니다.
  - 정규화로 분리된 product_liked 테이블에서 제품별 수를 COUNT한 sub query를 구성, LEFT JOIN 하여 인기 제품을 조회했습니다.
  - 할인 유무에 따른 가격 표시와 무료 배송 표시를 위해 CASE WHEN 을 활용했습니다.

<br />

- 카테고리별 상품 리스트 조회 & 정렬 API
  - 각 카테고리별 제품의 총 갯수와 리스트를 조회합니다.
  - 요청에 들어온 query params값에 따라 ORDER BY 문이 변경되도록 if문 로직을 구성하여 추천순, 가격 오름차순, 가격 내림차순, 등록순, 판매량순으로 제품이 정렬됩니다.
  - 무한 스크롤링 구성에서 페이지 스크롤 시 첫 제품부터 계속해서 조회되도록 limit, offset을 구성했습니다.

<br />

- 장바구니 CRUD API
  - 모두의 공방 사이트에서 같은 제품, 옵션의 경우 제대로 장바구니에 추가되지 않던 점을 고려하여 로직을 수정했습니다. 
  - 제품 옵션 선택에 따라 장바구니의 추가 로직이 달라집니다.
    - 기존 장바구니에서 동일 제품, 옵션은 수량이 변경되고 동일 제품, 다른 옵션 / 새 제품은 장바구니에 추가됩니다.
    - 이를 위해 장바구니 안의 해당 제품 옵션을 배열로 정리, 또한 req를 통해 들어온 제품의 옵션도 배열로 정리하여 filter와 includes를 이용, 비교하는 방식으로 로직이 수행됩니다. 
  - 유저의 고유 키값을 조건으로 전체 장바구니 목록을 조회합니다.
    - 장바구니 조회 시 제품 정보, 선택 옵션, 제작 공방의 정보, 할인율에 따른 가격, 배송비를 더한 주문 가격, 배송 정보를 JSON_ARRAYAGG와 JSON_OBJECT를 활용해 조회합니다.
  - 장바구니 고유 키값을 조건으로 해당 장바구니를 삭제할 수 있습니다.

<br />

- 회원가입 / 로그인 API
  - 본래 사이트의 기능에선 없던 자체 회원가입 / 로그인 기능을 추가하였습니다.
  - 프로젝트 일정에 맞춰 본래의 배송지 수정 페이지를 구현하기보단 회원가입 페이지에 병합했습니다.
  - User Check Middleware를 두어 로그인이 필요한 기능에 인증 / 인가를 거치도록 했습니다.


<br />

### 📍담당 기능 API Docs
---
- [API Docs](https://documenter.getpostman.com/view/22723173/2s7Z7VLazp)


<br />

---

### 📍 그 외 기능 분담

#### 김유현
- 회원가입
- 로그인
- 마이페이지

#### 안승섭
- 제품 상세 화면 UI
- API 연동
- 각종 버그 수정

#### 정세영
- 메인 화면 UI
- 제품 리스트 화면 UI
- 장바구니 화면 UI API 연동

#### 이해연
- 제품 상세페이지 API
- 리뷰 조회, 작성 API
- 마이페이지 API
- 좋아요 API

#### 박지은
- 메인 화면 제품 리스트 조회 API
- 카테고리별 제품 리스트 조회 및 정렬 API
- 장바구니 CRUD API
- 회원가입 / 로그인 API
- User Check Middleware
