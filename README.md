# NUREERP

VC 하우스 내부 임직원이 사용하는 조합, LP, 포트폴리오사 관리 대시보드 MVP입니다.

## 현재 구현 범위

### Phase 1 - MVP

- 조합 CRUD
- 포트폴리오사 CRUD
- 조합과 포트폴리오사 투자 내역 매핑
- 메인 대시보드 KPI
- 조합 상세 페이지
- 포트폴리오사 상세 페이지
- 샘플 시드 데이터

### Phase 2 - LP & 수익률

- LP 마스터 CRUD
- 조합과 LP 출자 매핑 CRUD
- 출자약정총액, 출자이행총액 자동 계산
- 출자이행률, 단순 수익률 자동 표시
- LP 페이지 필터
  - 조합
  - LP 유형
  - LP명/조합명 검색

### Phase 3 - 심화 트래킹

- 라운드별 투자 히스토리
- Pre-money / Post-money valuation 관리
- 보유지분율 관리
- 증권종류 구분
- 투자위원회 일자와 결정 사항 기록
- 조합 만기 임박 배지
- 담당 심사역 필터
- 내 담당 딜 보기

## 실행 방법

별도 빌드 없이 `index.html`을 브라우저에서 열면 됩니다.

데이터는 브라우저 `localStorage`에 저장됩니다. 상단의 `시드 데이터 초기화` 버튼으로 초기 샘플 데이터로 되돌릴 수 있습니다.

## 파일 구조

- `index.html`: 앱 진입점
- `styles.css`: UI 스타일
- `app.js`: 데이터 모델, 렌더링, CRUD 로직

## 다음 후보 작업

- Next.js + Supabase 기반 앱으로 전환
- 인증 추가
- Supabase PostgreSQL 스키마와 seed SQL 작성
- 조합/LP/투자 내역 CSV import/export
- 실제 DIVA 전자공시 기반 시드 데이터 정리
