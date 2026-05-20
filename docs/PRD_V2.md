# NUREERP V2 Product Requirement Document

**Status:** Updated Draft before build kickoff  
**Date:** 2026-05-20  
**Product:** NUREERP  
**Scope:** Phase 4+ 고도화 계획

---

## 0. 목적

NUREERP를 단순 VC 조합/LP/포트폴리오사 관리 MVP에서 실제 내부 운영 제품처럼 느껴지는 서비스로 확장한다.

V2의 핵심 방향은 다음과 같다.

- 브랜드 정체성 확립: NUREERP 이름, 로고, 톤앤매너 정리
- 데이터 밀도 확대: 조합, LP, 포트폴리오사, 투자 내역 샘플 데이터 확장
- 정보구조 정리: `/`, `/funds`, `/companies`, `/companies/[id]`, `/lps`, `/projects` 등 명확한 라우트 구조 도입
- 데이터 시각화 강화: 꼭 필요한 곳에만 차트 배치
- 포트폴리오사별 프로젝트 관리 기능 추가: Jira/Confluence 스타일의 티켓, 태스크, 문서, 회의록, 액션아이템 관리

---

## 1. 브랜드 / 로고

### 제품명

서비스명은 **NUREERP**로 고정한다.

### 승인된 방향

- 브랜드 / 로고 방향은 승인됨
- 로고 컨셉은 **N 모노그램 + 포트폴리오 노드**로 진행
- NUREERP의 N을 중심으로 조합, LP, 포트폴리오사를 의미하는 3개 노드를 연결하는 형태

### 브랜드 방향

NUREERP는 VC 내부 운영진이 매일 쓰는 백오피스 제품이다. 너무 화려한 마케팅 페이지처럼 보이기보다, 밝고 선명하며 신뢰감 있는 운영 대시보드처럼 보여야 한다.

### 톤앤매너

- 밝은 파스텔 톤
- 은은한 그라데이션
- 실제 금융 SaaS처럼 정돈된 데이터 밀도
- 숫자, 테이블, 상태값의 가독성 우선
- VC/금융 백오피스답게 과한 일러스트는 배제
- 상태, 경고, 수익률, 만기 등은 색상 체계로 명확히 구분

### 컬러 스키마

- Primary: Mint Teal `#2DD4BF`
- Secondary: Sky Blue `#60A5FA`
- Accent: Soft Violet `#A78BFA`
- Success: Emerald `#10B981`
- Warning: Amber `#F59E0B`
- Danger: Rose `#F43F5E`
- Background: Pastel Mist `#F7FAFC`
- Text: Deep Navy `#172033`

---

## 2. 샘플 데이터 확장

### 목표

데모 화면이 실제 운용사 내부 시스템처럼 보이도록 데이터를 확장한다.

### 권장 규모

- 조합: 현재 4개 → 10~12개
- LP: 현재 9개 → 20~25개
- 포트폴리오사: 현재 8개 → 한국어 회사 20개 추가 + 영어 회사 10개 추가
- 투자 내역: 현재 5개 → 70~100개

### 데이터 네이밍 원칙

- 실제 회사/펀드명과 혼동될 수 있는 이름은 피한다.
- 하지만 실제 시장에 있을 법한 이름을 사용한다.
- 조합명은 모두 한국어로 작성한다.
- 조합명은 **카바**로 시작한다.
- 예: `카바 OOO조합 1호`, `카바 OOO 벤처투자조합 2호`
- 포트폴리오사는 한국어 20개사, 영어 10개사를 추가한다.
- 포트폴리오사명도 실제 회사명처럼 자연스럽고 기억 가능한 이름을 사용한다.

### 조합명 예시

- 카바 미래모빌리티 벤처투자조합 1호
- 카바 AI인프라 성장조합 1호
- 카바 기후회복 테크조합 1호
- 카바 헬스케어 디스커버리조합 2호
- 카바 크로스보더 소비재조합 1호
- 카바 딥테크 스케일업조합 1호
- 카바 코리아 SaaS 오퍼튜니티조합 1호
- 카바 바이오 프론티어조합 1호
- 카바 로보틱스 전환조합 1호
- 카바 지역혁신 임팩트조합 1호

### 한국어 포트폴리오사명 예시

- 루미나소재
- 모듀페이
- 하루커머스
- 파도에너지
- 그린루트
- 메디스코프
- 플라나웍스
- 셀로라바이오
- 오르빗키친
- 시그널네스트
- 블루노트로보틱스
- 노바진랩스
- 패킷플로우코리아
- 아스터모빌리티
- 퀼트AI
- 라티스마인드코리아
- 카이로헬스
- 핀룸
- 베르다그리드
- 파운드리오에스

### 영어 포트폴리오사명 예시

