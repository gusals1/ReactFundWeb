import Image from "next/image";
import * as S from "./LayoutNav.style";
import { useRef, useState } from "react";

export default function LayoutNav() {
  const toggleImage = ["/navImage/hamburger.png", "/navImage/close.png"];

  const [dropDownState, setDropDownState] = useState(false);
  const [imageSrc, setImageSrc] = useState("/navImage/hamburger.png");
  // const dropDownRef = useRef<HTMLDivElement>(null);

  const dropDown = () => {
    setDropDownState((prev) => !prev);
    console.log(dropDownState);
    setImageSrc(dropDownState ? toggleImage[0] : toggleImage[1]);
  };

  return (
    <S.Wrapper>
      <S.MainLogo>
        <Image
          src={"/mainlogo.png"}
          alt="mainlogo"
          width={168}
          height={88}
          style={{ objectFit: "contain", width: "100%", height: "auto" }}
          priority
        />
      </S.MainLogo>
      <S.Navigation>
        <S.NavUl>
          <S.NavLi>
            <S.StyleLink href="#">펀딩</S.StyleLink>
          </S.NavLi>
          <S.NavLi>
            <S.StyleLink href="#">오픈예정</S.StyleLink>
          </S.NavLi>
          <S.NavLi>
            <S.StyleLink href="#">스토어</S.StyleLink>
          </S.NavLi>
          <S.NavLi>
            <S.StyleLink href="#">소통공간</S.StyleLink>
          </S.NavLi>
        </S.NavUl>
      </S.Navigation>
      <S.MenuToggle>
        <Image
          src={imageSrc}
          alt="hamburgerMenu"
          style={{ objectFit: "contain" }}
          width={32}
          height={32}
          onClick={dropDown}
        />

        <S.DropDownBox className={dropDownState ? "open" : ""}>
          <S.Submenu>커넥터소개</S.Submenu>
          <S.Submenu>성공스토리</S.Submenu>
          <S.Submenu>자주묻는질문</S.Submenu>
          <S.Submenu>증권형 펀딩이란</S.Submenu>
          <S.Submenu>뉴스레터</S.Submenu>
          <S.Submenu>매거진</S.Submenu>
        </S.DropDownBox>
      </S.MenuToggle>
    </S.Wrapper>
  );
}
