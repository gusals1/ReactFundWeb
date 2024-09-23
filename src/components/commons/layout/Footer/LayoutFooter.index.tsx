import Image from "next/image";
import * as S from "./LayoutFooter.style";

export default function LayoutFooter() {
  return (
    <>
      <S.FooterNav>
        <S.NavInner>
          <S.NavLi>
            <S.NavLink href="#">커넥터 소개</S.NavLink>
          </S.NavLi>
          <S.NavLi>
            <S.NavLink href="#">개인정보 처리방침</S.NavLink>
          </S.NavLi>
          <S.NavLi>
            <S.NavLink href="#">온라인투자연계</S.NavLink>
          </S.NavLi>
          <S.NavLi>
            <S.NavLink href="#">이용약관</S.NavLink>
          </S.NavLi>
          <S.NavLi>
            <S.NavLink href="#">투자자 공지사항</S.NavLink>
          </S.NavLi>
        </S.NavInner>
      </S.FooterNav>
      <S.CompanyInfo>
        <div>
          <S.InfoTitle>(주)커넥터</S.InfoTitle>
          <S.InfoTitle>02-2547-5587</S.InfoTitle>
          <S.InfoText>
            대표자:김지우 경기도 부천시 부일로 725번길 사업자 등록번호:
            080-87-87405
          </S.InfoText>
          <S.InfoText>
            개인정보보호책임자:박현민 Fax:02-857-5845 connectus@connect.com
          </S.InfoText>
          <S.InfoText>
            대출금리 연 최고 17.9% 이내, 연체이자율 : 약정금리 +3% (법정최고금리
            20%이내),
          </S.InfoText>
          <S.InfoText>
            플랫폼 이용료 외 취급수수료 등 기타 부대비용은 없음, 조기상환조건
            없음
          </S.InfoText>
          <S.InfoText>
            중개수수료를 요구하거나 받는 행위는 불법입니다. 대출 시 귀하의
            신용등급이 하락할 수 있습니다.
          </S.InfoText>
          <S.InfoText>
            과도한 빚은 당신에게 큰 불행을 안겨줄 수 있습니다.
          </S.InfoText>
          <S.InfoText>Copyright © CONNECT 2023. All Right Reserved.</S.InfoText>
        </div>
        <S.IconWrap>
          <Image
            src="/footerImage/kakao.png"
            alt="snsIcon"
            width={42}
            height={42}
            style={{ width: "100%", height: "auto" }}
          />
          <Image
            src="/footerImage/facebook.png"
            alt="snsIcon"
            width={42}
            height={42}
            style={{ width: "100%", height: "auto" }}
          />
          <Image
            src="/footerImage/instargram.png"
            alt="snsIcon"
            width={42}
            height={42}
            style={{ width: "100%", height: "auto" }}
          />
        </S.IconWrap>
      </S.CompanyInfo>
    </>
  );
}