- LatticeMind
- KairoHealth
- Cellora Bio
- FoundryOS
- Lumina Materials
- VerdaGrid
- BlueNote Robotics
- NovaGene Labs
- Aster Mobility
- Finloom

### 수동 입력값과 계산값 원칙

샘플 데이터에는 원천 입력값만 넣는다. 계산 결과는 샘플 데이터로 고정 저장하지 않는다.

#### 수동 입력 가능한 원천값

- LP별 출자약정금액
- LP별 출자이행금액
- 조합 AUM
- 투자금액
- pre-money valuation
- post-money valuation
- 투자 후 보유지분율
- 조합 만기일

#### 시스템 계산값

아래 값은 실제 화면 렌더링 또는 상태 업데이트 시 수식으로 계산한다.

- 조합 출자약정총액 = 해당 조합에 연결된 LP별 출자약정금액 합계
- 조합 출자이행총액 = 해당 조합에 연결된 LP별 출자이행금액 합계
- 출자이행률 = 출자이행총액 / 출자약정총액
- 단순 수익률 = AUM / 출자이행총액
- 포트폴리오사 누적 투자금액 = 해당 회사에 연결된 투자 내역의 투자금액 합계
- 포트폴리오사 현재 valuation = 최신 투자 내역의 post-money valuation
- 포트폴리오사 current stage = 최신 투자 내역의 round
- 조합 만기 임박 여부 = 오늘 기준 만기일까지 남은 일수

중요 원칙: 사용자가 추후 LP별 약정금액, 이행금액, AUM 등을 manual로 수정하면 계산값은 즉시 새 값 기준으로 반영되어야 한다.

---

## 3. 정보구조 / 라우팅

현재 앱은 하나의 `index.html` 안에서 화면만 바뀌는 SPA 방식이다.

V2에서는 실제 서비스처럼 URL 구조를 명확히 한다.

### 목표 라우트

- `/`
- `/funds`
- `/funds/[id]`
- `/companies`
- `/companies/[id]`
- `/companies/[id]/projects`
- `/companies/[id]/projects/[projectId]`
- `/companies/[id]/tickets`
- `/companies/[id]/docs`
- `/lps`
- `/projects`
- `/projects/[id]`
- `/tickets`

### 선택지 A: 정적 hash route 유지

예:

- `/#/dashboard`
- `/#/funds`
- `/#/funds/f-1`
- `/#/companies`
- `/#/companies/c-1`
- `/#/companies/c-1/projects`
- `/#/lps`

장점:

- 현재 정적 앱 구조 유지 가능
- GitHub Pages에 바로 배포 가능
- 서버 없이 동작

단점:

- 진짜 `/lps`, `/companies/[id]` URL은 아님
- 제품 구조가 데모처럼 보일 수 있음

### 선택지 B: Next.js App Router로 전환

예:

- `/`
- `/funds`
- `/funds/[id]`
- `/companies`
- `/companies/[id]`
- `/companies/[id]/projects`
- `/companies/[id]/tickets`
- `/lps`
- `/projects`
- `/projects/[id]`

장점:

- 실제 서비스 구조에 가까움
- 포트폴리오사별 프로젝트/티켓/문서 기능 확장에 적합
- 이후 Supabase/Auth/DB 전환이 쉬움
- 페이지 단위 개발과 배포가 명확함

단점:

- 프로젝트 구조 전환 필요
- 설치/빌드/배포 환경 필요

### 추천

V2에서 **Next.js App Router 전환**을 추천한다.

포트폴리오사별로 프로젝트, 티켓, 일정관리를 붙일 계획이므로 `/companies/[id]`와 그 하위 라우트는 필수 구조로 본다.

---

## 4. 차트 / 데이터 시각화 범위

### 원칙

차트는 적재적소에만 배치한다. 모든 페이지에 그래프를 많이 넣지 않는다. 운영자가 빠르게 현황을 판단해야 하는 지점에만 둔다.

### 대시보드

유지할 차트:

- AUM by 조합: 막대 차트
- 섹터별 투자 분포: 도넛 차트
- Status별 포트폴리오사 수: compact donut 또는 stacked bar

제외할 차트:

- 출자이행률 분포
- 만기 임박 조합 timeline strip

### 조합 페이지

조합 리스트에서 만기가 **6개월 이하**로 남은 조합은 `만기 임박` 문구를 표시한다.

조합 상세 페이지에는 그래프를 과하게 넣지 않는다. 상세 페이지의 핵심은 숫자, LP 목록, 투자 포트폴리오 목록이다.

제외할 차트:

- 출자약정 vs 출자이행 progress chart
- LP 지분율 도넛
- 투자금액 by 포트폴리오사
- 라운드별 투자금액 추이

### 포트폴리오사 상세

유지할 차트:

