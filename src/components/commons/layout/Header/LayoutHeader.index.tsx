import { useEffect } from "react";
import * as S from "./LayoutHeader.style";
import { useRecoilState } from "recoil";
import { loginToken } from "@/src/commons/store/globalState";
import { useLoginData } from "../../hooks/customs/useLoginData";

export default function LayoutHeader() {
  const [accessToken, setAccessToken] = useRecoilState(loginToken);

  useEffect(() => {
    const token = sessionStorage.getItem("userToken");

    if (token) {
      setAccessToken(token);
    }
  }, [setAccessToken]);

  const { onClickLogout } = useLoginData();

  return (
    <S.Wrapper>
      <S.HeaderInner>
        <S.SearchBar>
          <S.Search type="search" placeholder="찾고 있는 커넥터즈가 있나요?" />
          <S.SearchBtn>검색버튼</S.SearchBtn>
        </S.SearchBar>
        {accessToken ? (
          <S.HeaderMenu>
            <S.HeaderNav onClick={onClickLogout} href="#">
              로그아웃
            </S.HeaderNav>
            <S.HeaderNav href={"#"}>내 정보</S.HeaderNav>
            <S.HeaderNav href={"/new"}>프로젝트 생성</S.HeaderNav>
          </S.HeaderMenu>
        ) : (
          <S.HeaderMenu>
            <S.HeaderNav href={"/login"}>로그인</S.HeaderNav>
            <S.HeaderNav href={"/join"}>회원가입</S.HeaderNav>
            <S.HeaderNav href={"/new"}>프로젝트 생성</S.HeaderNav>
          </S.HeaderMenu>
        )}
      </S.HeaderInner>
    </S.Wrapper>
  );
}
