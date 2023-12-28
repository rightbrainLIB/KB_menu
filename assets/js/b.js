const bookmark = () => {
  const btn = document.querySelectorAll(".bookmark.example");
  const addMenu = document.querySelector("li.add");
  btn.forEach((el, index) => {
    el.addEventListener("click", (e) => {
      if (!e.target.classList.contains("empty")) {
        e.target.classList.toggle("active");
        addMenu.classList.toggle("none");
        if (addMenu.classList.contains("none")) {
          addMenu.style.maxHeight = addMenu.scrollHeight + "px";
          addMenu.style.opacity = 1;
        } else {
          addMenu.style.maxHeight = 0;
          addMenu.style.opacity = 0;
        }
      }
    });
  });
};

const tab = () => {
  console.log("tab-data : start");
  const d = [
    { category: "조회", subcategory: "", item: "" },
    { category: "", subcategory: "전체계좌조회", item: "" },
    { category: "", subcategory: "통합거래내역조회", item: "" },
    { category: "", subcategory: "해지계좌조회", item: "" },
    { category: "", subcategory: "휴면계좌조회", item: "" },
    { category: "", subcategory: "휴면예금·보험금 찾기", item: "" },
    { category: "", subcategory: "수수료 납부내역 조회", item: "" },
    { category: "", subcategory: "ID모아보기 계좌조회", item: "" },
    {
      category: "",
      subcategory: "계좌통합관리서비스(어카운트인포)",
      item: "",
    },
    { category: "이체", subcategory: "", item: "" },
    { category: "", subcategory: "이체", item: "" },
    { category: "", subcategory: "이체결과조회(이체확인증)", item: "" },
    { category: "", subcategory: "자동이체", item: "자동이체 등록" },
    { category: "", subcategory: "", item: "자동이체 조회/변경/해지" },
    { category: "", subcategory: "이체한도 조회/변경", item: "" },
    {
      category: "",
      subcategory: "이체관리",
      item: "자주쓰는계좌 등록/관리",
    },
    { category: "", subcategory: "", item: "빠른이체 관리" },
    { category: "", subcategory: "", item: "단축이체 관리" },
    { category: "", subcategory: "", item: "출금계좌 관리" },
    { category: "", subcategory: "", item: "착오송금 반환" },
    { category: "", subcategory: "", item: "장기미사용 이체제한해제" },
    { category: "", subcategory: "", item: "전화승인비밀번호 오류해제" },
    { category: "", subcategory: "잔액모으기", item: "잔액모으기" },
    { category: "", subcategory: "", item: "잔액모으기 예약" },
    { category: "", subcategory: "", item: "잔액모으기 예약관리" },
    { category: "", subcategory: "ID모아보기", item: "ID모아보기 이체" },
    { category: "", subcategory: "", item: "ID모아보기 이체결과조회" },
    {
      category: "",
      subcategory: "계좌이동서비스(자동이체통합관리)",
      item: "",
    },
    { category: "", subcategory: "리브포켓이체", item: "" },
    { category: "상품가입", subcategory: "", item: "" },
    { category: "", subcategory: "금융상품", item: "" },
    { category: "", subcategory: "입출금+카드", item: "" },
    { category: "", subcategory: "적금", item: "" },
    { category: "", subcategory: "정기예금", item: "" },
    { category: "", subcategory: "대출", item: "전체상품(대출)" },
    { category: "", subcategory: "", item: "신용대출" },
    { category: "", subcategory: "", item: "부동산 담보대출" },
    { category: "", subcategory: "", item: "전세/월세/반환보증" },
    { category: "", subcategory: "", item: "예금담보대출" },
    { category: "", subcategory: "", item: "집단중도금대출/이주비대출" },
    { category: "", subcategory: "", item: "자동차대출" },
    { category: "", subcategory: "", item: "주택도시기금대출" },
    { category: "", subcategory: "", item: "장기카드대출(카드론)" },
    { category: "", subcategory: "", item: "대출진행현황" },
    { category: "", subcategory: "", item: "한국신용정보원 개인대출현황" },
    { category: "", subcategory: "", item: "내게맞는 대출찾기" },
    { category: "", subcategory: "투자상품", item: "펀드" },
    { category: "", subcategory: "", item: "신탁" },
    { category: "", subcategory: "", item: "ISA" },
    { category: "", subcategory: "", item: "퇴직연금" },
    { category: "", subcategory: "", item: "보험" },
    { category: "", subcategory: "", item: "케이봇쌤 포트폴리오" },
    { category: "", subcategory: "청약/채권", item: "" },
    { category: "", subcategory: "외환", item: "" },
    { category: "", subcategory: "골드/실버", item: "" },
    { category: "", subcategory: "은행-증권 연계", item: "" },
    {
      category: "상품관리/해지",
      subcategory: "",
      item: "",
    },
    {
      category: "",
      subcategory: "계좌",
      item: "계좌비밀번호 관리",
    },
    { category: "", subcategory: "", item: "계좌숨기기 관리" },
    { category: "", subcategory: "", item: "KB내맘대로계좌번호 서비스" },
    { category: "", subcategory: "예적금", item: "예금 신규결과조회" },
    { category: "", subcategory: "", item: "예금 한도관리" },
    { category: "", subcategory: "", item: "비과세종합저축 자료제출" },
    { category: "", subcategory: "", item: "예금전환" },
    { category: "", subcategory: "", item: "자동재예치(재가입)/통지여부" },
    { category: "", subcategory: "", item: "상품만기알림서비스 신청/해지" },
    { category: "", subcategory: "", item: "만기 자동해지 신청" },
    { category: "", subcategory: "", item: "예금해지/해지예상조회" },
    { category: "", subcategory: "", item: "예/적금 분할인출" },
    {
      category: "",
      subcategory: "",
      item: "비대면 예적금 해지제한 신청/조회",
    },
    { category: "", subcategory: "", item: "KB짝꿍통장" },
    { category: "", subcategory: "", item: "예금잔액조회 통보" },
    { category: "", subcategory: "대출", item: "이자/월부금 입금" },
    { category: "", subcategory: "", item: "대출금 상환" },
    { category: "", subcategory: "", item: "대출계약철회" },
    { category: "", subcategory: "", item: "대출한도 변경/해지" },
    { category: "", subcategory: "", item: "대출 기한연장" },
    { category: "", subcategory: "", item: "개인대출 금리인하요구권" },
    { category: "", subcategory: "", item: "금리산정내역서 조회" },
    {
      category: "",
      subcategory: "",
      item: "통장자동대출 이자납입내역 조회",
    },
    { category: "", subcategory: "", item: "개인대출 통지서비스 변경" },
    {
      category: "",
      subcategory: "",
      item: "개인대출 할부금(이자) 납입일 변경",
    },
    { category: "", subcategory: "펀드", item: "보유펀드 진단" },
    { category: "", subcategory: "", item: "펀드 기준가/수익률 조회" },
    { category: "", subcategory: "", item: "펀드 입금" },
    { category: "", subcategory: "", item: "펀드 예약취소" },
    { category: "", subcategory: "", item: "펀드 환매/해약 관리" },
    { category: "", subcategory: "", item: "펀드 자동환매서비스" },
    { category: "", subcategory: "", item: "펀드 정기지급서비스" },
    { category: "", subcategory: "", item: "펀드 한도관리" },
    { category: "", subcategory: "", item: "펀드 계약기간 변경" },
    { category: "", subcategory: "", item: "타기관 연금계좌 가져오기" },
    { category: "", subcategory: "", item: "연금펀드 운용관리" },
    { category: "", subcategory: "", item: "연금펀드 수령신청/변경" },
    { category: "", subcategory: "", item: "라떼연금 관리" },
    { category: "", subcategory: "", item: "펀드 SMS 신청관리" },
    { category: "", subcategory: "", item: "펀드투자정보" },
    { category: "", subcategory: "", item: "승낙확인" },
    { category: "", subcategory: "", item: "펀드 청약철회" },
    { category: "", subcategory: "청약/채권", item: "입금/자동이체" },
    { category: "", subcategory: "", item: "청약 과세전환" },
    { category: "", subcategory: "", item: "청약 소득공제관리" },
    { category: "", subcategory: "", item: "청약통장 순위조회" },
    {
      category: "",
      subcategory: "",
      item: "청약예부금 이자지급 조회/이체",
    },
    {
      category: "",
      subcategory: "",
      item: "국민주택채권 예약매입 결과조회",
    },
    { category: "", subcategory: "", item: "국민주택채권 조회/변경/취소" },
    {
      category: "",
      subcategory: "",
      item: "국민주택채권 고객부담금액 조회",
    },
    { category: "", subcategory: "신탁", item: "신탁 승낙확인" },
    { category: "", subcategory: "", item: "신탁 기준가/수익률 조회" },
    { category: "", subcategory: "", item: "장기미거래 신탁계좌 조회" },
    { category: "", subcategory: "", item: "미수령 연금계좌 조회" },
    { category: "", subcategory: "", item: "신탁 추가입금" },
    { category: "", subcategory: "", item: "신탁 한도관리" },
    { category: "", subcategory: "", item: "신탁 계약기간 관리" },
    {
      category: "",
      subcategory: "",
      item: "신탁 목표달성 자동매도 등록/해제",
    },
    { category: "", subcategory: "", item: "신탁 해지" },
    { category: "", subcategory: "", item: "신탁수익률 SMS신청관리" },
    { category: "", subcategory: "", item: "신탁 운용보고서 신청" },
    { category: "", subcategory: "", item: "신탁 청약철회" },
    { category: "", subcategory: "", item: "신탁 체결내역 조회" },
    {
      category: "",
      subcategory: "ISA",
      item: "일임형ISA 모델포트폴리오 변경",
    },
    { category: "", subcategory: "", item: "일임형ISA 추가입금" },
    { category: "", subcategory: "", item: "일임형ISA 해지/취소" },
    { category: "", subcategory: "", item: "일임형ISA 자동이체 등록" },
    {
      category: "",
      subcategory: "",
      item: "일임형ISA 자동이체 조회/변경/해지",
    },
    {
      category: "",
      subcategory: "",
      item: "일임형ISA 투자보고서 수령방법변경",
    },
    { category: "", subcategory: "", item: "일임형ISA 수익률 SMS신청" },
    { category: "", subcategory: "", item: "일임형ISA 신규결과조회" },
    { category: "", subcategory: "", item: "일임형ISA 계좌이전신청" },
    {
      category: "",
      subcategory: "",
      item: "일임형ISA 계좌이전 진행현황조회",
    },
    { category: "", subcategory: "", item: "신탁형ISA 승낙확인" },
    { category: "", subcategory: "", item: "신탁형ISA 운용지시 관리" },
    { category: "", subcategory: "", item: "신탁형ISA 추가입금" },
    { category: "", subcategory: "", item: "신탁형ISA 청약철회" },
    { category: "", subcategory: "", item: "ISA 만기연장" },
    { category: "", subcategory: "외화예금", item: "외화예금 추가입금" },
    { category: "", subcategory: "", item: "외화예금 해지" },
    { category: "", subcategory: "", item: "결과조회" },
    { category: "", subcategory: "", item: "외화예금 금리조회" },
    { category: "", subcategory: "보험", item: "보험계약조회" },
    { category: "", subcategory: "", item: "보험 가입이력 조회" },
    { category: "", subcategory: "", item: "보험 기지급내역 조회" },
    { category: "", subcategory: "", item: "보험 변액수익률 조회" },
    { category: "", subcategory: "", item: "보험 청약철회" },
    { category: "", subcategory: "", item: "보험 해지환급금 조회" },
    { category: "", subcategory: "퇴직연금", item: "나의 퇴직연금" },
    { category: "", subcategory: "", item: "퇴직연금 계좌관리" },
    { category: "", subcategory: "", item: "퇴직연금 자동이체 관리" },
    { category: "", subcategory: "", item: "타기관 연금계좌 가져오기" },
    { category: "", subcategory: "", item: "퇴직연금 상품변경 관리" },
    { category: "", subcategory: "", item: "퇴직연금 디폴트옵션" },
    { category: "", subcategory: "", item: "퇴직연금 ETF" },
    { category: "", subcategory: "", item: "퇴직연금 입금" },
    { category: "", subcategory: "", item: "연금수령 관리" },
    { category: "", subcategory: "", item: "퇴직연금 스마트서류제출" },
    { category: "", subcategory: "", item: "퇴직연금 해지" },
    { category: "", subcategory: "", item: "퇴직연금 가입자 교육" },
    { category: "", subcategory: "", item: "퇴직연금 가입자정보관리" },
    {
      category: "",
      subcategory: "골드투자통장",
      item: "골드투자통장 입금",
    },
    { category: "", subcategory: "", item: "골드투자통장 출금" },
    { category: "", subcategory: "", item: "골드가격조회" },
    { category: "", subcategory: "계약서류관리", item: "" },
    { category: "자산관리", subcategory: "", item: "" },
    { category: "", subcategory: "한번에", item: "" },
    { category: "", subcategory: "자산", item: "자산홈" },
    { category: "", subcategory: "", item: "My총자산조회" },
    { category: "", subcategory: "", item: "자산관리 팁" },
    { category: "", subcategory: "", item: "통합 자산캘린더" },
    { category: "", subcategory: "", item: "AI 맞춤서비스" },
    { category: "", subcategory: "", item: "부자되는 데이터" },
    { category: "", subcategory: "", item: "자산관리 계산기모음zip" },
    { category: "", subcategory: "", item: "자산 추가하기(마이데이터)" },
    { category: "", subcategory: "", item: "GOLD&WISE 안내" },
    { category: "", subcategory: "투자", item: "투자홈" },
    { category: "", subcategory: "", item: "My투자자산조회" },
    { category: "", subcategory: "", item: "KB투자수익률" },
    { category: "", subcategory: "", item: "자산분석/진단 (투자건강검진)" },
    { category: "", subcategory: "", item: "WMTI(투자 MBTI)" },
    { category: "", subcategory: "", item: "AI 맞춤상품" },
    { category: "", subcategory: "", item: "KB시장전망" },
    { category: "", subcategory: "", item: "금융투자상품관" },
    { category: "", subcategory: "지출", item: "지출홈" },
    { category: "", subcategory: "", item: "가계부" },
    { category: "", subcategory: "", item: "정기지출" },
    { category: "", subcategory: "", item: "카드관리" },
    { category: "", subcategory: "", item: "통신비관리" },
    { category: "", subcategory: "", item: "소비리포트" },
    { category: "", subcategory: "", item: "목표챌린지" },
    { category: "", subcategory: "", item: "마이 로그" },
    { category: "", subcategory: "세테크", item: "세테크홈" },
    { category: "", subcategory: "", item: "My절세자산조회" },
    { category: "", subcategory: "", item: "나의 절세한도현황" },
    { category: "", subcategory: "", item: "절세상품 추천" },
    { category: "", subcategory: "", item: "세금계산기" },
    { category: "", subcategory: "", item: "청년형 소장펀드 총정리" },
    { category: "", subcategory: "", item: "5월 종합소득세 총정리" },
    { category: "", subcategory: "연금(은퇴)", item: "연금(은퇴)홈" },
    { category: "", subcategory: "", item: "My연금자산조회" },
    { category: "", subcategory: "", item: "KB연금수익률" },
    { category: "", subcategory: "", item: "은퇴설계" },
    { category: "", subcategory: "", item: "세금아낌이" },
    { category: "", subcategory: "", item: "연금케이봇쌤" },
    { category: "", subcategory: "", item: "연금상품몰" },
    { category: "", subcategory: "금융플러스", item: "금융플러스홈" },
    { category: "", subcategory: "", item: "부동산관리" },
    { category: "", subcategory: "", item: "자동차관리" },
    { category: "", subcategory: "", item: "신용관리" },
    { category: "", subcategory: "", item: "My금고" },
    { category: "", subcategory: "", item: "머니크루" },
    { category: "", subcategory: "", item: "My Fun Data" },
    { category: "", subcategory: "", item: "마이데이터 선물함" },
    { category: "", subcategory: "Fun테크", item: "Fun테크홈" },
    { category: "", subcategory: "", item: "금융시장 리포트" },
    { category: "", subcategory: "", item: "부자되는 이야기" },
    { category: "", subcategory: "", item: "KB 이야기" },
    { category: "", subcategory: "", item: "전문가 칼럼" },
    { category: "", subcategory: "", item: "돈되는 유튜브" },
    { category: "", subcategory: "", item: "부자매거진" },
    { category: "", subcategory: "", item: "지식up 연구소" },
    { category: "", subcategory: "전문가상담", item: "전문가상담홈" },
    { category: "", subcategory: "", item: "전문가상담 예약신청" },
    { category: "", subcategory: "", item: "상담신청 내역관리" },
    { category: "", subcategory: "마이데이터 설정", item: "" },
    { category: "공과금", subcategory: "", item: "" },
    { category: "", subcategory: "공과금납부하기", item: "" },
    { category: "", subcategory: "공과금 납부조회/취소", item: "" },
    { category: "외환", subcategory: "", item: "" },
    { category: "", subcategory: "환율", item: "환율조회" },
    { category: "", subcategory: "", item: "환율동향정보" },
    { category: "", subcategory: "환전", item: "환전신청" },
    { category: "", subcategory: "", item: "환전 조회/관리" },
    { category: "", subcategory: "", item: "비로그인 환전 내역조회" },
    { category: "", subcategory: "해외송금", item: "해외송금보내기" },
    { category: "", subcategory: "", item: "웨스턴유니온송금보내기" },
    { category: "", subcategory: "", item: "보낸송금 내용변경/반환신청" },
    { category: "", subcategory: "", item: "보낸내역조회" },
    { category: "", subcategory: "", item: "해외송금받기" },
    { category: "", subcategory: "", item: "거래외국환은행 지정" },
    {
      category: "",
      subcategory: "국내외화이체/예금입출금",
      item: "외화이체/예금입출금",
    },
    { category: "", subcategory: "", item: "외화자동이체" },
    { category: "", subcategory: "", item: "외화이체 내역조회" },
    { category: "", subcategory: "KB환율픽(Pick)", item: "" },
    { category: "", subcategory: "외환정보관리", item: "영문정보관리" },
    { category: "", subcategory: "", item: "외환알림서비스" },
    { category: "", subcategory: "", item: "외화송금주소록 관리" },
    { category: "", subcategory: "외환수수료납부/조회", item: "" },
    { category: "금융편의", subcategory: "", item: "" },
    { category: "", subcategory: "ATM/창구출금", item: "" },
    { category: "", subcategory: "미성년자계좌신규미리작성", item: "" },
    {
      category: "",
      subcategory: "증명서,통장/보안매체 발급",
      item: "증명서 발급",
    },
    { category: "", subcategory: "", item: "통장/보안매체 재발급" },
    { category: "", subcategory: "", item: "발급/배송내역 조회" },
    { category: "", subcategory: "은행에 서류제출", item: "" },
    { category: "", subcategory: "금융거래종합보고서", item: "" },
    { category: "", subcategory: "KB국민총무서비스", item: "" },
    { category: "", subcategory: "ID모아보기 서비스", item: "" },
    { category: "", subcategory: "KB모바일현금카드", item: "" },
    { category: "", subcategory: "수표조회", item: "" },
    { category: "혜택", subcategory: "", item: "" },
    { category: "", subcategory: "혜택홈", item: "" },
    { category: "", subcategory: "이벤트", item: "" },
    { category: "", subcategory: "리워드", item: "출석체크" },
    { category: "", subcategory: "", item: "별별퀴즈" },
    { category: "", subcategory: "My쿠폰", item: "쿠폰함" },
    { category: "", subcategory: "", item: "제휴혜택존" },
    { category: "", subcategory: "모바일쿠폰샵", item: "" },
    { category: "", subcategory: "KB 문화공간", item: "홍대 KB청춘마루" },
    { category: "", subcategory: "", item: "리브 앤 라이브" },
    { category: "멤버십", subcategory: "", item: "" },
    { category: "", subcategory: "KB스타클럽", item: "제도안내" },
    { category: "", subcategory: "", item: "KB스타클럽 포인트리" },
    { category: "", subcategory: "", item: "가족고객제도" },
    {
      category: "",
      subcategory: "혜택내역조회",
      item: "수수료 우대내역 조회",
    },
    { category: "", subcategory: "", item: "혜택 모아보기" },
    { category: "생활/제휴", subcategory: "", item: "" },
    { category: "", subcategory: "KB매일걷기", item: "" },
    { category: "", subcategory: "운세서비스", item: "" },
    { category: "", subcategory: "전자문서(KBWallet)", item: "" },
    { category: "", subcategory: "캠핑/글램핑", item: "" },
    { category: "", subcategory: "국민비서", item: "" },
    { category: "", subcategory: "실손보험 빠른청구", item: "" },
    { category: "", subcategory: "세상을 바꾸는 나눔", item: "" },
    { category: "", subcategory: "반려동물관리", item: "" },
    { category: "", subcategory: "Liiv M(리브모바일)", item: "" },
    { category: "", subcategory: "'요기요' 주문하기", item: "" },
    { category: "", subcategory: "부동산 등기변동 알림 서비스", item: "" },
    {
      category: "테마별서비스",
      subcategory: "",
      item: "",
    },
    {
      category: "",
      subcategory: "테마별서비스 둘러보기",
      item: "",
    },
    { category: "", subcategory: "주식", item: "" },
    { category: "", subcategory: "카드", item: "" },
    { category: "", subcategory: "보험", item: "" },
    { category: "", subcategory: "대출", item: "" },
    { category: "", subcategory: "자동차", item: "" },
    { category: "", subcategory: "통신", item: "" },
    { category: "", subcategory: "여행", item: "" },
    { category: "", subcategory: "부동산", item: "" },
    { category: "", subcategory: "건강", item: "" },
    { category: "", subcategory: "쇼핑", item: "" },
    { category: "KB금융그룹", subcategory: "", item: "" },
    { category: "", subcategory: "KB증권", item: "KB증권 홈" },
    { category: "", subcategory: "", item: "Easy 주식매매" },
    { category: "", subcategory: "", item: "국내 주식 주문" },
    { category: "", subcategory: "", item: "해외 주식 주문" },
    { category: "", subcategory: "", item: "공모주 청약" },
    { category: "", subcategory: "", item: "주식 소수점 거래" },
    { category: "", subcategory: "KB손해보험", item: "KB손해보험 홈" },
    { category: "", subcategory: "", item: "KB다이렉트 자동차보험" },
    { category: "", subcategory: "", item: "KB다이렉트 해외여행보험" },
    { category: "", subcategory: "", item: "KB손해보험 보장진단" },
    { category: "", subcategory: "", item: "보험금 청구" },
    { category: "", subcategory: "KB국민카드", item: "KB국민카드 홈" },
    { category: "", subcategory: "", item: "KB Pay 간편결제" },
    { category: "", subcategory: "", item: "카드 만들기" },
    { category: "", subcategory: "", item: "카드 이용내역조회" },
    { category: "", subcategory: "", item: "포인트리 조회" },
    { category: "", subcategory: "", item: "즉시 결제" },
    { category: "", subcategory: "", item: "보유중인 카드" },
    { category: "", subcategory: "KB라이프생명", item: "KB라이프생명 홈" },
    {
      category: "",
      subcategory: "",
      item: "온라인 연금보험(5년 확정이율)",
    },
    { category: "", subcategory: "", item: "온라인 정기보험" },
    { category: "", subcategory: "", item: "온라인 여성암보험" },
    { category: "", subcategory: "", item: "나만의 보험전문가" },
    { category: "", subcategory: "KB캐피탈", item: "KB캐피탈 홈" },
    { category: "", subcategory: "", item: "내 차고" },
    { category: "", subcategory: "", item: "내 차 시세조회" },
    { category: "", subcategory: "", item: "KB차차차 내 차 팔기" },
    { category: "", subcategory: "KB저축은행", item: "KB저축은행 홈" },
    { category: "", subcategory: "", item: "Kiwi입출금통장" },
    { category: "", subcategory: "", item: "KB e-plus 정기예금" },
    { category: "", subcategory: "", item: "KB꿀적금" },
    { category: "", subcategory: "", item: "통합대출한도조회" },
    { category: "꿀팁정보", subcategory: "", item: "" },
    { category: "", subcategory: "KB라이브", item: "" },
    { category: "", subcategory: "맘 편한 아이금융", item: "" },
    {
      category: "",
      subcategory: "참 편한 50 PLUS 라운지",
      item: "라운지 홈",
    },
    { category: "", subcategory: "", item: "꿀팁 게시판" },
    { category: "", subcategory: "KB스타뱅킹 길라잡이", item: "" },
    { category: "", subcategory: "콘텐츠 즐기고 무료로 기부", item: "" },
    { category: "사업자", subcategory: "", item: "" },
    { category: "", subcategory: "사업자 Zone", item: "" },
    { category: "", subcategory: "사업자 계좌조회", item: "" },
    { category: "", subcategory: "사업자 통장+기업뱅킹 가입", item: "" },
    { category: "", subcategory: "사업자 대출", item: "" },
    { category: "", subcategory: "사업자 응원 서비스", item: "" },
    {
      category: "",
      subcategory: "노란우산공제",
      item: "노란우산공제 안내",
    },
    { category: "", subcategory: "", item: "노란우산공제 계약조회" },
    {
      category: "",
      subcategory: "가맹점결제계좌",
      item: "가맹점 등록/결제계좌 변경",
    },
    { category: "", subcategory: "", item: "가맹점 신청결과 조회" },
  ];

  // console.log(d);

  d.forEach((el, index) => {
    if (el.category.length) {
      // 좌측 메뉴 (1뎁스)
      var btn = document.createElement("button");
      btn.textContent = el.category;
      document.querySelector(".menu-list").appendChild(btn);
      // 우측 메뉴 (타이틀)
      var wrap = document.createElement("div");
      wrap.classList.add("parent");
      var ob = document.createElement("hr");
      wrap.appendChild(ob);
      var tit = document.createElement("h2");
      tit.textContent = el.category;
      wrap.appendChild(tit);
      var list = document.createElement("ol");
      wrap.appendChild(list);
      document.querySelector(".layout-wrap > .content").appendChild(wrap);
    } else {
      var item = document.createElement("li");
      // 유측 메뉴 2뎁스
      if (el.subcategory.length) {
        var btn = document.createElement("button");
        var span = document.createElement("span");
        span.textContent = el.subcategory;
        btn.appendChild(span);
        if (el.item.length) {
          btn.classList.add("type2");
        } else {
          btn.classList.add("type1");
        }
        item.appendChild(btn);
        document
          .querySelector(".layout-wrap > .content .parent:last-of-type ol")
          .appendChild(item);
        // 우측 메뉴 3단까지 있으면 : 껍데기 추가
        if (el.item.length) {
          var deep = document.createElement("div");
          deep.classList.add("deep");
          var inner = document.createElement("div");
          inner.classList.add("deep-inner");

          deep.appendChild(inner);
          item.appendChild(deep);
        }
      }
      // 우측 메뉴 3단까지 있으면 : 버튼 추가
      if (el.item.length) {
        var btn = document.createElement("button");
        btn.textContent = el.item;
        document
          .querySelector(
            ".layout-wrap > .content .parent:last-of-type li:last-of-type .deep-inner"
          )
          ?.appendChild(btn);
      }
    }
  });

  // console.log("tab-data : end");

  // console.log("tab");
  const sticky2 = document.querySelector(".sticky2");
  const menuWrap = document.querySelector(".sticky2 .menu-list");
  const menu = document.querySelectorAll(".sticky2 .menu-list button");
  const content = document.querySelectorAll(".content .parent:not(.exception)");
  const container = document.querySelector(".content");
  let scrollEventtDisabled = false;
  let stamp;
  let stamp2;
  let lastIndex = 0;
  let beforIndex;
  var SscrollTop;
  sticky2.addEventListener("scroll", () => {
    SscrollTop = sticky2.scrollTop;
  });
  if (SscrollTop === undefined) {
    SscrollTop = 0;
  } else {
    SscrollTop;
  }
  /*
  제목 클릭 이벤트 
  - 활성화된 제목에 .active 추가 그외에 .active 제거
  - 활성화된 제목에 매칭되는 컨텐츠로 세로스크롤 (이때는 세로 스크롤에 제목 반응하는걸 off했다가 완료하면 on함)
  */
  menu.forEach((el, index) => {
    el.addEventListener("click", (e) => {
      // index = index == 0 ? index : index + 1;
      menu.forEach((link) => link.classList.remove("active"));
      el.classList.add("active");

      // 복잡해
      document
        .querySelectorAll(".content .parent:not(.exception)")
        .forEach((el, i) => {
          el.classList.add("stop");
        });

      document
        .querySelectorAll(".content .parent:not(.exception)")
        [index].classList.remove("stop");

      clearTimeout(stamp2);
      stamp2 = setTimeout(() => {
        document
          .querySelectorAll(".content .parent:not(.exception)")
          .forEach((el, i) => {
            el.classList.remove("stop");
          });
      }, 700);

      container.scrollTo({
        top: content[index].offsetTop,
        behavior: "smooth",
      });

      scrollEventtDisabled = true;
      lastIndex = index;
      beforIndex = lastIndex;
      clearTimeout(stamp);

      // 애매하게 잘려보이는 메뉴 active시 보이도록
      var cutPart = el.offsetTop + 48 - (sticky2.offsetHeight + SscrollTop);
      if (cutPart < 48 && cutPart > 0) {
        sticky2.scrollTo({
          top: el.offsetTop - sticky2.offsetHeight + 48,
          behavior: "smooth",
        });
      }
      if (sticky2.scrollTop > el.offsetTop) {
        sticky2.scrollTo({
          top: el.offsetTop,
          behavior: "smooth",
        });
      }
      if (el === menu[menu.length - 1]) {
        //최하단 active시 하단 회색영역까지 보이게
        sticky2.scrollTo({
          top: el.offsetTop - sticky2.offsetHeight + 48 + 8,
          behavior: "smooth",
        });
      }
      stamp = setTimeout(() => {
        scrollEventtDisabled = false;
      }, 1000); // 클릭이동시 스크롤이벤트 막기
    });
  });
  /*
    컨텐츠 세로 스크롤
    - 위치에 맞는 제목 활성화
    - 활성화된 제목이 화면내에 없으면 세로 스크롤 조절
  */

  container.addEventListener("scroll", function (event) {
    if (!scrollEventtDisabled) {
      const scrollTop = container.scrollTop;
      content.forEach((el, index) => {
        if (el.offsetTop < scrollTop) {
          lastIndex = index;
        }
      });
      if (beforIndex !== lastIndex) {
        menu.forEach((link) => link.classList.remove("active"));
        menu[lastIndex].classList.add("active");

        // console.log("부모 높이 : " + sticky2.offsetHeight);
        // console.log("엑티브 메뉴 위치 : " + menu[lastIndex].offsetTop);
        // console.log("부모 스크롤 위치 : " + SscrollTop);
        // console.log(sticky2.offsetHeight + SscrollTop);
        // console.log(menu[lastIndex].offsetTop + 48);

        // 아래로 내릴때 처리
        if (
          sticky2.offsetHeight < menu[lastIndex].offsetTop + 48 &&
          sticky2.offsetHeight + SscrollTop < menu[lastIndex].offsetTop + 48
        ) {
          sticky2.scrollTo({
            top: menu[lastIndex].offsetTop - sticky2.offsetHeight + 48,
            behavior: "smooth",
          });
        }
        // 위로 올릴때 처리
        if (sticky2.scrollTop > menu[lastIndex].offsetTop) {
          sticky2.scrollTo({
            top: menu[lastIndex].offsetTop,
            behavior: "smooth",
          });
        }
        if (menu[lastIndex] === menu[menu.length - 1]) {
          //최하단 active시 여백영역까지 보이게
          sticky2.scrollTo({
            top: menu[lastIndex].offsetTop - sticky2.offsetHeight + 48 + 8,
            behavior: "smooth",
          });
        }
        beforIndex = lastIndex;
        // lastIndex = null;
      }
    }
  });
};

