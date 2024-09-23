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
  // 로그인 회원가입 페이지에서는 메인만 보여주기 때문에 경로에 따라 안보이게 변경해줌
  let isHidden = true;
  const isHiddenLogin = router.asPath.includes("/login");
  const isHiddenSignup = router.asPath.includes("/signup");

  if (isHiddenLogin || isHiddenSignup) {
    isHidden = false;
  }

  return (
    <>
      {isHidden && <LayoutHeader />}
      {isHidden && <LayoutNav />}
      {isHidden && <LayoutBanner />}
      {isHidden && <FullMenu />}
      <LayoutMain>{props.children}</LayoutMain>
      {isHidden && <LayoutFooter />}
    </>
  );
}
