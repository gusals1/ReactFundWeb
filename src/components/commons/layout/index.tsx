import styled from "@emotion/styled";
import { useRouter } from "next/router";
import LayoutHeader from "./Header/LayoutHeader.index";
import LayoutNav from "./NavMenu/LayoutNav.index";
import LayoutBanner from "./Banner/LayoutBanner.index";
import FullMenu from "./FullMenu/fullMenu.index";
import LayoutFooter from "./Footer/LayoutFooter.index";

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps): JSX.Element {
  const router = useRouter();
  const LayoutMain = styled.div`
    margin: auto;
  `;

  // true면 안보이게 false면 보이게하기
  // join이거나 login이면 true임
  const isHidden =
    router.asPath.includes("/login") || router.asPath.includes("/join");
  // new 이면 true임
  const isHiddenNew = router.asPath.includes("/new");

  // 내가 원하는 조건은 fullMenu와 Banner는 생성 페이지에서는 안보이게 하려고 함.
  // 그럼 조건이 isHidden과 isHidden중에 하나라도 false면 안보여야함.
  // 다른건 isHidden에만 구애받으면 됨.

  return (
    <>
      {!isHidden && <LayoutHeader />}
      {!isHidden && <LayoutNav />}
      {!(isHidden || isHiddenNew) && <LayoutBanner />}
      {!(isHidden || isHiddenNew) && <FullMenu />}
      <LayoutMain>{props.children}</LayoutMain>
      {!isHidden && <LayoutFooter />}
    </>
  );
}
