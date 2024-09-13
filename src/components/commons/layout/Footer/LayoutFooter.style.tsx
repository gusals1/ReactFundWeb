import styled from "@emotion/styled";
import Link from "next/link";

export const FooterNav = styled.nav`
  width: 100%;
  border-top: 1px solid #4c4c4d;
  border-bottom: 1px solid #4c4c4d;
`;
export const NavInner = styled.ul`
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const NavLi = styled.li`
  flex-grow: 1;

  &:nth-of-type(5) ::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 1px;
    height: 100%;
    background-color: #ccc;
  }
`;

export const NavLink = styled(Link)`
  display: block;
  text-align: center;
  padding: 15px 0;
  position: relative;
  color: #4c4c4d;
  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 100%;
    background-color: #ccc;
  }
`;

export const CompanyInfo = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 45px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const InfoTitle = styled.h4`
  font-size: 1.4rem;
  color: #85dfff;
  margin-bottom: 3px;
`;

export const InfoText = styled.p`
  color: #4c4c4d;
  :nth-child(4),
  :nth-child(8) {
    margin-bottom: 8px;
  }
  :last-child {
    color: #85dfff;
  }
`;

export const IconWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 30px;
  cursor: pointer;
`;
