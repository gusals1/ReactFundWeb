import styled from "@emotion/styled";
import Link from "next/link";

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;
export const MainLogo = styled.h1`
  width: 14%;
  position: relative;
`;

export const Navigation = styled.nav`
  width: 75%;
`;
export const NavUl = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;
export const NavLi = styled.li`
  width: 25%;
  :hover a ::after {
    width: 100%;
  }
`;
export const StyleLink = styled(Link)`
  display: block;
  position: relative;
  padding: 0 9.5px;
  margin: 9.5px 0;
  text-align: center;
  color: #4c4c4d;
  font-size: 1.2rem;
  font-weight: bold;
  :hover {
    color: #85dfff;
  }
  ::after {
    content: "";
    position: absolute;
    left: 0;
    top: -9.5px;
    width: 0;
    height: 2px;
    background: #85dfff;
    transition: width 0.3s ease-in-out;
  }
`;

export const MenuToggle = styled.div`
  width: 32px;
  cursor: pointer;
  margin-bottom: 5px;
  position: relative;
`;

export const DropDownBox = styled.nav`
  position: absolute;
  top: 117%;
  right: 22%;
  width: 900px;
  height: 0;
  padding: 0 40px;

  border-radius: 0 0 10px 10px;
  box-shadow: 0px 2px 5px #7e7e7e;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  transition: height 0.3s ease-in-out;
  &.open {
    height: 60px;
  }
  &.open li {
    display: block;
    height: 60px;
    z-index: 99999;
  }
`;
export const Submenu = styled.li`
  width: 13%;
  display: none;
  height: 0;
  text-align: center;
  font-size: 14px;
  color: #4c4c4d;
  font-weight: bold;
  padding: 21px 0;
  transition: color 0.1s ease-in-out;
  :hover {
    color: #85dfff;
  }
`;
