const STORAGE_KEY = "nuri-rp-state-v1";

const seedState = {
  users: [
    { id: "u-james", name: "윤권상", email: "james@nuri.vc", roleTitle: "심사역" },
    { id: "u-kim", name: "김리벤", email: "kim@nuri.vc", roleTitle: "대표펀드매니저" },
    { id: "u-park", name: "박그룹", email: "park@nuri.vc", roleTitle: "이사" },
    { id: "u-lee", name: "이뷰티", email: "lee@nuri.vc", roleTitle: "팀장" },
    { id: "u-choi", name: "최헬스", email: "choi@nuri.vc", roleTitle: "심사역" },
  ],
  funds: [
    {
      id: "f-1",
      name: "누리1호-대륜 신성장 벤처투자조합",
      type: "벤처투자조합",
      incorporationDate: "2024-03-15",
      maturityDate: "2031-03-14",
      extensionYears: 2,
      committedCapital: 30000000000,
      paidInCapital: 21000000000,
      aum: 24500000000,
      leadManagerId: "u-kim",
      managerIds: ["u-james", "u-kim"],
      primarySector: "신성장",
      status: "운용중",
      gpShareRatio: 8,
      managementFeeRate: 2,
    },
    {
      id: "f-2",
      name: "누리2호 글로벌 진출 벤처투자조합",
      type: "벤처투자조합",
      incorporationDate: "2023-06-01",
      maturityDate: "2030-05-31",
      extensionYears: 2,
      committedCapital: 50000000000,
      paidInCapital: 42500000000,
      aum: 48200000000,
      leadManagerId: "u-park",
      managerIds: ["u-park"],
      primarySector: "글로벌 진출",
      status: "운용중",
      gpShareRatio: 5,
      managementFeeRate: 2,
    },
    {
      id: "f-3",
      name: "한미 크로스보더 K-Beauty 1호",
      type: "창업투자조합",
      incorporationDate: "2022-11-20",
      maturityDate: "2029-11-19",
      extensionYears: 2,
      committedCapital: 20000000000,
      paidInCapital: 20000000000,
      aum: 27800000000,
      leadManagerId: "u-lee",
      managerIds: ["u-lee"],
      primarySector: "K-Beauty",
      status: "운용중",
      gpShareRatio: 5,
      managementFeeRate: 2.2,
    },
    {
      id: "f-4",
      name: "디지털헬스케어 시드 2호",
      type: "벤처투자조합",
      incorporationDate: "2021-09-10",
      maturityDate: "2028-09-09",
      extensionYears: 2,
      committedCapital: 15000000000,
      paidInCapital: 15000000000,
      aum: 19500000000,
      leadManagerId: "u-choi",
      managerIds: ["u-choi"],
      primarySector: "디지털헬스케어",
      status: "운용중",
      gpShareRatio: 6,
      managementFeeRate: 2.3,
    },
  ],
  lps: [
    { id: "lp-1", name: "한국벤처투자(모태펀드)", type: "모태펀드", contactPerson: "김모태", contactEmail: "kvic@example.kr", contactPhone: "", notes: "" },
    { id: "lp-2", name: "한국성장금융투자운용", type: "정책기관", contactPerson: "", contactEmail: "", contactPhone: "", notes: "" },
    { id: "lp-3", name: "국민연금공단", type: "연기금공제회", contactPerson: "", contactEmail: "", contactPhone: "", notes: "" },
    { id: "lp-4", name: "KB증권", type: "금융기관", contactPerson: "", contactEmail: "", contactPhone: "", notes: "" },
    { id: "lp-5", name: "신한은행", type: "금융기관", contactPerson: "", contactEmail: "", contactPhone: "", notes: "" },
    { id: "lp-6", name: "(주)대륜홀딩스", type: "일반법인", contactPerson: "", contactEmail: "", contactPhone: "", notes: "" },
    { id: "lp-7", name: "카카오벤처스", type: "일반법인", contactPerson: "", contactEmail: "", contactPhone: "", notes: "" },
    { id: "lp-8", name: "윤권상", type: "개인", contactPerson: "윤권상", contactEmail: "james@example.com", contactPhone: "", notes: "" },
    { id: "lp-9", name: "(GP 출자) 누리벤처스", type: "일반법인", contactPerson: "", contactEmail: "", contactPhone: "", notes: "" },
  ],
  fundLps: [
    { id: "flp-1", fundId: "f-1", lpId: "lp-1", commitmentAmount: 18000000000, paidInAmount: 12600000000, ownershipRatio: 60, joinedDate: "2024-03-15" },
    { id: "flp-2", fundId: "f-1", lpId: "lp-6", commitmentAmount: 6000000000, paidInAmount: 4200000000, ownershipRatio: 20, joinedDate: "2024-03-15" },
    { id: "flp-3", fundId: "f-1", lpId: "lp-4", commitmentAmount: 3000000000, paidInAmount: 2100000000, ownershipRatio: 10, joinedDate: "2024-03-15" },
    { id: "flp-4", fundId: "f-1", lpId: "lp-8", commitmentAmount: 600000000, paidInAmount: 420000000, ownershipRatio: 2, joinedDate: "2024-03-15" },
    { id: "flp-5", fundId: "f-1", lpId: "lp-9", commitmentAmount: 2400000000, paidInAmount: 1680000000, ownershipRatio: 8, joinedDate: "2024-03-15" },
    { id: "flp-6", fundId: "f-2", lpId: "lp-2", commitmentAmount: 15000000000, paidInAmount: 12750000000, ownershipRatio: 30, joinedDate: "2023-06-01" },
    { id: "flp-7", fundId: "f-2", lpId: "lp-3", commitmentAmount: 20000000000, paidInAmount: 17000000000, ownershipRatio: 40, joinedDate: "2023-06-01" },
    { id: "flp-8", fundId: "f-2", lpId: "lp-7", commitmentAmount: 7500000000, paidInAmount: 6375000000, ownershipRatio: 15, joinedDate: "2023-06-01" },
    { id: "flp-9", fundId: "f-2", lpId: "lp-9", commitmentAmount: 7500000000, paidInAmount: 6375000000, ownershipRatio: 15, joinedDate: "2023-06-01" },
    { id: "flp-10", fundId: "f-3", lpId: "lp-5", commitmentAmount: 8000000000, paidInAmount: 8000000000, ownershipRatio: 40, joinedDate: "2022-11-20" },
    { id: "flp-11", fundId: "f-3", lpId: "lp-6", commitmentAmount: 7000000000, paidInAmount: 7000000000, ownershipRatio: 35, joinedDate: "2022-11-20" },
    { id: "flp-12", fundId: "f-3", lpId: "lp-9", commitmentAmount: 5000000000, paidInAmount: 5000000000, ownershipRatio: 25, joinedDate: "2022-11-20" },
  ],
  companies: [
    {
      id: "c-1",
      name: "(주)옥계코스메틱",
      businessNumber: "123-81-00001",
      ceoName: "김옥계",
      sector: "소비재",
      subSector: "K-Beauty",
      foundedDate: "2020-04-03",
      website: "https://example.com",
      status: "Active",
      currentStage: "Series A",
      totalInvestedAmount: 2500000000,
      currentValuation: 28000000000,
      notes: "K-Beauty 크로스보더 브랜드",
    },
    {
      id: "c-2",
      name: "토스뱅크 파트너십 솔루션",
      businessNumber: "",
      ceoName: "박핀테크",
      sector: "핀테크",
      subSector: "B2B Banking",
      foundedDate: "2019-08-12",
      website: "",
      status: "Active",
      currentStage: "Series B",
      totalInvestedAmount: 5000000000,
      currentValuation: 90000000000,
      notes: "",
    },
    {
      id: "c-3",
      name: "파낙토스",
      businessNumber: "",
      ceoName: "최뉴로",
      sector: "디지털헬스케어",
      subSector: "Neurotech",
      foundedDate: "2018-02-21",
      website: "",
      status: "Active",
      currentStage: "Series A",
      totalInvestedAmount: 1800000000,
      currentValuation: 24000000000,
      notes: "",
    },
    {
      id: "c-4",
      name: "LOAM Biotics",
      businessNumber: "",
      ceoName: "Jane Lee",
      sector: "바이오",
      subSector: "Gut-Brain",
      foundedDate: "2021-10-18",
      website: "",
      status: "Active",
      currentStage: "Pre-A",
      totalInvestedAmount: 800000000,
      currentValuation: 12000000000,
      notes: "",
    },
    {
      id: "c-5",
      name: "Aichera Korea",
      businessNumber: "",
      ceoName: "정딥테크",
      sector: "AI/딥테크",
      subSector: "Vision AI",
      foundedDate: "2017-06-01",
      website: "",
      status: "Active",
      currentStage: "Series C",
      totalInvestedAmount: 8000000000,
      currentValuation: 180000000000,
      notes: "",
    },
    {
      id: "c-6",
      name: "WayneHills Media",
      businessNumber: "",
      ceoName: "이콘텐츠",
      sector: "AI/콘텐츠",
      subSector: "Media AI",
      foundedDate: "2016-03-10",
      website: "",
      status: "Exited",
      currentStage: "Series B",
      totalInvestedAmount: 3200000000,
      currentValuation: 65000000000,
      notes: "",
    },
    {
      id: "c-7",
      name: "MEDIC Insurance Chain",
      businessNumber: "",
      ceoName: "강보험",
      sector: "인슈어테크",
      subSector: "Claims",
      foundedDate: "2020-09-01",
      website: "",
      status: "Written-off",
      currentStage: "Seed",
      totalInvestedAmount: 500000000,
      currentValuation: 0,
      notes: "",
    },
    {
      id: "c-8",
      name: "Oschonad Stem Cell",
      businessNumber: "",
      ceoName: "오바이오",
      sector: "바이오",
      subSector: "Stem Cell",
      foundedDate: "2018-12-12",
      website: "",
      status: "Active",
      currentStage: "Series A",
      totalInvestedAmount: 4500000000,
      currentValuation: 72000000000,
      notes: "",
    },
  ],
  investments: [
    { id: "i-1", fundId: "f-1", companyId: "c-1", leadAssociateId: "u-james", round: "Series A", investmentDate: "2024-08-20", investmentAmount: 2500000000, securityType: "RCPS", preMoneyValuation: 25500000000, postMoneyValuation: 28000000000, ownershipAfter: 8.9, icDate: "2024-08-01", icResolution: "조건부 승인" },
    { id: "i-2", fundId: "f-2", companyId: "c-2", leadAssociateId: "u-park", round: "Series B", investmentDate: "2023-11-05", investmentAmount: 5000000000, securityType: "우선주", preMoneyValuation: 85000000000, postMoneyValuation: 90000000000, ownershipAfter: 5.6, icDate: "2023-10-20", icResolution: "승인" },
    { id: "i-3", fundId: "f-4", companyId: "c-3", leadAssociateId: "u-choi", round: "Series A", investmentDate: "2022-04-12", investmentAmount: 1800000000, securityType: "RCPS", preMoneyValuation: 22200000000, postMoneyValuation: 24000000000, ownershipAfter: 7.5, icDate: "2022-03-30", icResolution: "승인" },
    { id: "i-4", fundId: "f-3", companyId: "c-4", leadAssociateId: "u-lee", round: "Pre-A", investmentDate: "2024-01-30", investmentAmount: 800000000, securityType: "SAFE", preMoneyValuation: 11200000000, postMoneyValuation: 12000000000, ownershipAfter: 6.7, icDate: "2024-01-10", icResolution: "승인" },
    { id: "i-5", fundId: "f-2", companyId: "c-5", leadAssociateId: "u-park", round: "Series C", investmentDate: "2024-02-18", investmentAmount: 8000000000, securityType: "우선주", preMoneyValuation: 172000000000, postMoneyValuation: 180000000000, ownershipAfter: 4.4, icDate: "2024-02-01", icResolution: "승인" },
  ],
};

