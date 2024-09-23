import * as S from "./fullMenu.style";

export default function FullMenu() {
  return (
    <S.Wrapper>
      <S.InnerBox>
        <S.HalfMenu>공지사항</S.HalfMenu>
        <S.HalfMenu>자주 묻는 질문</S.HalfMenu>
      </S.InnerBox>
    </S.Wrapper>
  );
}
