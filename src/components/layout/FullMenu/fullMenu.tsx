import * as S from "./fullMenu.style";

export default function FullMenu() {
  return (
    <S.Wrapper>
      <S.InnerBox>
        <S.LeftMenu>공지사항</S.LeftMenu>
        <S.LeftMenu>자주 묻는 질문</S.LeftMenu>
      </S.InnerBox>
    </S.Wrapper>
  );
}