const expandedSeedState = expandSeedState(seedState);

let state = normalizeState(loadState());
let currentView = "dashboard";
let currentUserId = "u-james";
let selected = { fundId: null, companyId: null };
let filters = {
  funds: { q: "", status: "all", type: "all" },
  companies: { q: "", status: "all", sector: "all", stage: "all", associate: "all", fund: "all", myOnly: false },
  lps: { q: "", fund: "all", type: "all" },
};

const root = document.querySelector("#view-root");
const pageTitle = document.querySelector("#page-title");
const primaryAction = document.querySelector("#primary-action");
const resetButton = document.querySelector("#reset-data");
const modalBackdrop = document.querySelector("#modal-backdrop");
const modalTitle = document.querySelector("#modal-title");
const modalForm = document.querySelector("#modal-form");

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.view));
});

document.querySelector("#modal-close").addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", (event) => {
  if (event.target === modalBackdrop) closeModal();
});

window.addEventListener("hashchange", () => {
  applyRouteFromHash();
  render();
});

resetButton.addEventListener("click", () => {
  if (!confirm("저장된 변경사항을 지우고 시드 데이터로 초기화할까요?")) return;
  state = normalizeState(structuredClone(expandedSeedState));
  saveState();
  render();
});

primaryAction.addEventListener("click", () => {
  if (currentView === "companies" || selected.companyId) return openCompanyModal();
  if (currentView === "lps") return openLpModal();
  if (currentView === "funds" && selected.fundId) return openInvestmentModal({ fundId: selected.fundId });
  return openFundModal();
});

applyRouteFromHash();
render();

function loadState() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? expandSeedState(JSON.parse(stored)) : structuredClone(expandedSeedState);
  } catch {
    return structuredClone(expandedSeedState);
  }
}

