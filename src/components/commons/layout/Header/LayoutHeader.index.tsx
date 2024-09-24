import * as S from "./LayoutHeader.style";

export default function LayoutHeader() {
  return (
    <S.Wrapper>
      <S.HeaderInner>
        <S.SearchBar>
          <S.Search type="search" placeholder="찾고 있는 커넥터즈가 있나요?" />
          <S.SearchBtn>검색버튼</S.SearchBtn>
        </S.SearchBar>

        <S.HeaderMenu>
          <S.HeaderNav href={"/login"}>LOGIN</S.HeaderNav>
          <S.HeaderNav href={"/join"}>CONNECT US</S.HeaderNav>
          <S.HeaderNav href={"#"}>프로젝트 생성</S.HeaderNav>
        </S.HeaderMenu>
      </S.HeaderInner>
    </S.Wrapper>
  );
}