- valuation 변화 line chart
- 라운드별 보유지분율 변화 line chart 또는 compact trend

단, 차트는 투자 히스토리 위/아래에 보조적으로 배치한다.

### LP 페이지

LP 페이지에는 그래프를 넣지 않는다.

조합별 LP 구성, LP 유형, 검색 필터, 출자약정/이행 금액을 테이블 중심으로 제공한다.

### 프로젝트 관리 페이지

유지할 차트/카운터:

- 티켓 상태별 개수
- 담당자별 open ticket 수
- 마감 임박/연체 티켓 카운터

---

## 5. 포트폴리오사별 프로젝트 관리 기능

### 배경

VC 내부에서 포트폴리오사 관리는 투자 데이터만으로 끝나지 않는다. 각 회사마다 후속 투자, 주주간 계약, 리포팅, 이사회, 채용 지원, 사업개발, 리스크 관리, exit 준비 등 반복적인 운영 과제가 생긴다.

따라서 NUREERP에는 포트폴리오사별로 Jira/Confluence 스타일의 프로젝트 관리 레이어를 추가한다.

---

## 6. 신규 엔티티 제안

### 6.1 Project

포트폴리오사와 연결되는 업무 공간.

| Field | Type | Note |
|---|---|---|
| id | UUID | PK |
| company_id | UUID | FK |
| project_name | string | 예: Series B Follow-on, Board Reporting |
| project_type | enum | Follow-on / Board / KPI / Legal / Hiring / BD / Exit / Risk |
| status | enum | Not Started / Active / Blocked / Done / Archived |
| owner_id | UUID | 내부 담당자 |
| start_date | date | 시작일 |
| target_date | date | 목표일 |
| priority | enum | Low / Medium / High / Critical |
| description | text | 설명 |

### 6.2 Ticket

실제 업무 단위.

| Field | Type | Note |
|---|---|---|
| id | UUID | PK |
| project_id | UUID | FK |
| company_id | UUID | FK |
| title | string | 티켓 제목 |
| description | text | 상세 설명 |
| status | enum | Backlog / To Do / In Progress / Review / Done |
| priority | enum | P3 / P2 / P1 / P0 |
| assignee_id | UUID | 담당자 |
| due_date | date | 마감일 |
| tags | string[] | 태그 |
| linked_investment_id | UUID | optional |
| created_at | timestamp | 생성일 |
| updated_at | timestamp | 수정일 |

### 6.3 Document

Confluence 스타일 문서.

| Field | Type | Note |
|---|---|---|
| id | UUID | PK |
| company_id | UUID | FK |
| project_id | UUID | optional |
| title | string | 문서 제목 |
| doc_type | enum | Memo / Meeting Note / Board Note / IC Memo / KPI Review / Risk Note |
| body | markdown | 문서 본문 |
| owner_id | UUID | 작성자 |
| created_at | timestamp | 생성일 |
| updated_at | timestamp | 수정일 |

### 6.4 Comment

티켓/문서 댓글.

| Field | Type | Note |
|---|---|---|
| id | UUID | PK |
| target_type | enum | Ticket / Document |
| target_id | UUID | FK-like |
| author_id | UUID | 작성자 |
| body | text | 댓글 |
| created_at | timestamp | 생성일 |

### 6.5 Activity

회사별/프로젝트별 활동 로그.

| Field | Type | Note |
|---|---|---|
| id | UUID | PK |
| company_id | UUID | FK |
| project_id | UUID | optional |
| actor_id | UUID | 실행자 |
| activity_type | enum | TicketCreated / StatusChanged / Commented / DocumentCreated / DueDateChanged |
| message | string | 표시 문구 |
| created_at | timestamp | 생성일 |

---

## 7. 프로젝트 관리 기능 후보

현실적으로 구현 가능한 범위로 각 군마다 6~8개 기능만 남긴다.

### Core

- 회사별 프로젝트 생성/수정/삭제
- 프로젝트 상태 관리
- 티켓 생성/수정/삭제
- Kanban 보드
- 리스트 뷰
- 담당자 필터
- 우선순위 필터
- 회사 상세에서 연결된 프로젝트/티켓 노출

### Useful

- 티켓 댓글
- 티켓 태그
- 티켓 activity log
- 티켓과 투자 내역 연결
- 문서 작성/수정
- 회의록 템플릿
- Board meeting note 템플릿
- Follow-on investment checklist

### Advanced

- Saved views
- Calendar view
- Due date reminder
- 프로젝트별 progress score
- 포트폴리오사별 support load score
- 담당자별 open ticket workload
- Markdown editor
- Risk register

### 제외 또는 후순위

- 실시간 협업 편집
- 외부 사용자 초대
- 복잡한 권한 체계
- 파일 첨부
- Slack/Jira 외부 연동
- Email 알림
- AI 자동 요약
- 티켓 bulk update