function expandSeedState(baseState) {
  const nextState = structuredClone(baseState);
  nextState.funds ||= [];
  nextState.lps ||= [];
  nextState.fundLps ||= [];
  nextState.companies ||= [];
  nextState.investments ||= [];
  nextState.users ||= [];

  const fundOverrides = [
    ["f-1", "카바 미래모빌리티 벤처투자조합 1호", "벤처투자조합", "모빌리티", "2031-03-14", 24600000000],
    ["f-2", "카바 AI인프라 성장조합 1호", "벤처투자조합", "AI 인프라", "2030-05-31", 49800000000],
    ["f-3", "카바 크로스보더 소비재조합 1호", "창업투자조합", "소비재", "2029-11-19", 28200000000],
    ["f-4", "카바 헬스케어 디스커버리조합 2호", "벤처투자조합", "헬스케어", "2028-09-09", 19600000000],
  ];

  fundOverrides.forEach(([id, name, type, sector, maturityDate, aum], index) => {
    const fund = nextState.funds.find((item) => item.id === id);
    if (!fund) return;
    fund.name = name;
    fund.type = type;
    fund.primarySector = sector;
    fund.maturityDate = maturityDate;
    fund.aum = aum;
    fund.leadManagerId = ["u-kim", "u-park", "u-lee", "u-choi"][index];
    fund.managerIds = [fund.leadManagerId, "u-james"];
  });

  const extraFunds = [
    ["f-5", "카바 기후회복 테크조합 1호", "벤처투자조합", "2024-07-01", "2031-06-30", 36800000000, "u-james", "기후테크", 2.1],
    ["f-6", "카바 딥테크 스케일업조합 1호", "신기술사업투자조합", "2023-10-18", "2030-10-17", 64200000000, "u-park", "딥테크", 2],
    ["f-7", "카바 코리아 SaaS 오퍼튜니티조합 1호", "벤처투자조합", "2025-01-15", "2032-01-14", 22400000000, "u-james", "SaaS", 2.3],
    ["f-8", "카바 바이오 프론티어조합 1호", "벤처투자조합", "2022-05-23", "2029-05-22", 39300000000, "u-choi", "바이오", 2.2],
    ["f-9", "카바 로보틱스 전환조합 1호", "창업투자조합", "2021-12-06", "2026-08-18", 17100000000, "u-lee", "로보틱스", 2.4],
    ["f-10", "카바 지역혁신 임팩트조합 1호", "벤처투자조합", "2024-11-04", "2031-11-03", 18800000000, "u-kim", "임팩트", 1.8],
    ["f-11", "카바 핀테크 밸류업조합 2호", "신기술사업투자조합", "2020-09-01", "2026-04-30", 31200000000, "u-park", "핀테크", 2.2],
    ["f-12", "카바 콘텐츠 IP 성장조합 1호", "창업투자조합", "2025-03-03", "2032-03-02", 14900000000, "u-lee", "콘텐츠", 2],
  ];

  extraFunds.forEach(([id, name, type, incorporationDate, maturityDate, aum, leadManagerId, primarySector, managementFeeRate]) => {
    addUnique(nextState.funds, {
      id,
      name,
      type,
      incorporationDate,
      maturityDate,
      extensionYears: 2,
      committedCapital: 0,
      paidInCapital: 0,
      aum,
      leadManagerId,
      managerIds: [leadManagerId, "u-james"],
      primarySector,
      status: "운용중",
      gpShareRatio: 5,
      managementFeeRate,
    });
  });

  const extraLps = [
    ["lp-10", "서울성장금융", "정책기관"], ["lp-11", "부산혁신펀드", "정책기관"],
    ["lp-12", "우리은행", "금융기관"], ["lp-13", "하나증권", "금융기관"],
    ["lp-14", "미래에셋캐피탈", "금융기관"], ["lp-15", "교직원공제회", "연기금공제회"],
    ["lp-16", "우정사업본부", "연기금공제회"], ["lp-17", "네오브릿지홀딩스", "일반법인"],
    ["lp-18", "라이트하우스파트너스", "일반법인"], ["lp-19", "더웨이브컴퍼니", "일반법인"],
    ["lp-20", "K-Global Ventures", "외국인"], ["lp-21", "Blue Harbour Capital", "외국인"],
    ["lp-22", "정민수", "개인"], ["lp-23", "한서윤", "개인"],
    ["lp-24", "카바파트너스", "일반법인"], ["lp-25", "(GP 출자) 카바벤처스", "일반법인"],
  ];

  extraLps.forEach(([id, name, type]) => {
    addUnique(nextState.lps, {
      id,
      name,
      type,
      contactPerson: "",
      contactEmail: "",
      contactPhone: "",
      notes: "",
    });
  });

  const extraCompanies = [
    ["c-9", "루미나소재", "제조", "첨단소재", "Active", "Series B"],
    ["c-10", "모듀페이", "핀테크", "Payment OS", "Active", "Series A"],
    ["c-11", "하루커머스", "커머스", "SMB Commerce", "Active", "Pre-A"],
    ["c-12", "파도에너지", "기후테크", "Grid Storage", "Active", "Series B"],
    ["c-13", "그린루트", "기후테크", "Carbon Logistics", "Active", "Series A"],
    ["c-14", "메디스코프", "디지털헬스케어", "Imaging AI", "Active", "Series A"],
    ["c-15", "플라나웍스", "SaaS", "Workflow", "Active", "Seed"],
    ["c-16", "셀로라바이오", "바이오", "Cell Therapy", "Active", "Series B"],
    ["c-17", "오르빗키친", "푸드테크", "Kitchen OS", "Active", "Pre-A"],
    ["c-18", "시그널네스트", "AI/딥테크", "Decision AI", "Active", "Series A"],
    ["c-19", "블루노트로보틱스", "로보틱스", "Warehouse Robotics", "Active", "Series B"],
    ["c-20", "노바진랩스", "바이오", "Genomics", "Active", "Series C"],
    ["c-21", "패킷플로우코리아", "SaaS", "Network Ops", "Active", "Series A"],
    ["c-22", "아스터모빌리티", "모빌리티", "Fleet Data", "Active", "Series B"],
    ["c-23", "퀼트AI", "AI/딥테크", "Enterprise AI", "Active", "Series A"],
    ["c-24", "라티스마인드코리아", "AI/딥테크", "Knowledge Graph", "Active", "Seed"],
    ["c-25", "카이로헬스", "디지털헬스케어", "Remote Care", "Active", "Series A"],
    ["c-26", "핀룸", "핀테크", "Wealth API", "Active", "Pre-A"],
    ["c-27", "베르다그리드", "기후테크", "Energy Analytics", "Active", "Series A"],
    ["c-28", "파운드리오에스", "제조", "Factory OS", "Active", "Series B"],
    ["c-29", "LatticeMind", "AI/딥테크", "Model Ops", "Active", "Series A"],
    ["c-30", "KairoHealth", "디지털헬스케어", "Clinic Platform", "Active", "Series B"],
    ["c-31", "Cellora Bio", "바이오", "Synthetic Bio", "Active", "Series A"],
    ["c-32", "FoundryOS", "제조", "Industrial SaaS", "Active", "Series B"],
    ["c-33", "Lumina Materials", "제조", "Battery Materials", "Active", "Series C"],
    ["c-34", "VerdaGrid", "기후테크", "Grid Software", "Active", "Series A"],
    ["c-35", "BlueNote Robotics", "로보틱스", "Service Robotics", "Active", "Series B"],
    ["c-36", "NovaGene Labs", "바이오", "Gene Editing", "Active", "Series C"],
    ["c-37", "Aster Mobility", "모빌리티", "Logistics Mobility", "Active", "Series A"],
    ["c-38", "Finloom", "핀테크", "Embedded Finance", "Active", "Series A"],
  ];

  extraCompanies.forEach(([id, name, sector, subSector, status, currentStage], index) => {
    addUnique(nextState.companies, {
      id,
      name,
      businessNumber: "",
      ceoName: ["김도윤", "이서진", "박하린", "정유민", "최민재"][index % 5],
      sector,
      subSector,
      foundedDate: `${2017 + (index % 7)}-${String((index % 12) + 1).padStart(2, "0")}-15`,
      website: "",
      status,
      currentStage,
      totalInvestedAmount: 0,
      currentValuation: 0,
      notes: "",
    });
  });

  const fundIds = nextState.funds.map((fund) => fund.id);
  const lpIds = nextState.lps.map((lp) => lp.id);
  fundIds.forEach((fundId, fundIndex) => {
    const selectedLpIds = [
      lpIds[fundIndex % lpIds.length],
      lpIds[(fundIndex + 4) % lpIds.length],
      lpIds[(fundIndex + 8) % lpIds.length],
      lpIds[(fundIndex + 13) % lpIds.length],
      "lp-25",
    ].filter(Boolean);
    const ratios = [36, 24, 18, 14, 8];
    selectedLpIds.forEach((lpId, lpIndex) => {
      const baseCommitment = (180 + fundIndex * 35) * 100000000;
      const commitmentAmount = Math.round((baseCommitment * ratios[lpIndex]) / 100);
      const paidInAmount = Math.round(commitmentAmount * (0.55 + ((fundIndex + lpIndex) % 4) * 0.1));
      if (nextState.fundLps.some((item) => item.fundId === fundId && item.lpId === lpId)) return;
      addUnique(nextState.fundLps, {
        id: `flp-auto-${fundId}-${lpId}`,
        fundId,
        lpId,
        commitmentAmount,
        paidInAmount,
        ownershipRatio: ratios[lpIndex],
        joinedDate: nextState.funds.find((fund) => fund.id === fundId)?.incorporationDate || "",
      });
    });
  });

  const rounds = ["Seed", "Pre-A", "Series A", "Series B", "Series C"];
  const securities = ["RCPS", "우선주", "보통주", "CB", "SAFE"];
  const userIds = nextState.users.map((user) => user.id);
  nextState.companies.forEach((company, companyIndex) => {
    const roundCount = companyIndex % 4 === 0 ? 3 : companyIndex % 3 === 0 ? 2 : 1;
    for (let roundIndex = 0; roundIndex < roundCount; roundIndex += 1) {
      const fundId = fundIds[(companyIndex + roundIndex) % fundIds.length];
      const investmentAmount = (5 + ((companyIndex + roundIndex) % 13)) * 100000000;
      const postMoneyValuation = investmentAmount * (8 + ((companyIndex + roundIndex) % 9));
      addUnique(nextState.investments, {
        id: `inv-auto-${company.id}-${roundIndex}`,
        fundId,
        companyId: company.id,
        leadAssociateId: userIds[(companyIndex + roundIndex) % userIds.length],
        round: rounds[Math.min(roundIndex + (companyIndex % 2), rounds.length - 1)],
        investmentDate: `${2021 + ((companyIndex + roundIndex) % 5)}-${String(((companyIndex + roundIndex) % 12) + 1).padStart(2, "0")}-20`,
        investmentAmount,
        securityType: securities[(companyIndex + roundIndex) % securities.length],
        preMoneyValuation: postMoneyValuation - investmentAmount,
        postMoneyValuation,
        ownershipAfter: round((investmentAmount / postMoneyValuation) * 100, 1),
        icDate: `${2021 + ((companyIndex + roundIndex) % 5)}-${String(((companyIndex + roundIndex) % 12) + 1).padStart(2, "0")}-05`,
        icResolution: "승인",
      });
    }
  });

  return nextState;
}

function addUnique(collection, item) {
  if (!collection.some((target) => target.id === item.id)) collection.push(item);
}

function normalizeState(nextState) {
  nextState.lps ||= [];
  nextState.fundLps ||= [];
  nextState.funds ||= [];
  nextState.companies ||= [];
  nextState.investments ||= [];
  nextState.users ||= [];
  nextState.investments.forEach((investment) => {
    investment.preMoneyValuation = Number(investment.preMoneyValuation || 0);
    investment.postMoneyValuation = Number(investment.postMoneyValuation || 0);
    investment.ownershipAfter = Number(investment.ownershipAfter || 0);
    investment.icDate ||= "";
    investment.icResolution ||= "";
  });
  nextState.funds.forEach((fund) => {
    const rows = nextState.fundLps.filter((item) => item.fundId === fund.id);
    if (!rows.length) return;
    fund.committedCapital = sum(rows, "commitmentAmount");
    fund.paidInCapital = sum(rows, "paidInAmount");
  });
  nextState.companies.forEach((company) => recalculateCompanySnapshot(nextState, company.id));
  return nextState;
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function setView(view) {
  currentView = view;
  selected = { fundId: null, companyId: null };
  syncHashFromState();
  updateActiveNav();
  render();
}

function updateActiveNav() {
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === currentView);
  });
}

function syncHashFromState() {
  const hash = routeToHash();
  if (window.location.hash !== hash) window.location.hash = hash;
}

function routeToHash() {
  if (currentView === "funds" && selected.fundId) return `#/funds/${selected.fundId}`;
  if (currentView === "funds") return "#/funds";
  if (currentView === "companies" && selected.companyId) return `#/companies/${selected.companyId}`;
  if (currentView === "companies") return "#/companies";
  if (currentView === "lps") return "#/lps";
  return "#/";
}