const expansion = (e) => {
  // console.log("expansion");
  const type2 = document.querySelectorAll(".type2");

  type2.forEach((el, index) => {
    el.addEventListener("click", (e) => {
      var panel;
      el.classList.toggle("active");

      Object.values(type2)
        .filter((btn) =>
          e.target.tagName === "SPAN"
            ? btn !== e.target.parentNode
            : btn !== e.target
        )
        .forEach((btn) => {
          console.log(btn);
          btn.classList.remove("active");
          panel = btn.nextElementSibling;
          panel.style.maxHeight = 0;
        });

      if (e.target.tagName === "BUTTON") {
        panel = e.target.nextElementSibling;
        if (e.target.classList.contains("active")) {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } else {
          panel.style.maxHeight = 0;
        }
      }

      if (e.target.tagName === "SPAN") {
        panel = e.target.parentNode.nextElementSibling;
        if (e.target.parentNode.classList.contains("active")) {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } else {
          panel.style.maxHeight = 0;
        }
      }
    });
  });
};

const popup = () => {
  /*
		열기, 닫기
		검색어 닫기 노출 여부
		검색어 입력시 하단 검색리스트 노출
	*/
  const pop = document.querySelector(".popup");
  const o = document.querySelector(".serch-bar");

  const keyword = document.querySelector(".search-wrap input");
  const del = document.querySelector(".search-wrap .del");
  const close = document.querySelector(".search-wrap .close");
  const empty = document.querySelector(".search-result .empty");
  const data = document.querySelector(".search-result .data");
  const popupToggle = (flag) => {
    if (flag) {
      document.querySelector("body").style.overflow = "hidden";
      pop.style.transform = "translateX(0)";
      document.activeElement.blur();
      empty.style.display = "block";
      data.style.display = "none";
      setTimeout(() => {
        keyword.focus();
      }, 700);
    } else {
      document.querySelector("body").style.overflow = "auto";
      pop.style.transform = "translateX(100%)";
    }
  };
  const search = (flag) => {
    if (flag) {
      empty.style.display = "none";
      data.style.display = "block";
    } else {
      empty.style.display = "block";
      data.style.display = "none";
    }
  };
  o.addEventListener("click", (e) => {
    popupToggle(true);
  });
  close.addEventListener("click", (e) => {
    popupToggle(false);
  });
  keyword.addEventListener("keyup", (e) => {
    // 입력 내용이 있으면
    if (e.target.value.length > 0) {
      del.style.display = "block";
      if (keyword.value == "펀드") {
        search(true);
      } else {
        search(false);
      }
    } else {
      search(false);
      del.style.display = "none";
    }
  });
  del.addEventListener("click", (e) => {
    keyword.value = "";
    search(false);
    del.style.display = "none";
  });

  const dataWrap = document.querySelector(".data-wrap");
  const ectSearch = document.querySelector(".ect-search");
  dataWrap.addEventListener("scroll", () => {
    if (dataWrap.scrollTop > 1) {
      ectSearch.style.backgroundColor = "#F7F7F8";
    } else {
      ectSearch.style.backgroundColor = "transparent";
    }
  });
};

