import * as S from "./FundNew.styles";
import useMoveToPage from "@/src/components/commons/hooks/customs/useMoveToPage";

export default function FundNewPage() {
  const { moveToPage } = useMoveToPage();

  return (
    <S.Wrapper>
      <S.ProdImage>
        <S.StyledImage
          src={"/welcome.png"}
          alt={`이미지`}
          fill
          sizes="(max-width:1200px) 100%"
        />
      </S.ProdImage>
      <S.QuestionText>원하시는 메뉴를 선택해주세요</S.QuestionText>
      <S.BoxContainer>
        <S.OptionBox onClick={moveToPage("/new/fund")}>
          <S.OptionText>펀딩 개설하기</S.OptionText>
        </S.OptionBox>

        <S.OptionBox>
          <S.OptionText onClick={moveToPage("/new/product")}>
            상품 등록하기
          </S.OptionText>
        </S.OptionBox>
      </S.BoxContainer>
    </S.Wrapper>
  );
}

// 좀 더 간격을 줄이고, 아이콘 넣고, hover효과주고 각각의 페이지만 넘어가게 바꾸기
// 서로 다른 컴포넌트를 반환하게 하면 될거같음