function applyRouteFromHash() {
  const parts = (window.location.hash || "#/").replace(/^#\/?/, "").split("/").filter(Boolean);
  currentView = parts[0] === "funds" || parts[0] === "companies" || parts[0] === "lps" ? parts[0] : "dashboard";
  selected = { fundId: null, companyId: null };
  if (currentView === "funds" && parts[1]) selected.fundId = parts[1];
  if (currentView === "companies" && parts[1]) selected.companyId = parts[1];
  updateActiveNav();
}

function render() {
  updateActiveNav();
  const titles = {
    dashboard: "대시보드",
    funds: selected.fundId ? "조합 상세" : "조합",
    companies: selected.companyId ? "포트폴리오사 상세" : "포트폴리오사",
    lps: "LP",
  };
  pageTitle.textContent = titles[currentView];
  primaryAction.textContent = getPrimaryActionLabel();

  if (currentView === "dashboard") return renderDashboard();
  if (currentView === "funds") return selected.fundId ? renderFundDetail(selected.fundId) : renderFunds();
  if (currentView === "companies") return selected.companyId ? renderCompanyDetail(selected.companyId) : renderCompanies();
  if (currentView === "lps") return renderLps();
}

function getPrimaryActionLabel() {
  if (currentView === "companies" || selected.companyId) return "포트폴리오사 추가";
  if (currentView === "lps") return "LP 추가";
  if (currentView === "funds" && selected.fundId) return "투자 내역 추가";
  return "조합 추가";
}

function renderDashboard() {
  const activeFunds = state.funds.filter((fund) => fund.status === "운용중");
  const totalAum = sum(state.funds, "aum");
  const totalCommitted = sum(state.funds, "committedCapital");
  const sectorCounts = groupCount(state.companies, "sector");
  const statusCounts = groupCount(state.companies, "status");
  const fundAum = state.funds
    .slice()
    .sort((a, b) => b.aum - a.aum)
    .slice(0, 8)
    .map((fund) => ({ label: fund.name.replace(/^카바\s/, ""), count: fund.aum }));

  root.innerHTML = `
    <section class="kpi-grid">
      ${kpi("운용 중인 조합 수", `${activeFunds.length}개`)}
      ${kpi("총 운용규모", formatKrw(totalAum))}
      ${kpi("총 출자약정총액", formatKrw(totalCommitted))}
      ${kpi("총 포트폴리오사 수", `${state.companies.length}개`)}
    </section>
    <section class="panel">
      <div class="panel-header">
        <div>
          <h2>AUM by 조합</h2>
          <p class="muted">운용규모 상위 조합 기준입니다.</p>
        </div>
      </div>
      ${barChart(fundAum, { valueFormatter: formatKrw })}
    </section>
    <section class="two-column">
      <div class="panel">
        <div class="panel-header">
          <div>
            <h2>조합 리스트</h2>
            <p class="muted">행을 클릭하면 조합 상세로 이동합니다.</p>
          </div>
          <button class="small-button" data-action="view-funds">전체 보기</button>
        </div>
        ${fundTable(state.funds.slice().sort((a, b) => b.aum - a.aum), true)}
      </div>
      <div class="panel">
        <h2>섹터별 투자 분포</h2>
        ${donutChart(sectorCounts)}
      </div>
    </section>
    <section class="panel">
      <div class="panel-header">
        <div>
          <h2>포트폴리오사 Status</h2>
          <p class="muted">Active, Exited, Written-off 등 현재 상태 분포입니다.</p>
        </div>
      </div>
      ${donutChart(statusCounts)}
    </section>
  `;

  root.querySelector("[data-action='view-funds']").addEventListener("click", () => setView("funds"));
  bindFundRows();
}

function renderFunds() {
  const filtered = state.funds.filter((fund) => {
    const q = filters.funds.q.toLowerCase();
    return (
      (!q || fund.name.toLowerCase().includes(q) || getUserName(fund.leadManagerId).toLowerCase().includes(q)) &&
      (filters.funds.status === "all" || fund.status === filters.funds.status) &&
      (filters.funds.type === "all" || fund.type === filters.funds.type)
    );
  });

  root.innerHTML = `
    <section class="panel">
      <div class="panel-header">
        <div>
          <h2>조합 관리</h2>
          <p class="muted">조합을 생성, 수정하고 상세 화면에서 투자 포트폴리오를 연결합니다.</p>
        </div>
      </div>
      <div class="filter-row">
        <input id="fund-q" placeholder="조합명 또는 대표매니저 검색" value="${escapeHtml(filters.funds.q)}" />
        ${selectHtml("fund-status", ["all", ...unique(state.funds.map((fund) => fund.status))], filters.funds.status, "상태 전체")}
        ${selectHtml("fund-type", ["all", ...unique(state.funds.map((fund) => fund.type))], filters.funds.type, "유형 전체")}
      </div>
      ${fundTable(filtered, true)}
    </section>
  `;

  bindFilter("fund-q", "funds", "q");
  bindFilter("fund-status", "funds", "status");
  bindFilter("fund-type", "funds", "type");
  bindFundRows();
}

function renderFundDetail(fundId) {
  const fund = state.funds.find((item) => item.id === fundId);
  if (!fund) return setView("funds");

  const investments = state.investments.filter((investment) => investment.fundId === fund.id);
  const fundLps = state.fundLps.filter((item) => item.fundId === fund.id);

  root.innerHTML = `
    <button class="ghost-button" data-action="back">← 조합 목록</button>
    <section class="detail-hero">
      <div class="panel-header">
        <div>
          <h2>${escapeHtml(fund.name)}</h2>
          <p class="muted">${fund.type} · ${fund.status} · 대표매니저 ${getUserName(fund.leadManagerId)}</p>
        </div>
        <div class="row-actions">
          <button class="small-button" data-action="edit-fund">수정</button>
          <button class="danger-button" data-action="delete-fund">삭제</button>
        </div>
      </div>
      <div class="info-grid">
        ${info("운용규모", formatKrw(fund.aum))}
        ${info("출자약정총액", formatKrw(fund.committedCapital))}
        ${info("출자이행률", `${round(paidInRate(fund), 1)}%`)}
        ${info("단순 수익률", `${round(simpleReturn(fund), 2)}x`)}
        ${info("결성일", fund.incorporationDate)}
        ${info("만기일", fund.maturityDate)}
        ${info("만기 알림", maturityBadge(fund))}
      </div>
    </section>
    <section class="two-column">
      <div class="panel">
        <div class="panel-header">
          <h2>포트폴리오사</h2>
          <button class="small-button" data-action="add-investment">투자 내역 추가</button>
        </div>
        ${investmentTable(investments, "fund")}
      </div>
      <div class="panel">
        <div class="panel-header">
          <h2>LP</h2>
          <button class="small-button" data-action="add-fund-lp">LP 출자 추가</button>
        </div>
        ${fundLpTable(fundLps)}
      </div>
    </section>
  `;

  root.querySelector("[data-action='back']").addEventListener("click", () => {
    selected.fundId = null;
    syncHashFromState();
    render();
  });
  root.querySelector("[data-action='edit-fund']").addEventListener("click", () => openFundModal(fund));
  root.querySelector("[data-action='delete-fund']").addEventListener("click", () => deleteFund(fund.id));
  root.querySelector("[data-action='add-investment']").addEventListener("click", () => openInvestmentModal({ fundId: fund.id }));
  root.querySelector("[data-action='add-fund-lp']").addEventListener("click", () => openFundLpModal({ fundId: fund.id }));
  bindCompanyLinks();
  bindInvestmentActions();
  bindFundLpActions();
}

function renderCompanies() {
  const sectorOptions = unique(state.companies.map((company) => company.sector));
  const filtered = state.companies.filter((company) => {
    const q = filters.companies.q.toLowerCase();
    const companyInvestments = state.investments.filter((investment) => investment.companyId === company.id);
    return (
      (!q || company.name.toLowerCase().includes(q) || company.sector.toLowerCase().includes(q)) &&
      (filters.companies.status === "all" || company.status === filters.companies.status) &&
      (filters.companies.sector === "all" || company.sector === filters.companies.sector) &&
      (filters.companies.stage === "all" || company.currentStage === filters.companies.stage) &&
      (filters.companies.associate === "all" || companyInvestments.some((investment) => investment.leadAssociateId === filters.companies.associate)) &&
      (filters.companies.fund === "all" || companyInvestments.some((investment) => investment.fundId === filters.companies.fund)) &&
      (!filters.companies.myOnly || companyInvestments.some((investment) => investment.leadAssociateId === currentUserId))
    );
  });

  root.innerHTML = `
    <section class="panel">
      <div class="panel-header">
        <div>
          <h2>포트폴리오사 관리</h2>
          <p class="muted">Status, Sector, Stage, 담당 심사역, 투자 조합 기준으로 필터링합니다.</p>
        </div>
      </div>
      <div class="filter-row">
        <input id="company-q" placeholder="회사명 또는 업종 검색" value="${escapeHtml(filters.companies.q)}" />
        ${selectHtml("company-status", ["all", ...unique(state.companies.map((company) => company.status))], filters.companies.status, "Status 전체")}
        ${selectHtml("company-sector", ["all", ...sectorOptions], filters.companies.sector, "Sector 전체")}
        ${selectHtml("company-stage", ["all", ...unique(state.companies.map((company) => company.currentStage))], filters.companies.stage, "Stage 전체")}
        ${selectFromItems("company-associate", state.users, filters.companies.associate, "담당 심사역 전체")}
        ${selectFromItems("company-fund", state.funds.map((fund) => ({ id: fund.id, name: fund.name })), filters.companies.fund, "투자 조합 전체")}
        <button class="small-button ${filters.companies.myOnly ? "active-filter" : ""}" data-action="my-deals" type="button">내 담당 딜</button>
      </div>
      ${companyTable(filtered, true)}
    </section>
  `;

  bindFilter("company-q", "companies", "q");
  bindFilter("company-status", "companies", "status");
  bindFilter("company-sector", "companies", "sector");
  bindFilter("company-stage", "companies", "stage");
  bindFilter("company-associate", "companies", "associate");
  bindFilter("company-fund", "companies", "fund");
  root.querySelector("[data-action='my-deals']").addEventListener("click", () => {
    filters.companies.myOnly = !filters.companies.myOnly;
    if (filters.companies.myOnly) filters.companies.associate = "all";
    render();
  });
  bindCompanyRows();
}

function renderCompanyDetail(companyId) {
  const company = state.companies.find((item) => item.id === companyId);
  if (!company) return setView("companies");
  const investments = state.investments
    .filter((investment) => investment.companyId === company.id)
    .sort((a, b) => new Date(a.investmentDate) - new Date(b.investmentDate));

  root.innerHTML = `
    <button class="ghost-button" data-action="back">← 포트폴리오사 목록</button>
    <section class="detail-hero">
      <div class="panel-header">
        <div>
          <h2>${escapeHtml(company.name)}</h2>
          <p class="muted">${company.sector}${company.subSector ? ` · ${company.subSector}` : ""} · ${company.currentStage}</p>
        </div>
        <div class="row-actions">
          <button class="small-button" data-action="edit-company">수정</button>
          <button class="danger-button" data-action="delete-company">삭제</button>
        </div>
      </div>
      <div class="info-grid">
        ${info("Status", statusBadge(company.status))}
        ${info("대표", company.ceoName || "-")}
        ${info("설립일", company.foundedDate || "-")}
        ${info("누적 투자금액", formatKrw(company.totalInvestedAmount))}
        ${info("현재 Valuation", company.currentValuation ? formatKrw(company.currentValuation) : "-")}
        ${info("추정 보유지분율 합계", `${round(sum(investments, "ownershipAfter"), 1)}%`)}
      </div>
    </section>
    <section class="panel">
      <div class="panel-header">
        <div>
          <h2>투자 지표 변화</h2>
          <p class="muted">라운드별 valuation과 보유지분율 변화를 표시합니다.</p>
        </div>
      </div>
      <div class="two-column">
        ${trendChart(investments, "postMoneyValuation", "Valuation", formatKrw)}
        ${trendChart(investments, "ownershipAfter", "보유지분율", (value) => `${round(value, 1)}%`)}
      </div>
    </section>
    <section class="panel">
      <div class="panel-header">
        <div>
          <h2>라운드 히스토리</h2>
          <p class="muted">라운드별 valuation, 보유지분율, 투자위원회 메타데이터를 추적합니다.</p>
        </div>
      </div>
      ${roundTimeline(investments)}
    </section>
    <section class="panel">
      <h2>투자 히스토리 상세</h2>
      ${investmentTable(investments, "company")}
    </section>
  `;

  root.querySelector("[data-action='back']").addEventListener("click", () => {
    selected.companyId = null;
    syncHashFromState();
    render();
  });
  root.querySelector("[data-action='edit-company']").addEventListener("click", () => openCompanyModal(company));
  root.querySelector("[data-action='delete-company']").addEventListener("click", () => deleteCompany(company.id));
  bindFundLinks();
  bindInvestmentActions();
}

function renderLps() {
  const rows = state.fundLps
    .map((item) => ({
      ...item,
      fund: state.funds.find((fund) => fund.id === item.fundId),
      lp: state.lps.find((lp) => lp.id === item.lpId),
    }))
    .filter((row) => row.fund && row.lp)
    .filter((row) => {
      const q = filters.lps.q.toLowerCase();
      return (
        (!q || row.lp.name.toLowerCase().includes(q) || row.fund.name.toLowerCase().includes(q)) &&
        (filters.lps.fund === "all" || row.fundId === filters.lps.fund) &&
        (filters.lps.type === "all" || row.lp.type === filters.lps.type)
      );
    });

  root.innerHTML = `
    <section class="panel">
      <div class="panel-header">
        <div>
          <h2>LP 현황</h2>
          <p class="muted">조합별로 어떤 LP가 들어갔는지 빠르게 볼 수 있도록 조합, LP 유형, 검색 필터를 제공합니다.</p>
        </div>
        <button class="small-button" data-action="add-fund-lp">LP 출자 추가</button>
      </div>
      <div class="filter-row">
        <input id="lp-q" placeholder="LP명 또는 조합명 검색" value="${escapeHtml(filters.lps.q)}" />
        ${selectFromItems("lp-fund", state.funds.map((fund) => ({ id: fund.id, name: fund.name })), filters.lps.fund, "조합 전체")}
        ${selectHtml("lp-type", ["all", ...unique(state.lps.map((lp) => lp.type))], filters.lps.type, "LP 유형 전체")}
      </div>
      ${lpTable(rows)}
    </section>
    <section class="panel">
      <div class="panel-header">
        <div>
          <h2>LP 마스터</h2>
          <p class="muted">LP 기본 정보를 생성, 수정, 삭제합니다.</p>
        </div>
        <button class="small-button" data-action="add-lp">LP 추가</button>
      </div>
      ${lpMasterTable(state.lps)}
    </section>
  `;

  bindFilter("lp-q", "lps", "q");
  bindFilter("lp-fund", "lps", "fund");
  bindFilter("lp-type", "lps", "type");
  root.querySelector("[data-action='add-fund-lp']").addEventListener("click", () => openFundLpModal());
  root.querySelector("[data-action='add-lp']").addEventListener("click", () => openLpModal());
  bindFundLinks();
  bindLpActions();
  bindFundLpActions();
}

function kpi(label, value) {
  return `<article class="kpi-card"><span>${label}</span><strong>${value}</strong></article>`;
}

function info(label, value) {
  return `<div class="info-item"><span>${label}</span><strong>${value}</strong></div>`;
}

function fundTable(funds, clickable = false) {
  if (!funds.length) return `<div class="empty-state">표시할 조합이 없습니다.</div>`;
  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>조합명</th>
            <th>유형</th>
            <th>결성일</th>
            <th>만기일</th>
            <th>만기 알림</th>
            <th class="number">운용규모</th>
            <th class="number">출자이행률</th>
            <th class="number">단순수익률</th>
            <th>대표매니저</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          ${funds
            .map(
              (fund) => `
                <tr class="${clickable ? "clickable" : ""}" data-fund-id="${fund.id}">
                  <td><strong>${escapeHtml(fund.name)}</strong></td>
                  <td>${fund.type}</td>
                  <td>${fund.incorporationDate}</td>
                  <td>${fund.maturityDate}</td>
                  <td>${maturityBadge(fund)}</td>
                  <td class="number">${formatKrw(fund.aum)}</td>
                  <td class="number">${round(paidInRate(fund), 1)}%</td>
                  <td class="number">${round(simpleReturn(fund), 2)}x</td>
                  <td>${getUserName(fund.leadManagerId)}</td>
                  <td>${fund.status}</td>
                </tr>
              `,
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function companyTable(companies, clickable = false) {
  if (!companies.length) return `<div class="empty-state">표시할 포트폴리오사가 없습니다.</div>`;
  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>회사명</th>
            <th>Sector</th>
            <th>Stage</th>
            <th>Status</th>
            <th class="number">누적 투자금액</th>
            <th class="number">Valuation</th>
          </tr>
        </thead>
        <tbody>
          ${companies
            .map(
              (company) => `
                <tr class="${clickable ? "clickable" : ""}" data-company-id="${company.id}">
                  <td><strong>${escapeHtml(company.name)}</strong></td>
                  <td>${company.sector}</td>
                  <td>${company.currentStage}</td>
                  <td>${statusBadge(company.status)}</td>
                  <td class="number">${formatKrw(company.totalInvestedAmount)}</td>
                  <td class="number">${company.currentValuation ? formatKrw(company.currentValuation) : "-"}</td>
                </tr>
              `,
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function investmentTable(investments, context) {
  if (!investments.length) return `<div class="empty-state">투자 내역이 없습니다.</div>`;
  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>${context === "fund" ? "포트폴리오사" : "조합"}</th>
            <th>Round</th>
            <th>투자일</th>
            <th class="number">투자금액</th>
            <th>증권종류</th>
            <th>담당 심사역</th>
            <th class="number">Pre-money</th>
            <th class="number">Post-money</th>
            <th class="number">보유지분율</th>
            <th>투자위원회</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
          ${investments
            .map((investment) => {
              const company = state.companies.find((item) => item.id === investment.companyId);
              const fund = state.funds.find((item) => item.id === investment.fundId);
              return `
                <tr>
                  <td>
                    <button class="small-button" data-${context === "fund" ? "company" : "fund"}-link="${context === "fund" ? company?.id : fund?.id}">
                      ${escapeHtml(context === "fund" ? company?.name || "-" : fund?.name || "-")}
                    </button>
                  </td>
                  <td>${investment.round}</td>
                  <td>${investment.investmentDate}</td>
                  <td class="number">${formatKrw(investment.investmentAmount)}</td>
                  <td>${investment.securityType}</td>
                  <td>${getUserName(investment.leadAssociateId)}</td>
                  <td class="number">${investment.preMoneyValuation ? formatKrw(investment.preMoneyValuation) : "-"}</td>
                  <td class="number">${investment.postMoneyValuation ? formatKrw(investment.postMoneyValuation) : "-"}</td>
                  <td class="number">${investment.ownershipAfter || 0}%</td>
                  <td>${investment.icDate || "-"}${investment.icResolution ? `<br><span class="muted">${escapeHtml(investment.icResolution)}</span>` : ""}</td>
                  <td>
                    <div class="row-actions">
                      <button class="small-button" data-investment-edit="${investment.id}">수정</button>
                      <button class="danger-button" data-investment-delete="${investment.id}">삭제</button>
                    </div>
                  </td>
                </tr>
              `;
            })
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function fundLpTable(fundLps) {
  if (!fundLps.length) return `<div class="empty-state">등록된 LP가 없습니다.</div>`;
  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>LP</th>
            <th>유형</th>
            <th class="number">출자약정금액</th>
            <th class="number">출자이행금액</th>
            <th class="number">지분율</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
          ${fundLps
            .map((item) => {
              const lp = state.lps.find((target) => target.id === item.lpId);
              return `
                <tr>
                  <td><strong>${escapeHtml(lp?.name || "-")}</strong></td>
                  <td>${lp?.type || "-"}</td>
                  <td class="number">${formatKrw(item.commitmentAmount)}</td>
                  <td class="number">${formatKrw(item.paidInAmount)}</td>
                  <td class="number">${item.ownershipRatio}%</td>
                  <td>
                    <div class="row-actions">
                      <button class="small-button" data-fund-lp-edit="${item.id}">수정</button>
                      <button class="danger-button" data-fund-lp-delete="${item.id}">삭제</button>
                    </div>
                  </td>
                </tr>
              `;
            })
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function lpTable(rows) {
  if (!rows.length) return `<div class="empty-state">필터 조건에 맞는 LP가 없습니다.</div>`;
  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>조합</th>
            <th>LP</th>
            <th>LP 유형</th>
            <th class="number">출자약정금액</th>
            <th class="number">출자이행금액</th>
            <th class="number">지분율</th>
            <th>참여일</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
          ${rows
            .map(
              (row) => `
                <tr>
                  <td><button class="small-button" data-fund-link="${row.fund.id}">${escapeHtml(row.fund.name)}</button></td>
                  <td><strong>${escapeHtml(row.lp.name)}</strong></td>
                  <td>${row.lp.type}</td>
                  <td class="number">${formatKrw(row.commitmentAmount)}</td>
                  <td class="number">${formatKrw(row.paidInAmount)}</td>
                  <td class="number">${row.ownershipRatio}%</td>
                  <td>${row.joinedDate || "-"}</td>
                  <td>
                    <div class="row-actions">
                      <button class="small-button" data-fund-lp-edit="${row.id}">수정</button>
                      <button class="danger-button" data-fund-lp-delete="${row.id}">삭제</button>
                    </div>
                  </td>
                </tr>
              `,
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function lpMasterTable(lps) {
  if (!lps.length) return `<div class="empty-state">등록된 LP가 없습니다.</div>`;
  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>LP</th>
            <th>유형</th>
            <th>담당자</th>
            <th>이메일</th>
            <th>전화번호</th>
            <th>참여 조합 수</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
          ${lps
            .map((lp) => {
              const fundCount = unique(state.fundLps.filter((item) => item.lpId === lp.id).map((item) => item.fundId)).length;
              return `
                <tr>
                  <td><strong>${escapeHtml(lp.name)}</strong></td>
                  <td>${lp.type}</td>
                  <td>${escapeHtml(lp.contactPerson || "-")}</td>
                  <td>${escapeHtml(lp.contactEmail || "-")}</td>
                  <td>${escapeHtml(lp.contactPhone || "-")}</td>
                  <td>${fundCount}개</td>
                  <td>
                    <div class="row-actions">
                      <button class="small-button" data-lp-focus="${lp.id}">참여 조합</button>
                      <button class="small-button" data-lp-edit="${lp.id}">수정</button>
                      <button class="danger-button" data-lp-delete="${lp.id}">삭제</button>
                    </div>
                  </td>
                </tr>
              `;
            })
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function roundTimeline(investments) {
  if (!investments.length) return `<div class="empty-state">라운드 히스토리가 없습니다.</div>`;
  return `
    <div class="timeline">
      ${investments
        .map((investment) => {
          const fund = state.funds.find((item) => item.id === investment.fundId);
          return `
            <article class="timeline-item">
              <div>
                <strong>${investment.round}</strong>
                <span>${investment.investmentDate} · ${escapeHtml(fund?.name || "-")}</span>
              </div>
              <div class="timeline-metrics">
                <span>${formatKrw(investment.investmentAmount)}</span>
                <span>Post ${investment.postMoneyValuation ? formatKrw(investment.postMoneyValuation) : "-"}</span>
                <span>지분 ${investment.ownershipAfter || 0}%</span>
              </div>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function trendChart(items, key, title, formatter) {
  const entries = items.filter((item) => Number(item[key]) > 0);
  if (!entries.length) return `<div class="empty-state">${title} 데이터가 없습니다.</div>`;
  const width = 520;
  const height = 180;
  const pad = 24;
  const values = entries.map((item) => Number(item[key]));
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min || 1;
  const points = entries
    .map((item, index) => {
      const x = entries.length === 1 ? width / 2 : pad + (index / (entries.length - 1)) * (width - pad * 2);
      const y = height - pad - ((Number(item[key]) - min) / span) * (height - pad * 2);
      return { x, y, item };
    });
  const polyline = points.map((point) => `${point.x},${point.y}`).join(" ");
  return `
    <div class="mini-chart">
      <div class="mini-chart-header">
        <strong>${title}</strong>
        <span>${formatter(values.at(-1))}</span>
      </div>
      <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${title} 변화">
        <polyline points="${polyline}" fill="none" stroke="#14b8a6" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        ${points.map((point) => `<circle cx="${point.x}" cy="${point.y}" r="5" fill="#60a5fa" />`).join("")}
      </svg>
      <div class="mini-chart-labels">
        ${entries.map((item) => `<span>${item.round}</span>`).join("")}
      </div>
    </div>
  `;
}

function barChart(entries, options = {}) {
  const max = Math.max(...entries.map((item) => item.count), 0);
  const total = sum(entries, "count");
  if (!max || !total) return `<div class="empty-state">표시할 데이터가 없습니다.</div>`;
  return `
    <div class="chart-bars">
      ${entries
        .map((item) => {
          const pct = Math.max(4, Math.round((item.count / max) * 100));
          const value = options.valueFormatter ? options.valueFormatter(item.count) : `${Math.round((item.count / sum(entries, "count")) * 100)}%`;
          return `
            <div class="chart-row">
              <strong>${escapeHtml(item.label)}</strong>
              <div class="bar-track"><div class="bar-fill" style="width:${pct}%"></div></div>
              <span class="number">${value}</span>
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

function donutChart(entries) {
  const total = sum(entries, "count");
  if (!total) return `<div class="empty-state">표시할 데이터가 없습니다.</div>`;
  let cursor = 0;
  const colors = ["#2dd4bf", "#60a5fa", "#a78bfa", "#f59e0b", "#10b981", "#f43f5e", "#38bdf8", "#c084fc"];
  const stops = entries
    .map((item, index) => {
      const start = cursor;
      const end = cursor + (item.count / total) * 100;
      cursor = end;
      return `${colors[index % colors.length]} ${start}% ${end}%`;
    })
    .join(", ");
  return `
    <div class="donut-wrap">
      <div class="donut" style="background: conic-gradient(${stops})">
        <span>${total}</span>
      </div>
      <div class="donut-legend">
        ${entries
          .map(
            (item, index) => `
              <div class="legend-row">
                <span class="legend-dot" style="background:${colors[index % colors.length]}"></span>
                <strong>${escapeHtml(item.label)}</strong>
                <span>${item.count}</span>
              </div>
            `,
          )
          .join("")}
      </div>
    </div>
  `;
}

function openFundModal(fund = null) {
  modalTitle.textContent = fund ? "조합 수정" : "조합 추가";
  modalForm.innerHTML = `
    ${field("조합명", "name", fund?.name || "", "text", true)}
    ${selectField("유형", "type", ["벤처투자조합", "창업투자조합", "신기술사업투자조합", "PEF"], fund?.type || "벤처투자조합")}
    ${field("결성일", "incorporationDate", fund?.incorporationDate || "", "date", true)}
    ${field("만기일", "maturityDate", fund?.maturityDate || "", "date", true)}
    ${field("출자약정총액", "committedCapital", fund?.committedCapital || "", "number", true)}
    ${field("출자이행총액", "paidInCapital", fund?.paidInCapital || "", "number", true)}
    ${field("운용규모", "aum", fund?.aum || "", "number", true)}
    ${selectField("대표매니저", "leadManagerId", state.users.map((user) => ({ value: user.id, label: user.name })), fund?.leadManagerId || state.users[0].id)}
    ${field("주목적 투자 분야", "primarySector", fund?.primarySector || "", "text", false)}
    ${selectField("상태", "status", ["운용중", "청산진행", "청산완료"], fund?.status || "운용중")}
    ${field("GP 출자비율 (%)", "gpShareRatio", fund?.gpShareRatio || "", "number", false)}
    ${field("관리보수율 (%, 연)", "managementFeeRate", fund?.managementFeeRate || "", "number", false)}
    ${formActions(fund ? "수정" : "추가")}
  `;
  modalForm.onsubmit = (event) => {
    event.preventDefault();
    const data = formData(modalForm);
    const payload = {
      id: fund?.id || newId(),
      name: data.name,
      type: data.type,
      incorporationDate: data.incorporationDate,
      maturityDate: data.maturityDate,
      extensionYears: Number(data.extensionYears || 2),
      committedCapital: Number(data.committedCapital),
      paidInCapital: Number(data.paidInCapital),
      aum: Number(data.aum),
      leadManagerId: data.leadManagerId,
      managerIds: fund?.managerIds || [data.leadManagerId],
      primarySector: data.primarySector,
      status: data.status,
      gpShareRatio: Number(data.gpShareRatio || 0),
      managementFeeRate: Number(data.managementFeeRate || 0),
    };
    upsert("funds", payload);
    recalculateFundCapital(payload.id);
    saveState();
    closeModal();
    render();
  };
  openModal();
}

function openCompanyModal(company = null) {
  modalTitle.textContent = company ? "포트폴리오사 수정" : "포트폴리오사 추가";
  modalForm.innerHTML = `
    ${field("회사명", "name", company?.name || "", "text", true)}
    ${field("사업자등록번호", "businessNumber", company?.businessNumber || "", "text", false)}
    ${field("대표", "ceoName", company?.ceoName || "", "text", false)}
    ${field("Sector", "sector", company?.sector || "", "text", true)}
    ${field("Sub-sector", "subSector", company?.subSector || "", "text", false)}
    ${field("설립일", "foundedDate", company?.foundedDate || "", "date", false)}
    ${field("웹사이트", "website", company?.website || "", "url", false)}
    ${selectField("Status", "status", ["Active", "Exited", "Written-off", "Bankrupt"], company?.status || "Active")}
    ${selectField("Current Stage", "currentStage", ["Seed", "Pre-A", "Series A", "Series B", "Series C", "Series D+", "Pre-IPO"], company?.currentStage || "Seed")}
    ${field("누적 투자금액", "totalInvestedAmount", company?.totalInvestedAmount || "", "number", true)}
    ${field("현재 Valuation", "currentValuation", company?.currentValuation || "", "number", false)}
    ${textareaField("메모", "notes", company?.notes || "")}
    ${formActions(company ? "수정" : "추가")}
  `;
  modalForm.onsubmit = (event) => {
    event.preventDefault();
    const data = formData(modalForm);
    upsert("companies", {
      id: company?.id || newId(),
      name: data.name,
      businessNumber: data.businessNumber,
      ceoName: data.ceoName,
      sector: data.sector,
      subSector: data.subSector,
      foundedDate: data.foundedDate,
      website: data.website,
      status: data.status,
      currentStage: data.currentStage,
      totalInvestedAmount: Number(data.totalInvestedAmount),
      currentValuation: Number(data.currentValuation || 0),
      notes: data.notes,
    });
    closeModal();
  };
  openModal();
}

function openLpModal(lp = null) {
  modalTitle.textContent = lp ? "LP 수정" : "LP 추가";
  modalForm.innerHTML = `
    ${field("LP명", "name", lp?.name || "", "text", true)}
    ${selectField("LP 유형", "type", ["모태펀드", "정책기관", "연기금공제회", "금융기관", "일반법인", "개인", "외국인"], lp?.type || "일반법인")}
    ${field("담당자", "contactPerson", lp?.contactPerson || "", "text", false)}
    ${field("이메일", "contactEmail", lp?.contactEmail || "", "email", false)}
    ${field("전화번호", "contactPhone", lp?.contactPhone || "", "tel", false)}
    ${textareaField("비고", "notes", lp?.notes || "")}
    ${formActions(lp ? "수정" : "추가")}
  `;
  modalForm.onsubmit = (event) => {
    event.preventDefault();
    const data = formData(modalForm);
    upsert("lps", {
      id: lp?.id || newId(),
      name: data.name,
      type: data.type,
      contactPerson: data.contactPerson,
      contactEmail: data.contactEmail,
      contactPhone: data.contactPhone,
      notes: data.notes,
    });
    closeModal();
  };
  openModal();
}

function openFundLpModal({ fundId = "", fundLp = null } = {}) {
  modalTitle.textContent = fundLp ? "LP 출자 수정" : "LP 출자 추가";
  modalForm.innerHTML = `
    ${selectField("조합", "fundId", state.funds.map((fund) => ({ value: fund.id, label: fund.name })), fundLp?.fundId || fundId || state.funds[0]?.id)}
    ${selectField("LP", "lpId", state.lps.map((lp) => ({ value: lp.id, label: lp.name })), fundLp?.lpId || state.lps[0]?.id)}
    ${field("출자약정금액", "commitmentAmount", fundLp?.commitmentAmount || "", "number", true)}
    ${field("출자이행금액", "paidInAmount", fundLp?.paidInAmount || "", "number", true)}
    ${field("지분율 (%)", "ownershipRatio", fundLp?.ownershipRatio || "", "number", true)}
    ${field("참여일", "joinedDate", fundLp?.joinedDate || "", "date", false)}
    ${formActions(fundLp ? "수정" : "추가")}
  `;
  modalForm.onsubmit = (event) => {
    event.preventDefault();
    const data = formData(modalForm);
    const previousFundId = fundLp?.fundId;
    upsertFundLp({
      id: fundLp?.id || newId(),
      fundId: data.fundId,
      lpId: data.lpId,
      commitmentAmount: Number(data.commitmentAmount),
      paidInAmount: Number(data.paidInAmount),
      ownershipRatio: Number(data.ownershipRatio),
      joinedDate: data.joinedDate,
    });
    recalculateFundCapital(data.fundId);
    if (previousFundId && previousFundId !== data.fundId) recalculateFundCapital(previousFundId);
    saveState();
    closeModal();
    render();
  };
  openModal();
}

function openInvestmentModal({ fundId = "", investment = null } = {}) {
  modalTitle.textContent = investment ? "투자 내역 수정" : "투자 내역 추가";
  modalForm.innerHTML = `
    ${selectField("조합", "fundId", state.funds.map((fund) => ({ value: fund.id, label: fund.name })), investment?.fundId || fundId || state.funds[0]?.id)}
    ${selectField("포트폴리오사", "companyId", state.companies.map((company) => ({ value: company.id, label: company.name })), investment?.companyId || state.companies[0]?.id)}
    ${selectField("담당 심사역", "leadAssociateId", state.users.map((user) => ({ value: user.id, label: user.name })), investment?.leadAssociateId || state.users[0]?.id)}
    ${selectField("Round", "round", ["Seed", "Pre-A", "Series A", "Series B", "Series C", "Series D+", "Pre-IPO"], investment?.round || "Series A")}
    ${field("투자 실행일", "investmentDate", investment?.investmentDate || "", "date", true)}
    ${field("투자금액", "investmentAmount", investment?.investmentAmount || "", "number", true)}
    ${selectField("증권종류", "securityType", ["보통주", "우선주", "RCPS", "CB", "BW", "SAFE"], investment?.securityType || "RCPS")}
    ${field("Pre-money Valuation", "preMoneyValuation", investment?.preMoneyValuation || "", "number", false)}
    ${field("Post-money Valuation", "postMoneyValuation", investment?.postMoneyValuation || "", "number", false)}
    ${field("투자 후 보유지분율 (%)", "ownershipAfter", investment?.ownershipAfter || "", "number", false)}
    ${field("투자위원회 일자", "icDate", investment?.icDate || "", "date", false)}
    ${textareaField("투자위원회 결정 사항", "icResolution", investment?.icResolution || "")}
    ${formActions(investment ? "수정" : "추가")}
  `;
  modalForm.onsubmit = (event) => {
    event.preventDefault();
    const data = formData(modalForm);
    const previousCompanyId = investment?.companyId;
    upsertInvestment({
      id: investment?.id || newId(),
      fundId: data.fundId,
      companyId: data.companyId,
      leadAssociateId: data.leadAssociateId,
      round: data.round,
      investmentDate: data.investmentDate,
      investmentAmount: Number(data.investmentAmount),
      securityType: data.securityType,
      preMoneyValuation: Number(data.preMoneyValuation || 0),
      postMoneyValuation: Number(data.postMoneyValuation || 0),
      ownershipAfter: Number(data.ownershipAfter || 0),
      icDate: data.icDate,
      icResolution: data.icResolution,
    });
    recalculateCompanyInvestment(data.companyId);
    if (previousCompanyId && previousCompanyId !== data.companyId) recalculateCompanyInvestment(previousCompanyId);
    saveState();
    closeModal();
    render();
  };
  openModal();
}

function openModal() {
  modalBackdrop.classList.remove("hidden");
  const firstInput = modalForm.querySelector("input, select, textarea");
  if (firstInput) firstInput.focus();
}

function closeModal() {
  modalBackdrop.classList.add("hidden");
  modalForm.innerHTML = "";
  modalForm.onsubmit = null;
}

function deleteFund(id) {
  if (!confirm("이 조합과 연결된 투자 내역을 함께 삭제할까요?")) return;
  state.funds = state.funds.filter((fund) => fund.id !== id);
  state.investments = state.investments.filter((investment) => investment.fundId !== id);
  state.fundLps = state.fundLps.filter((item) => item.fundId !== id);
  selected.fundId = null;
  saveState();
  render();
}

function deleteCompany(id) {
  if (!confirm("이 포트폴리오사와 연결된 투자 내역을 함께 삭제할까요?")) return;
  state.companies = state.companies.filter((company) => company.id !== id);
  state.investments = state.investments.filter((investment) => investment.companyId !== id);
  selected.companyId = null;
  saveState();
  render();
}

function deleteLp(id) {
  const linked = state.fundLps.some((item) => item.lpId === id);
  const message = linked
    ? "이 LP와 연결된 조합 출자 내역을 함께 삭제할까요?"
    : "이 LP를 삭제할까요?";
  if (!confirm(message)) return;
  const affectedFundIds = unique(state.fundLps.filter((item) => item.lpId === id).map((item) => item.fundId));
  state.lps = state.lps.filter((lp) => lp.id !== id);
  state.fundLps = state.fundLps.filter((item) => item.lpId !== id);
  affectedFundIds.forEach(recalculateFundCapital);
  saveState();
  render();
}

function upsertFundLp(payload) {
  const index = state.fundLps.findIndex((item) => item.id === payload.id);
  if (index >= 0) state.fundLps[index] = payload;
  else state.fundLps.push(payload);
}

function deleteFundLp(id) {
  const fundLp = state.fundLps.find((item) => item.id === id);
  if (!fundLp || !confirm("이 LP 출자 내역을 삭제할까요?")) return;
  state.fundLps = state.fundLps.filter((item) => item.id !== id);
  recalculateFundCapital(fundLp.fundId);
  saveState();
  render();
}

function recalculateFundCapital(fundId) {
  const fund = state.funds.find((item) => item.id === fundId);
  if (!fund) return;
  const rows = state.fundLps.filter((item) => item.fundId === fundId);
  if (!rows.length) return;
  fund.committedCapital = sum(rows, "commitmentAmount");
  fund.paidInCapital = sum(rows, "paidInAmount");
}

function upsertInvestment(payload) {
  const index = state.investments.findIndex((item) => item.id === payload.id);
  if (index >= 0) state.investments[index] = payload;
  else state.investments.push(payload);
}

function deleteInvestment(id) {
  const investment = state.investments.find((item) => item.id === id);
  if (!investment || !confirm("이 투자 내역을 삭제할까요?")) return;
  state.investments = state.investments.filter((item) => item.id !== id);
  recalculateCompanyInvestment(investment.companyId);
  saveState();
  render();
}

function recalculateCompanyInvestment(companyId) {
  const company = state.companies.find((item) => item.id === companyId);
  recalculateCompanySnapshot(state, companyId);
  if (!company) return;
}

function recalculateCompanySnapshot(targetState, companyId) {
  const company = targetState.companies.find((item) => item.id === companyId);
  if (!company) return;
  const rows = targetState.investments
    .filter((investment) => investment.companyId === company.id)
    .sort((a, b) => new Date(a.investmentDate) - new Date(b.investmentDate));
  company.totalInvestedAmount = sum(rows, "investmentAmount");
  const latestWithValuation = rows.filter((investment) => investment.postMoneyValuation).at(-1);
  const latestRound = rows.at(-1);
  if (latestRound) company.currentStage = latestRound.round;
  if (latestWithValuation) company.currentValuation = latestWithValuation.postMoneyValuation;
}

function upsert(collection, payload) {
  const index = state[collection].findIndex((item) => item.id === payload.id);
  if (index >= 0) state[collection][index] = payload;
  else state[collection].push(payload);
  saveState();
  render();
}

function field(label, name, value, type = "text", required = false) {
  return `
    <div class="field">
      <label for="${name}">${label}</label>
      <input id="${name}" name="${name}" type="${type}" value="${escapeHtml(value)}" ${required ? "required" : ""} />
    </div>
  `;
}

function textareaField(label, name, value) {
  return `
    <div class="field full">
      <label for="${name}">${label}</label>
      <textarea id="${name}" name="${name}">${escapeHtml(value)}</textarea>
    </div>
  `;
}

function selectField(label, name, options, selectedValue) {
  const normalized = options.map((option) =>
    typeof option === "string" ? { value: option, label: option } : option,
  );
  return `
    <div class="field">
      <label for="${name}">${label}</label>
      <select id="${name}" name="${name}">
        ${normalized.map((option) => `<option value="${option.value}" ${option.value === selectedValue ? "selected" : ""}>${escapeHtml(option.label)}</option>`).join("")}
      </select>
    </div>
  `;
}

function formActions(label) {
  return `
    <div class="form-actions">
      <button class="ghost-button" type="button" onclick="document.querySelector('#modal-close').click()">취소</button>
      <button class="primary-button" type="submit">${label}</button>
    </div>
  `;
}

function selectHtml(id, options, value, allLabel) {
  return `
    <select id="${id}">
      ${options
        .map((option) => {
          const label = option === "all" ? allLabel : option;
          return `<option value="${option}" ${option === value ? "selected" : ""}>${escapeHtml(label)}</option>`;
        })
        .join("")}
    </select>
  `;
}

function selectFromItems(id, items, value, allLabel) {
  return `
    <select id="${id}">
      <option value="all" ${value === "all" ? "selected" : ""}>${allLabel}</option>
      ${items.map((item) => `<option value="${item.id}" ${item.id === value ? "selected" : ""}>${escapeHtml(item.name)}</option>`).join("")}
    </select>
  `;
}

function bindFilter(id, group, key) {
  const element = root.querySelector(`#${id}`);
  if (!element) return;
  const eventName = element.tagName === "INPUT" ? "input" : "change";
  element.addEventListener(eventName, () => {
    filters[group][key] = element.value;
    render();
  });
}

function bindFundRows() {
  root.querySelectorAll("[data-fund-id]").forEach((row) => {
    row.addEventListener("click", () => {
      currentView = "funds";
      selected.fundId = row.dataset.fundId;
      syncHashFromState();
      render();
    });
  });
}

function bindCompanyRows() {
  root.querySelectorAll("[data-company-id]").forEach((row) => {
    row.addEventListener("click", () => {
      currentView = "companies";
      selected.companyId = row.dataset.companyId;
      syncHashFromState();
      render();
    });
  });
}

function bindFundLinks() {
  root.querySelectorAll("[data-fund-link]").forEach((button) => {
    button.addEventListener("click", () => {
      currentView = "funds";
      selected = { fundId: button.dataset.fundLink, companyId: null };
      syncHashFromState();
      render();
    });
  });
}

function bindCompanyLinks() {
  root.querySelectorAll("[data-company-link]").forEach((button) => {
    button.addEventListener("click", () => {
      currentView = "companies";
      selected = { fundId: null, companyId: button.dataset.companyLink };
      syncHashFromState();
      render();
    });
  });
}

function bindInvestmentActions() {
  root.querySelectorAll("[data-investment-edit]").forEach((button) => {
    button.addEventListener("click", () => {
      const investment = state.investments.find((item) => item.id === button.dataset.investmentEdit);
      if (investment) openInvestmentModal({ investment });
    });
  });
  root.querySelectorAll("[data-investment-delete]").forEach((button) => {
    button.addEventListener("click", () => deleteInvestment(button.dataset.investmentDelete));
  });
}

function bindLpActions() {
  root.querySelectorAll("[data-lp-focus]").forEach((button) => {
    button.addEventListener("click", () => {
      const lp = state.lps.find((item) => item.id === button.dataset.lpFocus);
      if (!lp) return;
      filters.lps.q = lp.name;
      filters.lps.fund = "all";
      filters.lps.type = "all";
      render();
    });
  });
  root.querySelectorAll("[data-lp-edit]").forEach((button) => {
    button.addEventListener("click", () => {
      const lp = state.lps.find((item) => item.id === button.dataset.lpEdit);
      if (lp) openLpModal(lp);
    });
  });
  root.querySelectorAll("[data-lp-delete]").forEach((button) => {
    button.addEventListener("click", () => deleteLp(button.dataset.lpDelete));
  });
}

function bindFundLpActions() {
  root.querySelectorAll("[data-fund-lp-edit]").forEach((button) => {
    button.addEventListener("click", () => {
      const fundLp = state.fundLps.find((item) => item.id === button.dataset.fundLpEdit);
      if (fundLp) openFundLpModal({ fundLp });
    });
  });
  root.querySelectorAll("[data-fund-lp-delete]").forEach((button) => {
    button.addEventListener("click", () => deleteFundLp(button.dataset.fundLpDelete));
  });
}

function formData(form) {
  return Object.fromEntries(new FormData(form).entries());
}

function getUserName(id) {
  return state.users.find((user) => user.id === id)?.name || "-";
}

function formatKrw(value) {
  const number = Number(value || 0);
  if (number >= 100000000) return `${round(number / 100000000, 1).toLocaleString("ko-KR")}억원`;
  if (number >= 10000) return `${round(number / 10000, 0).toLocaleString("ko-KR")}만원`;
  return `${number.toLocaleString("ko-KR")}원`;
}

function paidInRate(fund) {
  return fund.committedCapital ? (fund.paidInCapital / fund.committedCapital) * 100 : 0;
}

function simpleReturn(fund) {
  return fund.paidInCapital ? fund.aum / fund.paidInCapital : 0;
}

function statusBadge(status) {
  const className = status === "Active" || status === "운용중" ? "success" : status === "Exited" ? "warning" : "danger";
  return `<span class="badge ${className}">${status}</span>`;
}

function maturityBadge(fund) {
  const days = daysUntil(fund.maturityDate);
  if (Number.isNaN(days)) return `<span class="badge">-</span>`;
  if (days < 0) return `<span class="badge danger">만기 경과</span>`;
  if (days <= 180) return `<span class="badge warning">만기 임박</span>`;
  return `<span class="badge success">${Math.ceil(days / 365)}년 남음</span>`;
}

function daysUntil(dateText) {
  const target = new Date(`${dateText}T00:00:00`);
  if (Number.isNaN(target.getTime())) return Number.NaN;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return Math.ceil((target - today) / 86400000);
}

function groupCount(items, key) {
  const counts = items.reduce((acc, item) => {
    const label = item[key] || "미분류";
    acc[label] = (acc[label] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(counts)
    .map(([label, count]) => ({ label, count }))
    .sort((a, b) => b.count - a.count);
}

function sum(items, key) {
  return items.reduce((acc, item) => acc + Number(item[key] || 0), 0);
}

function unique(items) {
  return [...new Set(items.filter(Boolean))];
}

function newId() {
  if (window.crypto?.randomUUID) return window.crypto.randomUUID();
  return `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function round(value, digits = 0) {
  const factor = 10 ** digits;
  return Math.round(Number(value || 0) * factor) / factor;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