const observer = new IntersectionObserver(
  (e) => {
    // console.log(e[0]);
    // console.log(e[0].intersectionRatio);
    try {
      if (e[0].intersectionRatio < 1) {
        e[0].target.parentElement.classList.add("active");
        e[0].target.parentElement.nextElementSibling.classList.remove("active");
      } else {
        e[0].target.parentElement.classList.remove("active");
      }
    } catch (err) {}
  },
  {
    rootMargin: "0px 0px 0px 0px", // top height 208px
    threshold: [1],
  }
);
const ect = document.querySelector(".ect-search");
const popObserver = new IntersectionObserver(
  (e) => {
    try {
      if (e[0].intersectionRatio < 1) {
        e[0].target.parentElement.classList.add("active");
      } else {
        e[0].target.parentElement.classList.remove("active");
      }
    } catch (err) {}
  },
  {
    rootMargin: "-121px 0px 0px 0px", // top height 208px
    threshold: [1],
  }
);

document.addEventListener("DOMContentLoaded", () => {
  tab();
  popup();
  bookmark();
  expansion();
  document.querySelectorAll(".parent hr").forEach((el, index) => {
    observer.observe(el);
  });
  document.querySelectorAll(".search-li hr").forEach((el, index) => {
    popObserver.observe(el);
  });
  window.onload = function () {
    setTimeout(function () {
      scrollTo(0, 0);
    }, 100);
  };
});
