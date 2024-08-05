import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/mypageedit/Header";

const PolicyPageDetail = () => {
  const { policyName } = useParams();

  // 정책 내용 객체
  const policyContent = {
    "서비스 이용약관": `
      <h3>제 1조(목적)</h3>
      <p>이 약관은 '로컬텀'을 이용함에 있어 필요한 이용 조건, 절차 및 당사자간의 권리 의무 등 기본적인 사항을 규정하는 것을 목적으로 합니다.</p>
      <h3>제 2조(용어의 정의)</h3>
      <p>이 약관에서 사용하는 용어는 다음과 같이 정의합니다.<br/>
      ① '로컬텀'은 지역 개인 카페 통합 플랫폼으로 음료를 주문할 수 있는 서비스입니다.<br/>
      ② '회원'이란 이 약관에 동의하고, 개인정보의 수집 이용 및 제 3자 제공에 동의하고 로컬텀 서비스를 사용하는 자를 말합니다.<br/>
      ③ '스탬프'란 매장에서 적립 가능한 메뉴 구매 시, 해당 매장에서 적립 및 사용이 가능하도록 제공하는 서비스를 말합니다.<br/>
      ④ '쿠폰'이란 이벤트를 통해 발급된 이벤트 쿠폰을 말합니다.
      </p>
      <h3>제 3조(적립 및 사용)</h3>
      <p>
      ① 매장에서 적립 가능한 메뉴 구매 시, 메뉴 한 개당 한 개의 스탬프가 발행되며, 스탬프 10개 적립 시 아메리카노 교환권, 즉 스탬프 쿠폰이 발행됩니다. 단 스탬프 쿠폰 보다 낮은 금액의 메뉴 구매 시 차액은 반환되지 않으며, 스탬프 쿠폰은 아메리카노로 교환됩니다.<br/>
      ② 스탬프는 매장 각각 마다 적립됩니다. (통합 스탬프가 아닌 각각의 카페 스탬프 발급)
      </p>
      <h3>제 5조(약관 변경)</h3>
      <p>기기/기술적 결함이나 네트워크의 오류 및 장애 발생으로 인하여 일시적으로 서비스 이용에 제한이 발생할 수 있으며, 적립 및 사용에 최대 24시간이 소요될 수도 있습니다. (주말/공휴일 제외한 본사 영업일 기준). 이 경우는 서비스 이용이 정상화되면 추후 적립/사용이 가능합니다.</p>
      <h3>제 3조(적립 및 사용)</h3>
      <p>
      ① 로컬텀은 이용약관이나 쿠폰의 사용 및 스탬프 조건을 변경할 권리를 보유하며, 필요 시 개정할 수 있습니다. < br/>
      ② 개정할 경우에는 변경약관을 적용하고자 하는 날로부터 1개월 전에 약관이 변경된다는 사실과 변경 사유, 변경 내용 등을 웹사이트 공지사항(또는 개별공지)을 통해 회원에게 고지합니다. <br />
      ③ 약관 및 쿠폰, 스탬프 조건이 변경된 이후에도 회원 이 1개월간 이의 제기 없이 계속적으로 서비스를 이용하는 경우에는 회원이 약관의 변경사항에 동의한 것으로 간주하며, 이는 기존의 회원에게도 동일하게 적용됩니다. <br />
      ④ 변경약관에 동의하지 않을 경우 회원은 이용계약을 해지할 수 있습니다.
      </p>
      <h3>제 6조(회원 ID 등의 관리책임)</h3>
      <p>
      ① 회원은 서비스 이용을 위한 회원 ID, 비밀번호의 관리에 대한 책임, 본인 ID의 제 3자에 의한 부정사용 등 회원의 고의 ·과실로 인해 발생하는 모든 불이익에 대한 책임을 부담합니다. 단, 이것이 회사의 고의 과실로 인하여 야기된 경우는 회사가 책임을 부담합니다. <br/>
      ② 회원은 회원 ID, 비밀번호 및 추가정보 등을 도난 당하거나 제 3자가 사용하고 있음을 인지한 경우에는 즉시 본 인의 비밀번호를 수정하는 등의 조치를 취하여야 하며, 즉시 이를 회사에 통보하여 회사의 안내를 따라야 합니다.
      </p>
      <h3>제 7조(분쟁의 해결)</h3>
      <p>
      본 약관은 대한민국법령에 의하여 규정되고 이행되며, 서비스 이용과 관련하여 회사와 회원간에 발생한 분쟁에 대해서는 서울서부지방법원을 관할법원으로 합니다.
      </p>
      <h3>제 8조(규정의 준용)</h3>
      <p>
      본 약관에 명시되지 않은 사항에 대해서는 관련법령에 의 하고, 법에 명시되지 않은 부분에 대하여는 관습에 의합니다.
      </p>
      <p>본 약관은 2024년 8월 6일부터 시행됩니다.</p>
    `,
    "개인정보 처리방침": `
      <p>
      로컬텀은 회원의 권리 보호를 위해, 개인정보보호법 및 관계 법령이 정한 바를 준수하며 적법하게 개인정보를 처리하고 안전하게 관리하고 있습니다. 이에 「개인정보 보호법」 제30조에 따라 회원에게 개인정보 처리에 관한 절차 및 기준을 안내하고, 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립 공개합니다.
      </p>
      <p>
      회원의 권리 보호를 위해, 개인정보보호법 및 관계 법령이 정한 바를 준수하며 적법하게 개인정보를 처리하고 안전하게 관리하고 있습니다. 이에 「개인정보 보호법」 제30조에 따라 회원에게 개인정보 처리에 관한 절차 및 기준을 안내하고, 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립 공개합니다.
      </p>
      <h3>1. 개인정보 수집 및 이용에 대한 동의</h3>
      <p>회사는 이용자가 개인정보처리방침에 동의여부를 선택할 수 있는 절차를 마련하고 있으며, 「동의」를 선택하면 개인정보의 수집 및 이용 등에 관하여 동의한 것으로 봅니다.</p>
      <h3>2. 개인정보의 처리 목적</h3>
      <p>회사는 다음의 각호의 목적을 위하여 개인정보를 처리합니다. 처리하는 개인정보는 목적 이외의 용도로는 이용되지 않으며, 처리 목적이 변경되는 경우에는 「개인정보 보호법』 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행합니다.</p>
      <h3>3. 회원 가입 및 관리</h3>
      <p>회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별•인증, 회원자격 유지•관리, 서비스 부정이용 방지, 만 14세 미만 아동의 개인정보 처리 시 법정대리인의 동의여부 확인, 각종 고지 •통지, 고충처리 등의 목적으로 개인정보를 처리합니다.</p>
      <h3>4. 재화 또는 서비스 제공</h3>
      <p>회사는 회원가입, 상담, 서비스 신청, 시스템 장애 복구, 상품 및 서비스 개발과 개선, 맞춤형 광고 및 서비스 제공, 계약서 • 청구서 발송, 콘텐츠 제공, 본인인증, 연령인증, 요금 결제 ·정산 등의 목적으로 개인정보를 처리합니다.<p/>
      <h3>5. 처리하는 개인정보의 항목</h3>
      <p>
      ① 회사는 회원가입, 회원관리, 상담, 서비스 신청, 시스템 장애 복구, 상품 및 서비스 개발과 개선, 마케팅 (맞춤형 광고) 및 서비스 제공 등의 적합한 멤버십 어플리케이션 서비스를 제공하고자 하는 목적으로 개인정보 항목을 수집 및 처리하고 있습니다.</br>
      ② 회사는 기본적 인권을 침해할 우려가 있는 민감한 개인정보(유전자 검사 등의 결과로 얻어진 유전정보, 형의 실효 등에 관한 법률 제2조 제5호에 따른 범죄경력자료에 해당하는 정보, 인종 및 민족, 사상 및 신조, 출신지 및 본적지, 정치적 성향, 건강상태 등)는 수집하지 않습니다. 그리고 수사상, 재판상 필요로 인하여 관련 기관에서 요청이 있는 등의 특별한 사정이 없는 한 이용자가 입력한 개인정보를 이용목적 이외의 다른 부정한 목적으로는 사용하지 않으며 외부로 유출하지 않습니다.</br>
      ③ 회사는 본 개인정보처리방침을 어플리케이션에 공개함으로써 이용자가 언제나 용이하게 보실 수 있도록 조치하고 있습니다.</br>
      ④ 회사는 개인정보처리방침의 지속적인 개선을 위하여 개인정보처리방침을 개정, 변경 등을 하는데 있어 필요한 절차를 정하고있습니다. 그리고 개인정보처리방침을 개정, 변경 등을 하는 경우 개인정보처리방침의 버전번호, 개정 내지 변경 내용 등을 어플리케이션에 게시, SMS발송 등의 방법으로 이용자에게 공지하여 개정, 변경 등이 된 사항에 관하여 이용자가 쉽게 알아볼 수 있도록 하고 있습니다.</br>
      ⑤ 서비스이용에 필요한 계정 등을 이용한 부가 서비스 및 맞춤식 서비스의 이용 또는 이벤트 응모 과정에서 해당 서비스의 이용자에 한하여 부가적인 개인정보들이 수집될 수 있습니다. 
      </p>
      <h3>6. 개인정보의 처리 및 보유 기간</h3>
      <p>① 회사는 관계법에 따른 개인정보 보유기간 또는 개인정보주체로부터 개 인정보를 수집 시에 동의 받은 개인정보 보유• 이용기간 내에서 개인정보 를 처리• 보유합니다.</p>
      <p>② 동조 제1항에 따른 개인정보 처리 및 보유기간은 다음 각호와 같습니 다.</p>
      <h3>7. 서비스 회원 가입 및 관리</h3>
      <p>탈퇴시까지</p>
      <h3>8. 재화 또는 서비스 제공</h3>
      <p>
      재화, 서비스 공급완료 및 요금 결제 · 정산 완료 시까지</br>
      단, 다음 각 목의 사유에 해당하는 경우에는 해당기간 종료시까지</br>
      가. 「전자상거래 등에서의 소비자 보호에 관한 법률」에 따른 표시•광고, 계약내용 및 이행 등 거래에 관한 기록</br>
      •표시• 광고에 관한 기록 : 6개월</br>
      •계약 또는 청약철회, 대금결제, 재화 등의 공급기록 : 5년</br>
      •소비자 불만 또는 분쟁처리에 관한 기록 : 3년 「통신비밀보호법」에 따른 통신사실확인자료 보관</br>
      •가입자 전기통신일시, 개시 •종료시간, 상대방 가입자번호, 사용도수, 발 신기지국 위치추적자료 : 1년
      </p>
      <h3>9. 만 14세 미만 아동의 개인정보 처리</h3>
      <p>
      ① 회사는 만 14세 미만 아동에 대해 개인정보를 수집할 때 법정대리인의 동 의를 얻어 해당 서비스 수행에 필요한 최소한의 개인정보를 수집합니다.</br>
      • 필수항목 : 법정 대리인의 성명, 관계, 연락처</br>
      ② 회사의 서비스 제공 및 개선 관련 홍보를 위해 만 14세 미만 아동의 개인정 보를 수집할 경우에는 법정대리인으로부터 별도의 동의를 얻습니다.</br>
      ③ 회사는 만 1 4세 미만 아동의 개인정보를 수집할 때에는 아동에게 법정대 리인의 성명, 연락처와 같이 최소한의 정보를 요구할 수 있으며, 다음 각호의 방법으로 적법한 법정대리인이 동의하였는지를 확인합니다.</br>
      </p>
    `,
    "제 3자 개인정보 활용 동의": `
      <p>로컬텀는 『개인정보 보호법』 제 17조제1항(개인 정보 제 3자 제공 근거)에 근거하여, 회원님의 개인정보를 개인정보 처리방침에서 고지한 제 3자 제공 범위 내에 서 제공하며, 정보주체의 사전 동의 없이 범위를 초과하여 제 3자에게 제공하지 않습니다 .</p>
      <h3>[개인정보 제 3자 제공]</h3>
      <p>서비스의 제공에 필요한 범위 내에서 회원의 개인 정보를 제공하고 있습니다. 제공 대상 또는 제공 정보 및 이용 목적 등 제공 내용이 추가되거나 변경될 때 에는 회원에게 전자우편 또는 서면을 통해 추가 또는 변경 되는 사항을 고지하여 동의를 받는 절차를 거치게 됩니다.</p>
      `,
    "마케팅 활용 동의": `
      <p>
      <strong>[개인정보 보호법』 제 22조제4항(동의를 받는 방법)</strong>
      에 근거하여, 로컬텀에서 제공하는 이벤트 및 서비스 안내 등 광고성 정보를 받으시려면 마케팅 및 광고 활용에 동의하여 주시기 바랍니다.
      </p>
      <p>1. 수집 목적 : 회사 상품 및 서비스 추천, 프로모션 이벤트 정보 제공</p>
      <p>2. 수집 항목 : 이메일, 휴대전화번호</p>
      <p>3. 보유 기간 : 회원탈퇴 및 계약 종료 시, 목적 달성 후 즉시 파기</p>
      <p>※ 귀하는 마케팅 및 광고 활용에 동의하지 않을 권리 가 있으며, 동의를 거부할 경우에는 회사 상품 및 서비스 추천, 프로모션 이벤트 정보 제공 서비스 이용에 제한 될 수 있습니다.</p>
    `,
    "위치기반 서비스 이용 동의": `
      <h3>제 1조 (목적)</h3>
      <p>이 약관은 로컬텀이 제공하는 위치 정보사업 또는 위치기반서비스사업과 관련하여 회사 와 개인위치정보주체와의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.</p>
      <h3>제 2조 (약관외 준칙)</h3>
      <p>이 약관에 명시되지 않은 사항은 위치정보의 보호 및 이 용 등에 관한 법률, 정보통신망 이용촉진 및 정보보호 등 에 관한 법률, 전기통신기본법, 전기통신사업법 등 관계법령과 회사의 이용약관 및 개인정보취급방침, 회사가 별도로 정한 지침 등에 의합니다.</p>
      <h3>제 4조 (개인위치정보주체의 권리)</h3>
      <p>1. 개인위치정보주체는 개인위치정보 수집 범위 및 이용 약관의 내용 중 일부 또는 개인위치정보의 이용 • 제공 목적, 제공받는 자의 범위 및 위치기반서비스의 일부에 대하여 동의를 유보할 수 있습니다.</p>
      <p>2. 개인위치정보주체는 회사에 대하여 언제든지 개인위 치정보의 수집에 대한 동의 또는 개인위치정보를 이용한 위치기반서비스 제공 및 개인위치정보의 제3자 제공에 대한 동의의 전부 또는 일부를 철회할 수 있습니다. 이 경우 회사는 수집한 개인위치정보 및 위치정보 수집, 이용, 제공 사실 확인자료(동의의 일부를 철회한 경우에는 철회한 부분의 개인위치정보 및 위치정보 이용, 제공 사실 확인자료에 한함)를 파기합니다.</p>
      <p>
        3. 개인위치정보주체는 회사에 대하여 언제든지 개인위치정보의 수집, 이용 또는 제공의 일시적인 중지를 요구할 수 있으며, 회사는 이를 거절할 수 없고 이를 위한 기술적 수단을 갖추고 있습니다.</br>
        가. 개인위치정보주체에 대한 위치정보 수집 • 이용 • 제공사실 확인자료</br>
        나. 개인위치정보주체의 개인위치정보가 위치정보의 보호 및 이용 등에 관한 법률 또는 다른 법령의 규정에 의하여 제3자에게 제공된 이유 및 내용
      </p>
      <p>4. 개인위치정보주체는 회사에 대하여 아래 자료의 열람 또는 고지를 요구할 수 있고, 당해 자료에 오류가 있는 경우에는 그 정정을 요구할 수 있습니다. 이 경우 회사는 정당한 이유 없이 요구를 거절하지 아니합니다.</p>
      <p>5. 개인위치정보주체는 제1항 내지 제4항의 권리행사를 고객센터(전화 및 문의메일)를 통해 회사에 요구 할 수 있습니다.</p>
      <h3>제 5조 (위치정보의 보유기간)</h3>
      <p>회사는 위치정보의 보호 및 이용 등에 관한 법률 제16조 제2항에 근거하여 개인위치정보주체에 대한 위치정보 수집 • 이용 • 제공사실 확인자료(위치정보를 제공받는 자, 취득 경로, 이용, 제공 일시 및 방법에 관한 자료)를 위치정보시스템에 자동으로 기록하며, 1년 이상 보관 합니다.</p>
      <h3>제 6조(서비스의 변경 및 중지)</h3>
      <p>
      1. 회사는 위치정보사업자의 정책변경 등과 같이 회사의 제반 사정 또는 법률상의 장애 등으로 서비스를 유지할 수 없는 경우, 서비스의 전부 또는 일부를 제한, 변경하거나 중지할 수 있습니다.</br>
      2. 제1항에 의한 서비스 중단의 경우에는 회사는 사전에 인터넷 등에 공지하거나 개인위치정보주체에게 통지합니다.
      </p>
      <h3>제 7조 (개인위치정보 제3자 제공 및 제한)</h3>
      <p>1. 회사는 회원의 동의 없이 회원의 개인위치정보를 제3자에게 제공하지 아니하며, 제3자 제공 서비스를 제공하는 경우에는 제공 받는 자 및 제공 목적을 사전에 회원에게 고지합니다.</p>
      <p>
      2. 회사는 개인위치정보를 회원이 지정하는 제3자에게 제공하는 경우에는 개인위치정보를 수집한 당해 통신단말 장치로 매회 회원에게 제공받는 자, 제공 일시 및 제공 목 적을 즉시 통보합니다. 단, 아래 각 호에 해당하는 경우에는 회원이 미리 특정하여 지정한 통신단말장치 또는 전자 우편주소로 통보합니다.</br>
      가. 개인위치정보를 수집한 당해 통신단말장치가 문자, 음성 또는 영상의 수신 기능을 갖추지 아니한 경우</br>
      나. 회원이 개인위치정보를 수집한 당해 통신단말장치 외의 통신단말장치 또는 전자우편주소로 통보할 것을 미리 요청한 경우
      </p>
      <p>
      3. 개인위치정보 등의 이용 제공의 제한 회사는 회원의 동의가 있거나 아래 각 호에 해당하는 경우를 제외하고는 개인위치정보 또는 위치정보 수집, 이용, 제공 사실 확인자 료를 본 약관에 명시하거나 별도 고지한 범위를 넘어 이용 하거나 제3자에게 제공하지 않습니다.</br>
      가. 위치기반서비스 제공에 따른 요금정산 위하여 위치정보 수집, 이용, 제공사실 확인 자료가 필요한 경우</br>
      나. 통계작성, 학술연구 또는 시장조사를 위하여 특정 개인을 알아볼 수 없는 형태로 가공하여 제공하는 경우</br>
      </p>
    `,
  };

  // 정책 내용을 policyName으로 가져옴
  const content = policyContent[policyName] || "정책 내용을 찾을 수 없습니다.";

  return (
    <Container>
      <Header />
      <MainContent>
        <Title>{policyName}</Title>
        <Content dangerouslySetInnerHTML={{ __html: content }} />
      </MainContent>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }

  @media (max-width: 480px) {
    margin-top: 1rem;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: -1px;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

const Content = styled.div`
  font-size: 1rem;
  color: #444;
  line-height: 1.5;
  max-width: 800px;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }

  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.875rem;
    }
  }

  p {
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
      margin-bottom: 1rem;
    }

    @media (max-width: 480px) {
      margin-bottom: 0.75rem;
    }
  }
`;

export default PolicyPageDetail;