---

## 8. V2 구현 단계 제안

### Phase 4 - Brand & IA

- NUREERP 로고 적용
- 톤앤매너/디자인 시스템 적용
- 데이터 확장
- 라우팅 방식 확정 및 적용
- 대시보드 차트 추가
- 포트폴리오사 상세 차트 추가

### Phase 5 - Portfolio Project Layer

- Project / Ticket 데이터 모델 추가
- 회사 상세에 Projects / Tickets 섹션 추가
- 전체 Projects 페이지 추가
- Kanban 보드 추가
- 티켓 CRUD
- 담당자/상태/우선순위/마감일 필터

### Phase 6 - Knowledge Layer

- Document 데이터 모델 추가
- 회사별 문서 페이지
- 회의록/Board note 템플릿
- 티켓과 문서 연결
- Activity log

### Phase 7 - Service-grade Refactor

- Next.js + TypeScript 전환
- Supabase PostgreSQL 연동
- Supabase Auth
- 실제 `/funds`, `/companies`, `/companies/[id]`, `/lps`, `/projects` 라우트
- 배포 파이프라인 정리

---

## 9. 현재까지 결정된 사항

- 브랜드/로고 방향 승인
- 로고는 N 모노그램 + 포트폴리오 노드로 진행
- 조합 샘플 데이터는 한국어, `카바` prefix 사용
- 포트폴리오사 샘플 데이터는 한국어 20개사 + 영어 10개사 추가
- 계산값은 샘플 데이터로 저장하지 않고 시스템 수식으로 산출
- `/companies/[id]`와 포트폴리오사별 하위 라우트는 필수
- LP 페이지에는 그래프를 넣지 않음
- 조합 상세 페이지에는 그래프를 과하게 넣지 않음
- 조합 리스트에서 만기 6개월 이하 조합에 `만기 임박` 문구 표시
- 프로젝트 관리 기능은 각 군마다 6~8개 수준으로 제한

---

## 10. 개발 시작 전 체크리스트

### Product

- [ ] Phase 4부터 진행할지 최종 승인
- [ ] 이번 사이클에서 Next.js 전환까지 바로 할지, 정적 앱 개선 후 전환할지 결정
- [ ] 브랜드 로고를 SVG 코드로 만들지, 이미지 에셋으로 만들지 결정
- [ ] 샘플 데이터 규모 확정: 조합 10~12개, 포트폴리오사 +30개, 투자 내역 70~100개
- [ ] 프로젝트 관리 기능은 Phase 5에서 Project + Ticket + Kanban 중심으로 시작할지 승인

### UX / Design

- [ ] 밝은 파스텔 + 민트/스카이/바이올렛 그라데이션 확정
- [ ] 대시보드 차트 3개 확정: AUM by 조합, 섹터별 투자 분포, Status별 포트폴리오사 수
- [ ] 포트폴리오사 상세 차트 확정: valuation 변화, 보유지분율 변화
- [ ] 조합 페이지 만기 임박 기준 확정: 6개월 이하
- [ ] LP 페이지는 테이블 중심으로 확정

### Data / Logic

- [ ] 계산값과 입력값을 코드 레벨에서 명확히 분리
- [ ] LP 매핑 변경 시 조합 출자약정총액/출자이행총액 재계산
- [ ] 투자 내역 변경 시 포트폴리오사 누적 투자금액/current valuation/current stage 재계산
- [ ] seed 데이터 초기화 시 계산값이 고정 저장되지 않도록 정리
- [ ] 수동 입력 변경 후 모든 계산 필드가 즉시 반영되는지 테스트

### Engineering

- [ ] 현재 정적 앱에서 Phase 4 UI/데이터 개선 먼저 진행
- [ ] 또는 Next.js App Router로 전환 후 Phase 4 진행
- [ ] 파일 구조 재정리 필요 여부 결정
- [ ] 차트 구현 방식 결정: 직접 SVG/CSS 차트 vs 라이브러리
- [ ] GitHub push 전 `node --check app.js` 또는 빌드 체크 실행

---

## 11. 추천 실행안

추천 실행 순서는 다음이다.

1. Phase 4 시작
2. 현재 정적 앱을 유지한 상태에서 브랜드, 데이터, 차트, UI를 먼저 크게 개선
3. 동시에 라우팅은 hash route로 임시 개선하거나, 바로 Next.js 전환을 별도 결정
4. Phase 5에서 Project + Ticket + Kanban을 추가
5. Phase 6에서 Document, 회의록 템플릿, Activity log 추가

가장 현실적인 선택지는 **정적 앱에서 Phase 4를 빠르게 구현한 뒤, 기능 구조가 굳으면 Next.js로 전환**하는 방식이다.
